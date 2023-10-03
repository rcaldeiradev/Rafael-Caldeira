import 'server-only';

export interface Dictionary {
  [key: string]: string;
}

const dictionaries: {
  [key: string]: () => Promise<Dictionary>;
} = {
  pt: () => {
    return import('../dictionaries/pt.json').then((module) => module.default);
  },
  en: () => {
    return import('../dictionaries/en.json').then((module) => module.default);
  },
};

export const getDictionary = async (locale: string) => {
  const dictionary = dictionaries[locale];
  return dictionary();
};
