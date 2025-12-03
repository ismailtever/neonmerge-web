import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const PRIVACY_POLICY = `PRIVACY POLICY



Last Updated: January 2025

This Privacy Policy explains how NeonMerge: Endless Puzzle ("the Game", "we", "us") collects, uses, and protects your information when you play our mobile game on iOS.

By downloading or using the Game, you agree to this Privacy Policy.

1. INFORMATION WE COLLECT

A. Information You Provide

- In-game settings and preferences

- Support requests (email messages, logs if provided voluntarily)

B. Automatically Collected Information

We may collect:

- Device information (device model, iOS version, language)

- Identifiers for advertising and analytics (IDFA if user permission is granted)

- IP address

- Gameplay data (levels, progress, high scores)

- Crash reports and diagnostics

- General usage statistics (session length, screens visited)

C. Third-Party SDK Data

The Game uses the following third-party services:

1. **AdMob (Google) — Ads**

   - Collects device identifiers (IDFA—only if user allows tracking)

   - Collects approximate location (country/region)

   - Collects ad performance data and general analytics  

   Google Privacy Policy: https://policies.google.com/privacy

2. **Adapty — Subscription & IAP Tracking**

   - Collects device data for subscription validation

   - Processes App Store receipts

   - Tracks subscription events (trial, renewal, cancellation)

   Adapty Privacy Policy: https://adapty.io/privacy

All data is processed according to Apple's App Store Privacy Guidelines.

2. HOW WE USE INFORMATION

We use collected data to:

- Operate and improve the Game

- Deliver ads through AdMob

- Validate in-app purchases and subscriptions via Adapty

- Analyze gameplay, performance, and user behavior

- Provide customer support

- Prevent fraud and unauthorized activity

We do NOT sell personal data.

3. ADVERTISING & TRACKING (AdMob)

The Game displays ads using Google AdMob.

- Personalized ads require explicit ATT (App Tracking Transparency) permission.

- If user declines tracking, only non-personalized ads are shown.

- Users may disable tracking anytime from:

  iOS Settings → Privacy → Tracking

4. IN-APP PURCHASES & SUBSCRIPTIONS (Adapty)

All payments are handled securely by Apple.  

We do NOT collect or store your credit card information.

Adapty processes:

- Subscription lifecycle events

- App Store receipts for validation

- Anonymous device identifiers for subscription attribution

5. DATA SECURITY

We use technical and organizational measures to keep your information secure.  

However, no system is completely secure, and we cannot guarantee absolute protection.

6. YOUR RIGHTS (iOS Users)

You may:

- Request deletion of your data

- Request access to your stored data

- Opt out of tracking or personalized ads

- Disable IDFA at any time through device settings

To exercise your rights, email us at: **support@neonmerge.com**

7. CHILDREN'S PRIVACY

The Game is not intended for children under 13.  

We do not knowingly collect personal data from children under 13.  

If such data is discovered, we will delete it immediately.

8. INTERNATIONAL DATA TRANSFER

Your data may be processed outside of your country, including by:

- Google (AdMob)

- Adapty

- Our analytics providers

All transfers comply with applicable data protection laws.

9. DATA RETENTION

We retain data only as long as necessary for:

- Operating the Game

- Subscription validation

- Analytics and diagnostics

- Legal requirements

After this period, data is deleted or anonymized.

10. CHANGES TO THIS POLICY

This Privacy Policy may be updated periodically.  

The updated version will be posted at:  

https://www.neonmerge.fun/privacy  

The "Last Updated" date will reflect the latest changes.

11. CONTACT US

If you have any questions about this Privacy Policy, please contact:

Email: **support@neonmerge.com**  

Website: **https://www.neonmerge.fun**`

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

