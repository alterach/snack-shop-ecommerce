import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add custom props here if needed in the future
  _?: never
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "input-field w-full px-4 py-3 rounded-2xl border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
