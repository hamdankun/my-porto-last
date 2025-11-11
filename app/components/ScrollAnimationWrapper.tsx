"use client";

import { ReactNode, useEffect, useState } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
}

export default function ScrollAnimationWrapper({
  children,
}: ScrollAnimationWrapperProps) {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(entry.target.id);
            } else {
              newSet.delete(entry.target.id);
            }
            return newSet;
          });
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(
      "section[id='about'], section[id='skills']"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>{typeof children === "function" ? children(visibleSections) : children}</>
  );
}
