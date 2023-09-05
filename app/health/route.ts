import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ healthy: true });
}
