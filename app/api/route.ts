import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const res = await request.json()
  return NextResponse.json({ res })
}
