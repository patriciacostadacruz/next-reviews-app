import Heading from '@/components/Heading';
import { getReview } from '@/lib/reviews';

interface ReviewPageProps {
  params: { slug: string };
}
export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img
        src={review.image}
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
