import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const TERMS_OF_USE = `TERMS OF USE

Last Updated: December 2024

1. ACCEPTANCE OF TERMS

By downloading, installing, or using NeonMerge: Endless Puzzle ("the Game"), you agree to be bound by these Terms of Use. If you do not agree, do not use the Game.

2. LICENSE GRANT

Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Game for your personal, non-commercial entertainment purposes.

3. USER ACCOUNTS

You are responsible for:
- Maintaining the confidentiality of your account
- All activities that occur under your account
- Notifying us immediately of any unauthorized use

4. PROHIBITED CONDUCT

You agree not to:
- Use the Game for any illegal purpose
- Attempt to hack, reverse engineer, or modify the Game
- Use automated systems or bots
- Interfere with other users' enjoyment of the Game
- Share your account with others

5. INTELLECTUAL PROPERTY

All content, features, and functionality of the Game are owned by us and are protected by copyright, trademark, and other intellectual property laws.

6. IN-APP PURCHASES

The Game may offer in-app purchases. All purchases are final and non-refundable unless required by law.

7. DISCLAIMER OF WARRANTIES

THE GAME IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.

8. LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES.

9. TERMINATION

We may terminate or suspend your access to the Game at any time, with or without cause or notice.

10. CHANGES TO TERMS

We reserve the right to modify these Terms at any time. Your continued use of the Game constitutes acceptance of any changes.

11. CONTACT INFORMATION

For questions about these Terms, contact us at:
support@neonmerge.com`

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full z-40 bg-bg/80 backdrop-blur-sm border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary text-glow-primary">Neon</span>
            <span className="text-accent text-glow-accent">Merge</span>
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <div className="bg-bg/50 border-2 border-primary rounded-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-glow-primary">
            Terms of Use
          </h1>
          <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line leading-relaxed">
            {TERMS_OF_USE}
          </div>
        </div>
      </div>
    </main>
  )
}

