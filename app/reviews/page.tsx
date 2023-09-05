import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews',
};

export const dynamic = 'force-dynamic';

export default async function ReviewsPage() {
  const reviews = await getReviews(6);

  return (
    <>
      <Heading>Reviews</Heading>
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
