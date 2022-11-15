import React from "react";

export interface TagProps {
  className?: string;
  label: string;
}

function Tag({ className = "relative", label }: TagProps) {
  const CLASS = `bg-primary-200 text-primary-700 inline-flex px-2.5 py-1 rounded-full font-medium text-xs items-center space-x-4 ${className}`;
  console.log(CLASS);
  if (label?.length === 0) return <></>;
  return <span className={CLASS}>{label}</span>;
}

export default Tag;
