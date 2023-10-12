import { getDictionary } from '@/lib/dictionaries';

interface HeroProps {
  lang: string;
}

export default async function Hero({ lang }: HeroProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="hero mb-10 mt-4 lg:my-20">
      <h1 className="flex flex-col">
        <span className="font-extrabold text-4xl lg:text-6xl mb-3">
          Rafael Caldeira
        </span>
        <span className="font-semibold text-xl lg:text-3xl text-gray-500">
          {dictionary.position}
        </span>
      </h1>
    </div>
  );
}
