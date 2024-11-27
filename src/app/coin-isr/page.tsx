

import Link from "next/link";

export default async function CoinMarketisr() {
    const API_KEY = "coinranking6db38cf341256bda80d92b22843d409879ef368fca66e447";
    const res = await fetch(
      `https://api.coinranking.com/v2/coin/:uuid/price${API_KEY}`,
      {
        next: { revalidate: 10 }, // Revalidate every 60 seconds
      }
    );
    const data = await res.json();
  
    return (
      <html className=""data-theme="dark" > 
    <div className="h-auto w-full p-4 place-items-center">
     <div className="rounded-lg p-7">
        <h1 className=" text-center text-4xl text-bold mb-5 font-serif ">Coin ISR</h1>
        <div className=" border rounded-lg min-w-fit  border-white p-1 sm:p-8 lg:p-8 md:p-8 ">
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4 ">
        
        <button className="btn btn-wide border border-gray-400">
           BNB: {data?.rates?.BNB || "Loading..."}
          </button>
        
        <button className="btn btn-wide  border-gray-400">
         BTC: {data?.rates?.BTC || "Loading..."}
          </button>
  
          <button className="btn btn-wide  border-gray-400">
          ETH: {data?.rates?.ETH || "Loading..."}
          </button>
  
          <button className="btn btn-wide  border-gray-400">
          SOL: {data?.rates?.SOL || "Loading..."}
          </button>
  
          <button className="btn btn-wide  border-gray-400">
          RXP: {data?.rates?.RXP || "Loading..."}
          </button>
  
          <button className="btn btn-wide  border-gray-400">
          DOGE: {data?.rates?.DOGE || "Loading..."}
          </button>
  
          <button className="btn btn-wide  border-gray-400">
          ADDA: {data?.rates?.ADDA || "Loading..."}
          </button>
  
          <button className="btn btn-wide  border-gray-400">
          AVAX: {data?.rates?.AVAX || "Loading..."}
          </button>
  
          <button className="btn btn-wide  border-gray-400">
          SHIB: {data?.rates?.SHIB || "Loading..."}
          </button>
          
          <button className="btn btn-wide  border-gray-400">
          OKB: {data?.rates?.OKB || "Loading..."}
          </button>
          </div>
          </div>
       <div className="flex justify-center pt-5">
       <button className="btn btn-active btn-ghost ">
          <Link href="/">Back to Home</Link></button>
          </div>
        
          
        
       </div>
      </div>
      </html>
    );
   
  }
