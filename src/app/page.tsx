'use client'
import Image from 'next/image'
import {atom, useAtom} from 'helux'
import {Test} from "@/componnests/Test";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Test />
    </main>
  )
}
