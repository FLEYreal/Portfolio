"use client";

// Basics
import { useEffect } from "react";

export type EventListenerOptions<E extends Element> = {
  element?: HTMLElement | "document" | "window" | E;
  allow?: boolean;
  dependencies?: unknown[];
};

/**
 * Hook that handles routine of event listener handling like removal on unmount, checking and etc.
 *
 * @prop {T} eventName - The name of event to listen to.
 * @prop {function} callback - The callback to run on event run.
 * @prop {HTMLElement | "document"} - Element to apply listener to. It uses strings as using window / document
 * in the component might cause problems as they can be undefined in the first render.
 * @prop {boolean} allow - Whether to allow listener apply or not. Might be helpful if it depends on some sort of state.
 */
export function useEventListener<E extends Element, T extends keyof WindowEventMap>(
  eventName: T,
  callback: (event: WindowEventMap[T]) => void,
  options: EventListenerOptions<E> = {
    allow: true,
  },
) {
  useEffect(() => {
    // If it's SSR or if the "allow" is false
    if (options.allow === false || typeof window === "undefined") return () => {};

    // The target element apply listener to
    let targetEl;

    // Define where to apply listener to
    if (options.element === "document") targetEl = document;
    else targetEl = options.element === "window" || !options.element ? window : options.element;

    // Add event listener
    targetEl.addEventListener(eventName, callback as EventListener);

    // Remove event listener on cleanup
    return () => {
      targetEl.removeEventListener(eventName, callback as EventListener);
    };
  }, [eventName, options.element, options.allow, ...(options.dependencies || [])]);
}
