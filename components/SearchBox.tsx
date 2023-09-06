'use client';

import useIsClient from '@/lib/hooks';
import { Combobox } from '@headlessui/react';

export default function SearchBox() {
  const isClient = useIsClient();
  if (!isClient) {
    return null;
  }

  return (
    <Combobox>
      <Combobox.Input placeholder="Search..." />
    </Combobox>
  );
}
