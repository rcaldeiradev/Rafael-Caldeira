interface TagProps {
  label: string,
  className?: string,
}

export default function Tag(
  { label, className }: TagProps
) {
  return (
    <div className={`py-1 px-2 text-sm inline-block rounded-lg ${className}`} data-testid="tag">
      {label}
    </div>
  )
}
