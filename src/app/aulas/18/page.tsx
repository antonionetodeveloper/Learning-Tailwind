import DropDown from "./components/dropdown"

export default async function Page() {
   const data = await fetch("https://api.github.com/users/antonionetodeveloper")
   const user = await data.json()

   return (
      <div className="h-screen flex flex-col justify-center items-center">
         <h1 className="mb-2">{user.name + ", " + user.location}</h1>
         <DropDown />
      </div>
   )
}
