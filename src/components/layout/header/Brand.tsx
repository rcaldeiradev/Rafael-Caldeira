import Link from 'next/link';

interface BrandProps {
  lang: string;
}

export default function Brand({ lang }: BrandProps) {
  return (
    <Link
      href={`/${lang}`}
      className="inline-block self-center font-bold text-2xl bg-white px-3 py-1"
      aria-label="Go to the homepage"
    >
      {/*[ RC ] */}
      {`[ RC ]`}
    </Link>
  );
}
