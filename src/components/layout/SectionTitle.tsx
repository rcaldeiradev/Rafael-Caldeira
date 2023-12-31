interface SectionTitleProps {
  titleText: string;
  className?: string;
}

export default function SectionTitle({
  titleText,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={`font-bold text-2xl lg:text-4xl bg-emerald-300 inline-block px-4 py-2 ${className}`}
    >
      {titleText}
    </h2>
  );
}
