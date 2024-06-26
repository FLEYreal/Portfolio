// Basics
import Link, { type LinkProps } from "next/link"
import { ReactNode } from "react"

// Shared
import { cn } from "@/shared/utils/cn"

/** Item of the header navigation bar. */
export const HeaderItem = ({ children, selected, ...props }: LinkProps & { children?: ReactNode; className?: string; selected?: boolean }) => (
  <Link
    {...props}
    data-selected={selected ? "selected" : "not"}
    className={cn(
      "relative group text-foreground transition-all duration-300 ease-in-out rounded-full py-2.5 px-5",
      selected ? "bg-gray-200 bg-opacity-5" : "",
      props.className
    )}
  >
    <span className={cn(
      "relative z-10 transition-all duration-300 ease-in-out flex items-center justify-center",
      !selected ? "group-hover:text-transparent" : ""
    )}>
      {children}
    </span>

    {!selected && (
      <span className="absolute inset-0 flex items-center justify-center z-0 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        {children}
      </span>
    )}

    {selected && (
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20 rounded-full"></span>
    )}

    {!selected && (
      <span className="rounded-full absolute bottom-0 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-primary to-secondary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"/>
    )}
  </Link>
);
