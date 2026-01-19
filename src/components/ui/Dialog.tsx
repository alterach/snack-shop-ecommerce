import * as React from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
  title?: string
  description?: string
}

const Dialog = ({ open, onOpenChange, children, title, description }: DialogProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange?.(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {(title || description) && (
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                  <div>
                    {title && <h2 className="text-xl font-bold text-slate-900">{title}</h2>}
                    {description && <p className="text-sm text-slate-600">{description}</p>}
                  </div>
                  <button
                    onClick={() => onOpenChange?.(false)}
                    className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              )}
              <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export { Dialog }
