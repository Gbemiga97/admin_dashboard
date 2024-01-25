import { data, images } from "../utils"
import { IoMdClose } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-screen">
        {/* Sidebar top*/}
        <div className="flex items-center justify-between mt-6 bg-white">
            {/* logo */}
            <div className="flex items-center gap-x-3.5">
                <img src={images.Logo} alt="logo" className="w-8 h-8" />
                <h2>EGA<span>TOR</span></h2>
            </div>
            {/* close btn */}
            <div className="xl:hidden">
            <IoMdClose />
            </div>
        </div>

        {/* sidebar links */}
        <div className="bg-white flex flex-col h-[86vh] relative top-12">
            {
                data.links.slice(0, 4).map(({icon, name, path}, i) => (
                    <NavLink to={path}
                    className={(({isActive}) => isActive ? 'bg-light text-primary before:w-2 before:h-full before:bg-primary' : '')}
                    key={i}>
                        <div
                    className="flex text-dark-info ml-8 gap-x-4 items-center relative h-16 transition-all"
                        
                        >
                             <span className="text-2xl">
                            {icon}</span>
                        <h3>{name}</h3>
                        </div>
                    </NavLink>
                ))
            }
             <NavLink
               to='message'     className={(({isActive}) => isActive ? 'bg-light text-primary' : '')}
             >
                       <div 
             className="flex text-dark-info ml-8 gap-x-4 items-center relative h-16 transition-all"
                       >
                       <span className="text-2xl">
                            <HiOutlineEnvelope /></span>
                        <h3>message</h3> 
                        <span>26</span>
                       </div>
                    </NavLink>
            {
                data.links.slice(4, 9).map(({icon, name, path}, i) => (
                    <NavLink to={path}
                    className={(({isActive}) => isActive ? 'bg-light text-primary' : '')}
                    key={i}>
                     <div
                    className="flex text-dark-info ml-8 gap-x-4 items-center relative h-16 transition-all"
                     >
                     <span className="text-2xl">
                            {icon}</span>
                        <h3>{name}</h3>
                     </div>
                    </NavLink>
                ))
            }
        </div>
    </aside>
  )
}

export default Sidebar