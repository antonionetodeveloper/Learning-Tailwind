export default function Page() {
   return (
      <>
         <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-sm text-gray-500 font-extralight tracking-tighter px-4 my-4">
               Olá mundo!
            </h2>
            <h2 className="text-base text-red-600 font-normal tracking-tight py-3 mx-3">
               Olá mundo!
            </h2>
            <h2 className="text-lg text-blue-500 font-medium tracking-normal pt-2 mb-3">
               Olá mundo!
            </h2>
            <h2 className="text-2xl text-green-600 font-bold tracking-wide pr-1 ml-1">
               Olá mundo!
            </h2>
            <h2 className="text-5xl text-purple-600 font-black tracking-widest pl-0 mr-0">
               Olá mundo!
            </h2>
         </div>

         <div className="ml-5 space-x-5 h-screen">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
         </div>
      </>
   )
}
