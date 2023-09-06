'use client';

import { Combobox } from '@headlessui/react';
import { useEffect, useState } from 'react';

export default function SearchBox() {
  const [isClient, setisClient] = useState(false);
  useEffect(() => setisClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Combobox>
      <Combobox.Input placeholder="Search..." />
    </Combobox>
  );
}
