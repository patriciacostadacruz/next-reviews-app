// needs to be added so this is treated as client component to be able to use functionalities such as onclick - which are not avail in server components (default)
// will be rendered both in server AND browser - hydration
'use client';

import ShareLinkButton from './ShareLinkButton';

export default function ShareButtons() {
  return (
    <div className="flex">
      <ShareLinkButton /> | [Twitter] | [Facebook]
    </div>
  );
}
