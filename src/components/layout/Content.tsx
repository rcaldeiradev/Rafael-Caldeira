import React from "react";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="content my-4 px-4 box-border w-full">
      {children}
    </div>
  )
}