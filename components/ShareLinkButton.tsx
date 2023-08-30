// needs to be added so this is treated as client component to be able to use functionalities such as onclick - which are not avail in server components (default)
// will be rendered both in server AND browser - hydration
'use client';

export default function ShareLinkButton() {
  const handleClick = () => {
    return;
  };

  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      Share link
    </button>
  );
}
