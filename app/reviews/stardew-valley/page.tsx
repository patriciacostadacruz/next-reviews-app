import { readFile } from 'node:fs/promises';
import { marked } from 'marked';
import Heading from '@/components/Heading';

export default async function StardewValleyPage() {
  const text = await readFile('./content/reviews/stardew-valley.md', 'utf8');
  const html = marked(text);

  return (
    <>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/game.png"
        alt="Game"
        width="650"
        height="360"
        className="mb-2 rounded"
      />
      {/* argument used to display only the text from html */}
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
