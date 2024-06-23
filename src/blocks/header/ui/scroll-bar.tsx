"use client"

// Basics
import { useLayoutEffect, useState } from "react"

// Shared
import { useEventListener } from "@/shared/utils/use-event-listener"

/** Scroll bar of the header */
export const HeaderScrollBar = () => {
  const [progress, setProgress] = useState(0);

  // When user scrolls, it updates the height position and then the width is
  // caluclated to showthe scroll progress bar
  const updateProgress = () => {
    let height = document.body.scrollHeight - window.innerHeight;
    let scrollPosition = document.documentElement.scrollTop;
    setProgress(Math.round((scrollPosition / height) * 100));
  }

  // Update progress on scroll
  useEventListener("scroll", updateProgress);

  // Update scroll on first render
  useLayoutEffect(updateProgress, [])

  return (
    <div 
      className="h-[2px] bg-slate-400 absolute -bottom-[2px] left-0 bg-gradient-to-r from-primary to-secondary" 
      style={{
        width: `${progress}%`
      }}
    />
  )
}