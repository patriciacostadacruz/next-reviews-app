import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const featuredReview = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="border bg-white w-80 sm:w-full rounded hover:shadow-xl">
        <Link
          className="flex flex-col sm:flex-row"
          href={`/reviews/${featuredReview.slug}`}
        >
          <Image
            src={featuredReview.image}
            alt="Game"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
            {featuredReview.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
