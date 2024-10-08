export const handleError = (error:any) => {

    console.log("error:", error);

    if(!error){
        return "Something went wrong!"
    }

    if(error){
        return error.response.data.error;
    }

    return error;
}