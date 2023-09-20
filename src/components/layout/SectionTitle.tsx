interface SectionTitleProps {
  titleText: string,
  className?: string,
}

export default function SectionTitle({ titleText, className }: SectionTitleProps) {
  return (
    <h2 className={`font-bold text-4xl mb-12 bg-emerald-300 inline-block px-3 py-1 ${className}`}>
      {titleText}
    </h2>
  )
}
