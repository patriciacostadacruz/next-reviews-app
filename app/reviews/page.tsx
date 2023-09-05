import Heading from '@/components/Heading';
import PaginationBar from '@/components/PaginationBar';
import { getReviews } from '@/lib/reviews';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews',
};

interface ReviewsPageProps {
  searchParams: { page?: string };
}

const PAGE_SIZE = 6;

function parsePageParams(paramValue: string): number {
  if (paramValue) {
    const page = parseInt(paramValue);
    // checks if the result is a number
    if (isFinite(page) && page >= 1) {
      return page;
    }
  }
  return 1;
}

export default async function ReviewsPage({ searchParams }: ReviewsPageProps) {
  const page = parsePageParams(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);

  return (
    <>
      <Heading>Reviews</Heading>
      <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            className="border w-80 list-none bg-white rounded hover:shadow-xl"
            key={review.slug}
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                priority={index === 0}
                src={review.image}
                alt="Game"
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="py-1 text-center font-orbitron font-semibold">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
