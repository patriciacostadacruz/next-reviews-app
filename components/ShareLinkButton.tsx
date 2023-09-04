// needs to be added so this is treated as client component to be able to use functionalities such as onclick - which are not avail in server components (default)
// will be rendered both in server AND browser - hydration
'use client';

import { useState } from 'react';

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      {clicked ? 'Link copied!' : 'Share link'}
    </button>
  );
}
