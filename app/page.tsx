'use client'

import Link from 'next/link'
import { Star, Sparkles, Zap, Gift, Palette } from 'lucide-react'
import GameGrid from '@/components/GameGrid'

export default function Home() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full z-40 bg-bg/80 backdrop-blur-sm border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-primary text-glow-primary">Neon</span>
            <span className="text-accent text-glow-accent">Merge</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Download
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Merge.</span>{' '}
              <span className="text-primary text-glow-primary">Blast.</span>{' '}
              <span className="text-accent text-glow-accent">Repeat.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              The ultimate endless block puzzle game with power-ups, boosters, and neon
              aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#"
                className="group relative px-8 py-4 bg-primary text-bg font-bold rounded-lg overflow-hidden transition-all hover:scale-105 border-glow-primary"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download on App Store
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#"
                className="group relative px-8 py-4 bg-accent text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 border-glow-accent"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get it on Google Play
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          <div className="animate-float">
            <GameGrid />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 container mx-auto scroll-mt-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-primary text-glow-primary">Features</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-bg/50 border border-primary/30 rounded-lg hover:border-primary transition-all hover:scale-105 group">
            <div className="mb-4 text-primary group-hover:animate-glow">
              <Sparkles size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">
              Endless Gameplay
            </h3>
            <p className="text-gray-300">
              Relaxing yet challenging puzzles that never end. Perfect your
              strategy and beat your high score.
            </p>
          </div>

          <div className="p-6 bg-bg/50 border border-accent/30 rounded-lg hover:border-accent transition-all hover:scale-105 group">
            <div className="mb-4 text-accent group-hover:animate-glow">
              <Zap size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-accent">Power-ups & Boosters</h3>
            <p className="text-gray-300">
              Unlock powerful boosters and special power-ups to clear the board faster. 
              Strategic use leads to higher scores.
            </p>
          </div>

          <div className="p-6 bg-bg/50 border border-success/30 rounded-lg hover:border-success transition-all hover:scale-105 group">
            <div className="mb-4 text-success group-hover:animate-glow">
              <Gift size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-success">
              Daily Rewards
            </h3>
            <p className="text-gray-300">
              Keep your streak alive and unlock exclusive rewards. Play every
              day to maximize your benefits.
            </p>
          </div>

          <div className="p-6 bg-bg/50 border border-warning/30 rounded-lg hover:border-warning transition-all hover:scale-105 group">
            <div className="mb-4 text-warning group-hover:animate-glow">
              <Palette size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-warning">
              Pro Themes
            </h3>
            <p className="text-gray-300">
              Customize your experience with stunning neon themes. Make the game
              truly yours.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="reviews"
        className="py-20 px-4 container mx-auto scroll-mt-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-accent text-glow-accent">What Players Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Alex Chen',
              review:
                'Addictive gameplay with the perfect balance of challenge and relaxation. The power-ups make every game exciting!',
              rating: 5,
            },
            {
              name: 'Sarah Johnson',
              review:
                'Love the neon aesthetics and endless gameplay. Daily rewards keep me coming back every day!',
              rating: 5,
            },
            {
              name: 'Mike Rodriguez',
              review:
                'Best puzzle game I\'ve played in years. The Pro themes are gorgeous and the game runs smoothly.',
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-bg/50 border border-primary/30 rounded-lg hover:border-primary transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-warning text-warning"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "{testimonial.review}"
              </p>
              <p className="text-primary font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="download"
        className="py-12 px-4 border-t border-primary/20 mt-20"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-xl font-bold">
              <span className="text-primary text-glow-primary">Neon</span>
              <span className="text-accent text-glow-accent">Merge</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
              <a
                href="mailto:support@neonmerge.com"
                className="hover:text-primary transition-colors"
              >
                support@neonmerge.com
              </a>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            Copyright © 2024 NeonMerge. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

