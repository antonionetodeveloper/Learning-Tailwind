export default function Page() {
   return (
      <>
         <div className="h-screen">
            <div className="bg-gray-800 border-l-2 border-yellow-400 py-3 m-3">
               <p className="flex mx-auto w-3/4 text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem culpa id voluptas in iure, dolorum itaque voluptatem
                  minima quasi nihil!
               </p>
               <button className="flex m-auto bg-blue-400 ring-2 hover:bg-blue-300 transition ease-in-out rounded px-3 py-1 mt-3">
                  Clique em mim
               </button>
            </div>
            <div className="flex justify-center gap-x-5 border border-gray-200 rounded m-3">
               <span>1</span>
               <span>2</span>
               <span>3</span>
               <span>4</span>
               <span>5</span>
            </div>
         </div>
      </>
   )
}
