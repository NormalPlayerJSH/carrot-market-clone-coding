import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  const [Dark, setDark] = useState(false);
  const changeDark = () => setDark(a => !a);
  return (
    <div className={`bg-slate-400 dark:bg-slate-700 py-20 px-10 grid gap-10 min-h-screen sm:grid-cols-2 lg:grid-cols-3 place-content-center ${Dark && 'dark'}`}>
      <div className="bg-white bg-[url('/vercel.svg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:text-gray-200 p-6 rounded-3xl shadow-xl flex flex-col justify-between space-y-3">
        <span className="font-semibold  text-3xl">Select Item</span>
        <ul>
          {
            [1,2,3,4,5].map((i) => (
              <div key={`selectitem${i}`} className="flex justify-between py-1 odd:bg-blue-50 even:bg-yellow-50 dark:odd:bg-blue-900 dark:even:bg-yellow-900">
                <span className="text-gray-500 dark:text-gray-300">Grey Chair</span>
                <span className="font-semibold text-black dark:text-gray-200">$19</span>
              </div>
            ))
          }
        </ul>
        <ul>{['a','b','c',''].map((c, i) => <li className="bg-red-500 py-2 empty:hidden" key={i}>{c}</li>)}</ul>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span className="bg-[url('/vercel.svg')]">Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500" onClick={changeDark} type="button">Checkout</button>
      </div>
      <div className="bg-white dark:bg-gray-900 overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 dark:bg-blue-900 p-6 pb-14 sm:pb-32 lg:pb-40">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white dark:bg-gray-900 dark:text-gray-200">
          <div className="flex items-end relative -top-16 justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-400 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl sm:col-span-2 lg:col-span-1 dark:bg-gray-900 dark:text-gray-200">
        <div className="flex justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3 mb-5">
            <span>⭐ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500  dark:ring-offset-gray-900 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-gray-900 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 dark:ring-offset-gray-900 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-2.5 bg-blue-200 flex justify-center items-center aspect-square w-12 text-xl text-gray-500 rounded-lg">-</button>
              <span>1</span>
              <button className="p-2.5 bg-blue-200 flex justify-center items-center aspect-square w-12 text-xl text-gray-500 rounded-lg">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center text-white py-2 px-5 text-xs rounded-xl">Add to cart</button>
          </div>
        </div>
      </div>
      <form className="bg-white p-6 rounded-3xl shadow-xl flex flex-col">
        <input type="text" required placeholder="Username" className="border p-1 border-gray-400 rounded peer" />
        <span className="hidden text-red-500 peer-invalid:block">This input is invalid</span>
        <span className="hidden text-teal-500 peer-valid:block">Awesome username</span>
        <input type="submit" value="Login" className="bg-white"/>
      </form>
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col">
          <details className="select-none open:text-white open:bg-indigo-400">
            <summary className=" cursor-pointer">What is my fav. food?</summary>
            <span>My fav. food is asdfsadfsadf</span>
          </details>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col">
        <ul className="list-disc marker:text-teal-400">
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col">
        <input type="file" className=" transition-colors file:cursor-pointer file:hover:bg-white file:hover:border-purple-400 file:hover:border file:hover:text-purple-400 file:border-0 file:rounded-xl file:px-5 file:text-white file:mr-4 file:bg-purple-400" />
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col">
        <p className="first-letter:text-7xl hover:first-letter:text-purple-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur itaque soluta perferendis tempora amet voluptas, ipsum possimus, nostrum sint corporis omnis nam aperiam molestiae corrupti fugiat est! Modi, tempora!</p>
      </div>
    </div>
    
  );
}

export default Home
