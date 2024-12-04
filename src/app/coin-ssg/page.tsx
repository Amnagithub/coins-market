import Link from "next/link";
export default async function CoinMarketSSG() {
  const API_KEY =  "ac1b737a30fffa42ead92558b389096d";
  const res = await fetch(
    (`https://api.coinlayer.com/live?access_key=${API_KEY}`)
  );
  const data = await res.json();

  return (
    <html className="" data-theme="dark">
      <div className="h-auto w-full p-4 place-items-center">
        <div className="rounded-lg p-7">
          <h1 className=" text-center text-4xl text-bold mb-5 font-serif ">
            Coin SSG
          </h1>
          <div className=" border rounded-lg min-w-fit  border-white p-1 sm:p-8 lg:p-8 md:p-8 ">
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4 ">
              <button className="btn btn-wide border border-gray-400">
                BNB: {data?.rates?.BNB}
              </button>

              <button className="btn btn-wide  border-gray-400">
                BTC: {data?.rates?.BTC}
              </button>

              <button className="btn btn-wide  border-gray-400">
                ETH: {data?.rates?.ETH}
              </button>

              <button className="btn btn-wide  border-gray-400">
                SOL: {data?.rates?.SOL}
              </button>

              <button className="btn btn-wide  border-gray-400">
                RXP: {data?.rates?.RXP}
              </button>

              <button className="btn btn-wide  border-gray-400">
                DOGE: {data?.rates?.DOGE}
              </button>

              <button className="btn btn-wide  border-gray-400">
                ADDA: {data?.rates?.ADDA}
              </button>

              <button className="btn btn-wide  border-gray-400">
                AVAX: {data?.rates?.AVAX}
              </button>

              <button className="btn btn-wide  border-gray-400">
                SHIB: {data?.rates?.SHIB}
              </button>

              <button className="btn btn-wide  border-gray-400">
                OKB: {data?.rates?.OKB}
              </button>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button className="btn btn-active btn-ghost ">
              <Link href="/">Back to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </html>
  );
}
