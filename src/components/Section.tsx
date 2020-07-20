import React from "react";

interface sectionProps {
  className?: string;
  title?: string;
  children: any;
}

export default function Section({
  title,
  className,
  children,
  ...props
}: sectionProps) {
  return (
    <section className={className} {...props}>
      {title ? <h2>{title}</h2> : <></>}
      {children}
    </section>
  );
}
