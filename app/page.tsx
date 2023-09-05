import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const { reviews } = await getReviews(3);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      {reviews.map((review, index) => (
        <li
          key={review.slug}
          className="border bg-white w-80 sm:w-full shadow rounded hover:shadow-xl list-none"
        >
          <Link
            className="flex flex-col sm:flex-row"
            href={`/reviews/${review.slug}`}
          >
            <Image
              priority
              src={review.image}
              alt="Game"
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <div className="px-2 py-1 text-center sm:text-left">
              <h2 className="font-orbitron font-semibold">{review.title}</h2>
              <p className="hidden sm:block pt-2">{review.subtitle}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
