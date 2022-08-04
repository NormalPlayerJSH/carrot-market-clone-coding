import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Streams: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar canGoBack >
      <div className="space-y-4 divide-y-2">
        {
          Array(10).fill(0).map((_, i) => (
            <Link href={`/streams/${i}`} key={i}>
              <div className="pt-4 px-4 cursor-pointer">
                <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                <h3 className=" text-gray-700 text-lg mt-2">Let&apos;s try potatoes</h3>
              </div>
            </Link>
          ))
        }
        <Link href={'/streams/create'}><button className="fixed bottom-20 right-5 bg-orange-400 rounded-full p-4 text-white shadow-xl hover:bg-orange-500 cursor-pointer border-transparent transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        </button></Link>
      </div>
    </Layout>
  );
};

export default Streams;