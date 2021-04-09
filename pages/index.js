import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex p-2 bg-green-500">
        <h1 className="text-lg">Cookie Stand Admin</h1>
      </header>

      <main className="p-8 ml-20 mr-20 bg-cover bg-green-50">
        <div className="flex items-center p-2 mx-auto bg-green-300 rounded">
          <div className="p-2 text-center">
            <div className="w-full">
            <h2 className="w-full text-xl text-center">Create Cookie Stand</h2>
            </div>
            <form className="m-4 mx-auto border-green-400 md:flex md:flex-wrap md:justify-between">
              <div className="">
              <label className="p-2">Location</label>
              <input className="flex "></input>
              </div>
              <div>
              <label className="p-2">Minimum Customers per Hour</label>
              <input className="flex "></input>
              </div>
              <div>
              <label className="p-2">Maximum Customers per Hour</label>
              <input className="flex "></input>
              </div>
              <div>
              <label className="p-2">Average Cookies per Sale</label>
              <input className="flex "></input>
              </div>
              <div className="mt-4 ml-auto">
              <button className="px-16 py-2 bg-green-500">Create</button>
              </div>
            </form>
          </div>
        </div>

        <p className="p-2 text-center">Report Table Coming Soon..</p>

        <p className="p-2 text-center">{}</p>


      </main>

      <footer className="flex p-3 text-gray-600 bg-green-500">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}
