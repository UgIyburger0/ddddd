import Script from '../components/Script'
import Features from '../components/Features'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful trolling script
          </h1>
          <p className="text-xl text-gray-600">
            yapping here ig
          </p>
        </header>
        <Script />
        <Features />
        <CTA />
      </div>
    </main>
  )
}

