import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="font-orbitron font-bold">
          <NavLink href="/">Indie Gamer</NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
