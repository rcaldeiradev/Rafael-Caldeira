import SectionTitle from "@/components/layout/SectionTitle";
import Card from "@/components/Card";
import ArrowLink from "@/components/ArrowLink";

interface CardItem {
  title: string,
  href: string,
  tags: Array<string>
}

interface CardsList extends Array<CardItem> {}

const cards: CardsList = [
  {
    title: 'Benzel-Busch',
    href: '/projects',
    tags: [
      'Drupal',
      'React',
      'Apache Solr'
    ],
  },
  {
    title: 'MIT Quest',
    href: '/projects',
    tags: [
      'Drupal 10',
    ],
  },
  {
    title: 'DomusVi',
    href: '/projects',
    tags: [
      'Drupal 7',
      'Apache Solr'
    ],
  }
]

export default function FeaturedProjects() {
  if (!cards) {
    return null;
  }

  return (
    <div className="featured-projects mb-6 lg:mb-28">
      <SectionTitle titleText="Featured Projects" className="mb-8 lg:mb-16" />

      <ul className="cards flex flex-col md:flex-row gap-4 lg:gap-8 mb-6 lg:mb-12">
        {cards.map((card, key) => {
          return (
            <li key={key} className="basis-1/3">
              <Card
                title={card.title}
                href={card.href}
                linkText="View project"
                tags={card.tags}
                className="bg-gray-300 h-44 lg:h-64"
              />
            </li>
          )
        })}
      </ul>

      <div className="actions flex justify-center">
        <ArrowLink path={'/projects'} text={'See all projects'} />
      </div>
    </div>
  )
}
