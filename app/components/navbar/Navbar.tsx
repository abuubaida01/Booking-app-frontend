import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";


const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 py-6 border-b bg-white z-10 fixed">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link rel="stylesheet" href="/" >
            <Image 
              src="/logo.png"
              alt='djangbnd logo'
              width={80}
              height={20}
            />
          </Link> 

          <div className="flex space-x-6">
            <SearchFilters />
          </div>

          <div className="flex items-center space-x-6">
            <AddPropertyButton />
            <UserNav /> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;