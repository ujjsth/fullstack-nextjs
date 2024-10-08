import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/PrismaClient";
import { ArtistSchema } from "./ArtistSchema";

export async function POST(request: NextRequest){
    const reqData = await request.json();


    console.log("reqData : ",reqData);

    const validation = ArtistSchema.safeParse(reqData);

    if(!validation.success){
        return NextResponse.json(
            {error: validation.error.errors},
            {status: 400}
        );
    }

    const newArtist = await prisma.artist.create({
        data: {
            name: reqData.name,
            gender: reqData.gender,
            dob: reqData.dob,
            first_release_year: reqData.first_release_year,
            total_albums: parseInt(reqData.total_albums),
            address: reqData.address,
            created_by: 2
        }
    });

    if(newArtist){
        return NextResponse.json(
            {newArtist},
            { status: 200}
        );
    }

    return NextResponse.json(
        {error: "Error in creating artist"},
        { status: 400}
    );
}