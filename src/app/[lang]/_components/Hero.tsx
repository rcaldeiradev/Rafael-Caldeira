import { Dictionary } from '@/lib/dictionaries';

interface HeroProps {
  dictionary: Dictionary;
}

export default async function Hero({ dictionary }: HeroProps) {
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
