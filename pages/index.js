import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex p-2 bg-green-500">
        <h1 className="text-xlg">Cookie Stand Admin</h1>
      </header>

      <main className="">
        <div className="w-1/2 mx-auto bg-green-300">
          <form className="w-1/2 m-4 mx-auto bg-green-400 border border-green-400">
            <input className="flex-auto pl-1"></input>
            <input></input>
            <input></input>
            <input></input>
            <button></button>
          </form>
        </div>
      </main>

      <footer className="flex p-2 text-gray-600 bg-green-500">
        <p>2021</p>
      </footer>
    </div>
  )
}
