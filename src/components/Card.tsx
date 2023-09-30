import ArrowLink from "@/components/ArrowLink";
import Tag from "@/components/Tag";

interface CardProps {
  title: string,
  href: string,
  linkText?: string,
  tags: Array<string>,
  className?: string,
}

export default function Card(
  { title, href, linkText, tags, className }: CardProps
) {
  return (
    <div className={`card relative p-4 lg:p-6 rounded-3xl flex flex-col ${className}`}>
      <div className="tags">
        {tags && tags.map((label, key) => {
          return <Tag label={label} key={key} className="text-gray-500 bg-gray-50 mr-2 mb-2 lg:mr-3 lg:mb-3" />
        })}
      </div>

      <div className="texts mt-auto">
        <h2 className="title text-2xl lg:text-4xl font-bold lg:mb-4">{title}</h2>
        <ArrowLink path={href} text={linkText ? linkText : 'View'} />
      </div>
    </div>
  )
}
