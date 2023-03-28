export default function Page() {
   return (
      <>
         <div className="h-screen flex justify-center items-center gap-x-4">
            <div className="flex justify-center items-center  w-1/4 h-1/4 my-4 p-3 bg-gradient-to-r from-yellow-400  to-red-500 rounded cursor-pointer hover:mx-2 ease-in-out duration-150">
               <p className="flex m-auto">Um gradiente legal 1 !</p>
            </div>
            <div className="flex justify-center items-center w-1/4 h-1/4 my-4 p-3 bg-gradient-to-r from-yellow-400  to-red-500 rounded cursor-pointer hover:mx-2 ease-in-out duration-150">
               <p className="flex m-auto">Um gradiente legal 2 !</p>
            </div>
            <div className="flex justify-center items-center w-1/4 h-1/4 my-4 p-3 bg-gradient-to-r from-yellow-400  to-red-500 rounded cursor-pointer hover:mx-2 ease-in-out duration-150">
               <p>Um gradiente legal 3 !</p>
            </div>
         </div>
      </>
   )
}
