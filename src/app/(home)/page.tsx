'use client'
import { useState } from "react";
import Card from "./com/card";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const data = [
  {
    location: 'Manali',
    budget: 10000,
    pref: "Sharing Room",
    img: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Shimla',
    budget: 12000,
    pref: "Private Room",
    img: "https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Dharamshala',
    budget: 8000,
    pref: "Sharing Room",
    img: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Kullu',
    budget: 9000,
    pref: "Private Room",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Solan',
    budget: 11000,
    pref: "Sharing Room",
    img: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Kasol',
    budget: 15000,
    pref: "Private Room",
    img: "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Palampur',
    budget: 7000,
    pref: "Sharing Room",
    img: "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Bilaspur',
    budget: 9500,
    pref: "Private Room",
    img: "https://plus.unsplash.com/premium_photo-1676139860329-4997a02843c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: 'Chamba',
    budget: 8500,
    pref: "Sharing Room",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
      <main className="flex flex-col items-center justify-center border">
        <div className="w-[70vw] py-5">
            <h1 className="pb-5 text-5xl font-bold text-center leading-[120%]">Explore <span className="text-blue-800">Travel Tinder</span></h1>
        </div>
        <div className="w-[70vw] py-5 border grid grid-cols-3 gap-4">
          {
            data.map((item) => {
              return <Card location={item.location} budget={item.budget} pref={item.pref} img={item.img} setOpen={setOpen} open={open}/>
            })
          }
        </div>
        <Modal open={open} setOpen={setOpen}/>
      </main>
  );
}



export function Modal({open, setOpen}: {open: boolean, setOpen: any}) {
  const [number, setNumber] = useState();

  async function handleSubmit(e: any){
    setOpen(false);

    const res = await fetch('http://localhost:3000/api/upvote', {
      method: "POST",
      body: JSON.stringify({phone: number})
    })
    const {msg} = await res.json();
    alert(msg);
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="mb-5">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={number} placeholder="Phone" required onChange={(e: any) => setNumber(e.target.value)}/>
            </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
              >
                Submit
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}