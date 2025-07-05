'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DebugEnv } from '@/components/debug-env';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          About Page - Image Path Test
        </h1>

        <Link href="/" className="text-blue-400 hover:underline mb-8 block">
          ← Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Next.js Image Component */}
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Next.js Image Component</h2>
            <p className="mb-4 text-zinc-300">src="avt.jpg" (relative path)</p>
            <div className="w-32 h-32 relative border border-zinc-700 rounded">
              <Image
                src="avt.jpg"
                alt="Avatar with Next.js Image"
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="mt-2 text-sm text-green-400">
              ✅ Should work (assetPrefix applied)
            </p>
          </div>

          {/* HTML img tag for comparison */}
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">HTML img tag</h2>
            <p className="mb-4 text-zinc-300">src="avt.jpg" (relative path)</p>
            <div className="w-32 h-32 border border-zinc-700 rounded overflow-hidden">
              <img
                src="avt.jpg"
                alt="Avatar with HTML img"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-red-400">
              ❌ Will try: /portfolio-cicd/about/avt.jpg
            </p>
          </div>

          {/* Absolute path test */}
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Absolute Path Test</h2>
            <p className="mb-4 text-zinc-300">
              src="/portfolio-cicd/avt.jpg" (absolute)
            </p>
            <div className="w-32 h-32 border border-zinc-700 rounded overflow-hidden">
              <img
                src="/portfolio-cicd/avt.jpg"
                alt="Avatar with absolute path"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-green-400">
              ✅ Should work (hardcoded path)
            </p>
          </div>

          {/* Debug info */}
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Route Debug Info</h2>
            <div className="text-sm space-y-2 font-mono">
              <div>
                <strong>Current Route:</strong> /about
              </div>
              <div>
                <strong>Expected Image URL:</strong> /portfolio-cicd/avt.jpg
              </div>
              <div>
                <strong>HTML img would try:</strong>{' '}
                /portfolio-cicd/about/avt.jpg
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-900/50 rounded-lg">
          <h3 className="text-xl font-bold mb-2">💡 Key Learning:</h3>
          <p>
            Next.js Image component với{' '}
            <code className="bg-zinc-700 px-2 py-1 rounded">assetPrefix</code>{' '}
            sẽ luôn resolve đúng đường dẫn bất kể đang ở route nào, trong khi
            HTML img tag sẽ resolve relative tới current URL.
          </p>
        </div>
      </div>

      <DebugEnv />
    </div>
  );
}
