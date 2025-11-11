"use client";

import { useEffect, useState } from "react";
import AboutMeWithAnimation from "./AboutMeWithAnimation";
import SkillsWithAnimation from "./SkillsWithAnimation";

export default function ScrollObserver() {
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
    <>
      <AboutMeWithAnimation visibleSections={visibleSections} />
      <SkillsWithAnimation visibleSections={visibleSections} />
    </>
  );
}
