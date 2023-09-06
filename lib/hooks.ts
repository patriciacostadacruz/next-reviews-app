import { useEffect, useState } from 'react';

export default function useIsClient(): boolean {
  const [isClient, setisClient] = useState(false);
  useEffect(() => setisClient(true), []);
  return isClient;
}
