'use client';

import { FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();

  const handleLanguageChange = (e: FormEvent) => {
    const selectedLanguage = (e.target as HTMLSelectElement).value;

    if (selectedLanguage !== lang) {
      const pathAfterLang = pathname.substring(3);
      router.push(`/${selectedLanguage}/${pathAfterLang}`);
    }
  };

  return (
    <form>
      <select
        onChange={handleLanguageChange}
        defaultValue={lang}
        className="bg-gray-700 text-gray-300 py-2 px-4 block mx-auto mt-10"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </form>
  );
}
