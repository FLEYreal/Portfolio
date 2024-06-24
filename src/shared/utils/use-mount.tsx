"use client"

// Basics
import { useEffect, useState } from "react"

/** Simple hook to provide mount state */
export const useMount = (): boolean => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}