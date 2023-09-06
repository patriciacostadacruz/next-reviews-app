import { searchReviews } from '@/lib/reviews';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query');
  const reviews = await searchReviews(query);
  return NextResponse.json(reviews);
}
