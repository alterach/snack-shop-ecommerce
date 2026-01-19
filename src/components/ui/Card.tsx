import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    const hoverClasses = hover
      ? "hover:shadow-playful hover:-translate-y-2 hover:scale-[1.02]"
      : ""

    return (
      <div
        ref={ref}
        className={cn(
          "snack-card bg-white rounded-3xl p-4 shadow-soft transition-all duration-300 ease-out",
          hoverClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }
