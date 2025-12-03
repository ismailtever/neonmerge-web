import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const TERMS_OF_USE = `TERMS OF USE (EULA)

Last Updated: January 2025



This End User License Agreement ("Agreement") is a legal agreement between you ("User") and NeonMerge: Endless Puzzle ("the Game", "we", "us"). By downloading, installing, or using the Game on iOS, you agree to be bound by this Agreement. If you do not agree to these terms, do not use the Game.



1. LICENSE GRANT

We grant you a personal, limited, non-exclusive, non-transferable, revocable license to use the Game solely for your own entertainment purposes in accordance with this Agreement.



2. USER RESPONSIBILITIES

You agree that:

- You will use the Game only for lawful purposes.

- You are responsible for maintaining the confidentiality of your device and account settings.

- You will not engage in cheating, exploiting, modifying, or reverse-engineering the Game.

- You will not interfere with the proper functioning of the Game or disrupt other users.



3. INTELLECTUAL PROPERTY

All content, graphics, gameplay mechanics, logos, artwork, code, and other materials included in the Game are owned by us and protected by copyright, trademark, and other intellectual property laws. You may not copy, distribute, or modify any part of the Game.



4. IN-APP PURCHASES & SUBSCRIPTIONS

The Game may offer optional in-app purchases or subscriptions.



- All purchases are processed by Apple through your Apple ID.

- Payments are charged at confirmation of purchase.

- Auto-renewable subscriptions renew unless canceled at least 24 hours before the renewal date.

- You can manage or cancel subscriptions in your App Store account settings.

- We do not store or access your payment information.

- All purchases are final and non-refundable unless required by law.



5. ADVERTISING & TRACKING

The Game uses AdMob to serve advertisements.



- Personalized ads require your explicit permission via Apple's App Tracking Transparency (ATT).

- If you opt out of tracking, only non-personalized ads will be shown.

- You can change tracking permissions anytime from:

  Settings → Privacy & Security → Tracking



6. PRIVACY & DATA USE

Your use of the Game is also governed by our Privacy Policy, which details how we collect, use, and share data.



Privacy Policy:

https://www.neonmerge.fun/privacy



By using the Game, you agree that certain data may be processed by:

- AdMob (for ads)

- Adapty (for in-app purchase and subscription validation)



7. DISCLAIMER OF WARRANTIES

THE GAME IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.



We do not guarantee:

- Uninterrupted access

- Error-free performance

- That bugs will be corrected immediately



8. LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE GAME.



This includes but is not limited to:

- Loss of data

- Device malfunction

- In-app purchase issues beyond our control



9. TERMINATION

We reserve the right to suspend or terminate your access to the Game at any time if:

- You violate this Agreement

- The Game is discontinued

- Legal requirements necessitate it



Upon termination, your license to use the Game will immediately end.



10. CHANGES TO THIS AGREEMENT

We may update or amend this Agreement at any time. The updated version will be posted online at:



https://www.neonmerge.fun/terms



Your continued use of the Game after changes signifies your acceptance of the updated terms.



11. CONTACT

If you have any questions about this Agreement, please contact:



Email: support@neonmerge.com  

Website: https://www.neonmerge.fun`

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

