import Heading from '@/components/Heading';
import ShareButtons from '@/components/ShareButtons';
import { getReview } from '@/lib/reviews';
import { Metadata } from 'next';
import Image from 'next/image';

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export const dynamic = 'force-dynamic';

// export async function generateStaticParams(): Promise<ReviewPageParams[]> {
//   const slugs = await getSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

// allows to give the metadata title dynamically in function of the game
export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareButtons />
      </div>
      <Image
        src={review.image}
        priority
        alt="Game"
        width="650"
        height="360"
        className="mb-2 rounded"
      />
      {/* argument used to display only the text from html */}
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
