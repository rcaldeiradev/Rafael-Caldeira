interface PageTitleProps {
  titleText: string;
  className?: string;
}

export default function PageTitle({ titleText, className }: PageTitleProps) {
  return (
    <h1
      className={`font-extrabold text-4xl lg:text-5xl mb-10 mt-4 lg:my-10 ${className}`}
    >
      {titleText}
    </h1>
  );
}
