import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [cookieStandInfo, setCookieStandInfo] = useState('Created Cookie Stands!')

  function cookieStandInfoHandler(event){
    event.preventDefault();
    alert(event.target.cookieStandInfo.value)
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex p-2 bg-green-500">
        <h1 className="ml-4 text-lg">Cookie Stand Admin</h1>
      </header>

      <main className="p-4 ml-20 mr-20 bg-cover bg-green-50">
        <div className="flex items-center p-2 mx-auto bg-green-300 rounded">

          <div className="p-2 text-center">

            <div className="w-full">
            <h2 className="w-full text-xl text-center">Create Cookie Stand</h2>
            </div>

            <div>
            <form on Submit={cookieStandInfoHandler} className="m-1 mx-auto text-sm border-green-400 md:flex md:flex-wrap md:justify-between">
              
              <div className="flex w-full mx-auto">
              <label className="h-2 p-1">Location</label>
              <input className="flex w-full "></input>
              </div>

              <div className="flex w-full p-2 mx-auto mt-4 text-xs">

                <div>
                <label className="p-1 mt-3">Minimum Customers per Hour</label>
                <input className="flex w-40 "></input>
                </div>

                <div>
                <label className="p-1 mt-3">Maximum Customers per Hour</label>
                <input className="flex w-40 "></input>
                </div>

                <div>
                <label className="p-1 mt-3">Average Cookies per Sale</label>
                <input className="flex w-40"></input>
                </div>
                
                <div className="ml-auto">
                <button className="flex px-16 py-4 bg-green-500" value="submit" type="Submit">Create</button>
                </div>
                
              </div>

            </form>
            </div>
          </div>
        </div>

        <p className="p-2 text-center">Report Table Coming Soon..</p>

        <p className="p-2 text-center">{cookieStandInfo}</p>


      </main>

      <footer className="flex p-3 text-gray-600 bg-green-500">
        <p className="ml-4">&copy; 2021</p>
      </footer>
    </div>
  )
}
