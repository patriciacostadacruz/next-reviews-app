import Heading from '@/components/heading';
import { getReviews } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const featuredReviews = await getReviews(3);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      {featuredReviews.map((featuredReview, index) => (
        <li
          key={featuredReview.slug}
          className="border bg-white w-80 sm:w-full shadow rounded hover:shadow-xl list-none"
        >
          <Link
            className="flex flex-col sm:flex-row"
            href={`/reviews/${featuredReview.slug}`}
          >
            <Image
              priority
              src={featuredReview.image}
              alt="Game"
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <div className="px-2 py-1 text-center sm:text-left">
              <h2 className="font-orbitron font-semibold">
                {featuredReview.title}
              </h2>
              <p className="hidden sm:block pt-2">{featuredReview.subtitle}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
