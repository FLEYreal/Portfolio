"use client";

// Libs
import { useMediaQuery } from "react-responsive";

// Outside
import tailwindConfig from "@/../tailwind.config";

// Vars & Types
const breakpoints = tailwindConfig.theme.container.screens;
export type BreakpointKey = keyof typeof breakpoints;

/**
 * Custom hook that returns a boolean value indicating whether the current viewport width matches the specified breakpoint.
 *
 * @template K - The type of the breakpoint key.
 * @param {K} breakpointKey - The key of the breakpoint to check.
 * @returns {Record<Key, boolean>} - An object with a single property indicating whether the breakpoint is active.
 */
export const useBreakpoint = <K extends BreakpointKey>(
  breakpointKey: K,
): Record<`is${Capitalize<K>}`, boolean> => {
  // Whether it's the current breakpoint
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });

  // Create key for the object
  const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

  // Return result with explicit type
  return {
    [`is${capitalizedKey}`]: bool,
  } as unknown as Record<`is${Capitalize<K>}`, boolean>;
};
