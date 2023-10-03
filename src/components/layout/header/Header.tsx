import Navigation from '@/components/layout/header/Navigation';
import Brand from '@/components/layout/header/Brand';
import { getDictionary } from '@/lib/dictionaries';

interface HeaderProps {
  lang: string;
}

export default async function Header({ lang }: HeaderProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="px-4 2xl:px-0 py-6 bg-gray-900">
      <div className="container mx-auto flex justify-between relative">
        <Navigation dictionary={dictionary} />
        <Brand />
      </div>
    </header>
  );
}
