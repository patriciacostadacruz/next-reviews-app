import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li>
          {/* argument prefetch={false} can be added to the Link - allows to avoid prefecthing the doc in prod builds */}
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
