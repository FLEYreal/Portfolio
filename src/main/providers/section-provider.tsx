"use client";

// Basics
import { type ReactNode, useState, useMemo } from "react";

// Shared
import { type ISectionContext, type Section, SectionContext } from "@/shared/utils/use-section-context";

/** Section provider gives context with currently shown block of the landing page */
export const SectionProvider = ({ children }: { children: ReactNode }) => {
  // State of the current section
  const [section, setSection] = useState<Section>("home");

  const contextValue: ISectionContext = useMemo(() => ({
    section, setSection
  }), [section]);

  return (
    <SectionContext.Provider value={contextValue}>{children}</SectionContext.Provider>
  )
}