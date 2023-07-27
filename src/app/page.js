import Link from "next/link";


export default function Home() {
  return (
    <main className=' min-h-screen flex flex-col items-center justify-center gap-5'>
      <Link href="/play" className=' border border-black rounded-3xl px-10 py-4 hover:bg-black hover:text-white'>play</Link>
    </main>
  )
}