import Link from "next/link";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline";

interface ArrowLinkProps {
  path: string,
  text: string,
  className?: string,
}

export default function ArrowLink(
  { path, text, className }: ArrowLinkProps
) {
  return <Link
    href={path}
    className={`text-xl text-blue-700 inline-block ${className}`}
  >
    {text}
    <ArrowLongRightIcon className="h-6 w-6 ml-3 inline-block" />
  </Link>
}
