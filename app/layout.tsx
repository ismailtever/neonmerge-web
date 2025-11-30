import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeonMerge: Endless Puzzle - Merge. Blast. Repeat.',
  description: 'The ultimate endless block puzzle game with AI coaching and neon aesthetics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

