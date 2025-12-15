import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const PRIVACY_POLICY = `PRIVACY POLICY

Last Updated: December 2024

1. INFORMATION WE COLLECT

We collect information that you provide directly to us, including:
- Account information (username, email)
- Game progress and statistics
- Device information and identifiers
- Usage data and analytics

2. HOW WE USE YOUR INFORMATION

We use the information we collect to:
- Provide, maintain, and improve our services
- Personalize your gaming experience
- Send you technical notices and support messages
- Monitor and analyze trends and usage

3. INFORMATION SHARING

We do not sell your personal information. We may share your information:
- With service providers who assist us in operating our game
- When required by law or to protect our rights
- In connection with a business transfer

4. DATA SECURITY

We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.

5. YOUR RIGHTS

You have the right to:
- Access your personal information
- Request deletion of your data
- Opt-out of certain data collection

6. CHILDREN'S PRIVACY

Our game is not intended for children under 13. We do not knowingly collect personal information from children under 13.

7. CHANGES TO THIS POLICY

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.

8. CONTACT US

If you have questions about this Privacy Policy, please contact us at:
support@neonmerge.com`

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line leading-relaxed">
            {PRIVACY_POLICY}
          </div>
        </div>
      </div>
    </main>
  )
}

