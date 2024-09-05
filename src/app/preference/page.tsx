'use client';
import React, { useState } from "react";


export default function App() {

    const [location, setLocation] = useState("");
    const [budget, setBudget] = useState("");
    const [stay, setStay] = useState("");

    async function handleSubmit(e: any){
        e.preventDefault();

        if(location == "" || budget == "" || stay == ""){
            alert("please fill all details");
        }

        const res = await fetch('http://localhost:3000/api/add-pref', {
            method: "POST",
            body: JSON.stringify({location, budget, stay})
        })

        const {message} = await res.json();

        alert(message);

        setLocation("");
        setBudget("");
        setStay("");
        

    }

  return (
    <main className="flex flex-col items-center justify-center border">
        <div className="w-[70vw] py-5">
            <h1 className="pb-5 text-5xl font-bold text-center leading-[120%]">Enter Your <span className="text-blue-800">Pref</span></h1>
        </div>
        <form className="w-[40vw] mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={location} placeholder="Location" required onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className="mb-5">
                <label htmlFor="email0" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget</label>
                <input type="text" id="email0" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={budget} placeholder="Budget" required onChange={(e) => setBudget(e.target.value)}/>
            </div>
            <div className="mb-5">
                <label htmlFor="email1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stay</label>
                <input type="text" id="email1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={stay} placeholder="Stay" required onChange={(e) => setStay(e.target.value)}/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </main>
  );
}
