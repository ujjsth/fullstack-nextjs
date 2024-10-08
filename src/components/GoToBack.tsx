"use client";
import { useRouter } from "next/navigation";

export default function GoToBack() {
    const router = useRouter();

  return (
    <button className="btn bg-black py-2 px-5 text-white" onClick={()=>router.back() }>Go To Back</button>
  )
}
