export default function SectionTitle({ titleText }: { titleText: string }) {
  return (
    <h1 className="font-bold text-xl mb-4">
      {titleText}
    </h1>
  )
}