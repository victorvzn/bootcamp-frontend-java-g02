import { NextResponse } from "next/server";

export async function GET(request) {
  return new NextResponse.json({ hola: 'hola' })
}
