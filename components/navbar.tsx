import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="text-orange-800 hover:underline font-orbitron font-bold"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          {/* argument prefetch={false} can be added to the Link - allows to avoid prefecthing the doc in prod builds */}
          <Link href="/about" className="text-orange-800 hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
