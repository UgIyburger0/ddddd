import { Terminal, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Terminal,
    title: 'Powerful Functionality',
    description: 'yay',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'yay',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'yay',
  },
]

export default function Features() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Key Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

