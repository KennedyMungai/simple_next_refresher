import { NextResponse } from "next/server";

const fs = require('fs')

const path = require('path')

export async function POST(request)
{
    const data = request.json()

    const filePath = path.resolve(process.cwd(), )
}

// export async function GET()
// {
//     return NextResponse.json({ 
//         message: "Hello World"
//     })
// }