import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses = "font-semibold rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95"

    const variantClasses = {
      primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg",
      secondary: "bg-accent-500 hover:bg-accent-600 text-slate-900 shadow-md hover:shadow-lg",
      danger: "bg-danger-500 hover:bg-danger-600 text-white shadow-md hover:shadow-lg",
      ghost: "bg-transparent hover:bg-cream-200 text-slate-700 hover:text-slate-900",
    }

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
