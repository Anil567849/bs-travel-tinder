import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function App({location, budget, pref, img, setOpen, open}: {location: string, budget: number, pref: string, img: string, setOpen: any, open: any}) {
  return (
    <Card className="py-4 border p-2 bg-gray-800 text-white rounded-lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{location}</p>
        <small className="text-default-500">{budget}</small>
        <h4 className="font-bold text-large">{pref}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={270}
          height={200}
        />
          <button type="button" className="w-[40%] mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => setOpen(!open)}>Up Vote</button>
      </CardBody>
    </Card>
  );
}
