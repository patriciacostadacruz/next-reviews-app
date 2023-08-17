import { readFile } from 'node:fs/promises';
import Heading from '@/components/Heading';
import { read } from 'node:fs';

export default async function StardewValleyPage() {
  const text = await readFile('./content/reviews/stardew-valley.md', 'utf8');

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
      <p>{text}</p>
    </>
  );
}
