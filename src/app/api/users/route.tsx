import { NextRequest, NextResponse } from "next/server";
import { UserSchema} from "./UserSchema";
import prisma from "./../../../../prisma/PrismaClient";
import bcrypt from 'bcrypt';

enum Role{
    USER = "USER",
    ARTIST_MANAGER = "ARTIST_MANAGER",
    ADMIN = "ADMIN"
}

interface User{
    name: string,
    email: string,
    password: string,
    role: Role,
}

export async function GET(request: NextRequest){

    const allUsers = await prisma.user.findMany();

    return NextResponse.json(
        {  users: allUsers, total_count: allUsers.length },
        {  status: 200 },
    );
}

export async function POST(request: NextRequest){
    const reqData: User = await request.json();

    // validation
    const validation = UserSchema.safeParse(reqData);
    if(!validation.success){
        return NextResponse.json(
            { error: validation.error.errors },
            { status: 400}
        )
    }

    // check existing email
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: reqData.email
        }
    });

    if(isUserExist){
        return NextResponse.json(
            { error: "Email is already used!"},
            { status: 400}
        )
    }

    const hashPassord = bcrypt.hashSync(reqData.password,10)

    // create user
    const newUser = await prisma.user.create({
        data: {
            name: reqData.name,
            email: reqData.email,
            password: hashPassord,
            role: reqData.role
        }
    })

    // reponse inserted data
    return NextResponse.json(
        { data: newUser },
        { status: 200}
    );
}