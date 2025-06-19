import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]",
        outline: "text-foreground border-border hover:shadow-[0_0_6px_rgba(255,255,255,0.4)]",
        success:
          "border-transparent bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]",
        warning:
          "border-transparent bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30 hover:shadow-[0_0_10px_rgba(251,191,36,0.4)]",
        info:
          "border-transparent bg-primary/10 text-primary border-primary/30 hover:shadow-[0_0_10px_rgba(96,165,250,0.3)]",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-0.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
