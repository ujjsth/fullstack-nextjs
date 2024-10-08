import GoToBack from "@/components/GoToBack";

export default function CustomNotFoundPage(){
    return(
        <div className="bg-blue-800 h-screen flex justify-center items-center flex-col">
            <h1 className="text-white text-[80px] font-bold">Page Not Found</h1>
            <GoToBack/>
        </div>
    )
}