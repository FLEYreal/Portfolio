// Basics
import { type Dispatch, type SetStateAction, createContext, useContext } from "react";

export type Section = "home" | "about" | "portfolio" | "experience"

export interface ISectionContext {
  section: Section;
  setSection: Dispatch<SetStateAction<Section>>;
}

export const SectionContext = createContext<ISectionContext>({} as ISectionContext)

export const useSectionContext = (): ISectionContext => useContext(SectionContext)
