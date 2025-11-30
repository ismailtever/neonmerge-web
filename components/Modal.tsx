'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export default function Modal({ isOpen, onClose, title, content }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-bg border-2 border-primary rounded-lg shadow-2xl overflow-hidden animate-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-bg/95 backdrop-blur-sm border-b border-primary/30 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary text-glow-primary">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary/20 rounded-lg transition-colors text-primary hover:text-white"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

