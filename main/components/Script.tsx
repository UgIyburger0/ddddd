'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ClipboardIcon, CheckIcon } from 'lucide-react'

const scriptContent = `print("hello world")
`

export default function Script() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-12">
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-700">
          <span className="text-gray-300">main.lua</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            {copied ? (
              <CheckIcon className="w-5 h-5" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <SyntaxHighlighter
          language="bash"
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: '#1f2937', // Tailwind's gray-800
          }}
        >
          {scriptContent}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

