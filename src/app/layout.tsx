'use client';

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { Inter } from '@next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  display: 'optional',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();
  const pathStep = parseInt(pathname?.split("/steps/").pop() as any);
  const [step, setStep] = useState<number>(pathStep || 0);
  const [previousStep, setPreviousStep] = useState<number | null>(null);

  useEffect(() => {
    router.push(`/steps/${step}`)
  }, [step]);

  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="scrollbar-hide w-screen h-screen relative">
        {children}
        <div className="fixed bottom-8 left-16 flex gap-8">
          {previousStep !== null ? (
            <>
              {step === 0
                ? (
                  <button
                    className="bg-white text-black py-4 px-8 rounded shadow text-2xl border"
                    onClick={() => {
                      setPreviousStep(0)
                      setStep(previousStep!)
                    }}
                  >
                    Return
                  </button>
                ) : (
                  <button
                    className="bg-white text-black py-4 px-8 rounded shadow text-2xl border"
                    onClick={() => {
                      setPreviousStep(step);
                      setStep(0)
                    }}
                  >
                    Image
                  </button>
                )}
            </>
          ) : null}
        </div>
        <div className="fixed bottom-8 right-16 flex gap-8">
          {step > 0 ? (
            <button
              className="bg-white text-black py-4 px-8 rounded shadow text-2xl border"
              onClick={() => {
                setPreviousStep(step);
                setStep(step - 1);
              }}
            >
              Previous
            </button>
          ) : null}
          <button
            className="bg-white text-black py-4 px-8 rounded shadow text-2xl border"
            onClick={() => {
              setPreviousStep(step);
              setStep(step + 1);
            }}
          >
            Next
          </button>
        </div>
      </body>
    </html>
  )
}
