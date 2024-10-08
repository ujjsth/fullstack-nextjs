import HeaderNavbar from "@/components/HeaderNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function HomePage(){
  const session = await getServerSession(authOptions);

  return (
    <div>
        <HeaderNavbar/>

        <div className="container bg-gray-400">          
          <h1>Welcome : {session?.user?.name}</h1>
        </div>
    </div>
  )
}