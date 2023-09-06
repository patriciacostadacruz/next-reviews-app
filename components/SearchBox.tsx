'use client';

import useIsClient from '@/lib/hooks';
import { SearchableReview } from '@/lib/reviews';
import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const reviews = [
  { slug: 'bla', title: 'bla' },
  { slug: 'bli', title: 'bli' },
];

export default function SearchBox() {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');

  if (!isClient) {
    return null;
  }

  const handleChange = (review: SearchableReview) => {
    router.push(`/reviews/${review.slug}`);
  };

  const filtered = reviews.filter((review) => review.title.includes(query));

  return (
    <div className="relative w-50">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder="Search..."
          className="border px-2 py-1 rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Options className="absolute bg-white py-1 w-full">
          {filtered.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    active ? 'bg-orange-100' : ''
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
