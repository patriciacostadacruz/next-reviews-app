import Heading from '@/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export const revalidate = 30;

export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <p>
        This is the about section for this website created to learn Next.js.
      </p>
    </>
  );
}
