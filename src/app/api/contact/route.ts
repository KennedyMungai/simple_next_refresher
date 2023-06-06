import { NextRequest, NextResponse } from "next/server";

const fs = require('fs')

const path = require('path')

export async function POST(request: NextRequest)
{
    const data = await request.json()

    const filePath = path.resolve(process.cwd(), 'app/data/submission.json')

    let submissions: any = []

    try {
        const data = fs.readFileSync(filePath, 'utf8')
        submissions = JSON.stringify(data)
    
    } catch (error: any) {
        console.error('Error Reading this file. Message - '+error.message)
    }

    submissions.push(data)

    try {
        const newData = JSON.stringify(submissions, null, 2)
        fs.writeFileSync(filePath, newData, 'utf8')
    } catch (error: any) {
        console.error('Error Writing this file. Message - '+ error.message)
    }

    return NextResponse.json({
        data, 
        message: "This message has been successfully sent"
    })
}

// export async function GET()
// {
//     return NextResponse.json({ 
//         message: "Hello World"
//     })
// }