interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className="font-bold text-2xl pb-3">{children}</h1>;
}
