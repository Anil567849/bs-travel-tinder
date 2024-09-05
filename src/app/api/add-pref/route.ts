import { NextRequest } from "next/server";


export async function POST(request: NextRequest){
    const {location, budget, stay} = await request.json();
    // console.log(location, budget, stay);

    //Todo: Save data to database
    
    return Response.json({message: 'added'});
}