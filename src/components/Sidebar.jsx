import { data, images } from "../utils"
import { IoMdClose } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { BsGrid1X2Fill } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { IoReceiptOutline } from "react-icons/io5"
import { MdOutlineInsights, MdOutlineInventory, MdReportGmailerrorred, MdAdd } from "react-icons/md";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";




const Sidebar = () => {
  return (
   <aside className="h-screen">
    {/* sidebar top */}
    <div className="flex items-center justify-between mt-6 ">
        {/* logo */}
        <div className="flex items-center gap-x-3.5">
        <img src={images.Logo} alt="logo" className="w-8 h-8" />
        <h2>EGA<span>TOR</span></h2>
    </div>
    <div className="xl:hidden">
        <IoMdClose /> 
    </div>
    </div>

    {/* sidebar links */}
    <div className="links  flex flex-col h-[86vh] relative top-12">
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300 "> 
                <BsGrid1X2Fill /></span>
            <h3 className="font-medium">
                Dashboard</h3>
        </a>
        <a href="/" 
         className="active group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <CiUser /></span>
            <h3 className="font-medium">
                Customers</h3>
        </a>
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <IoReceiptOutline /></span>
            <h3 className="font-medium">
                Orders</h3>
        </a>
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <MdOutlineInsights /></span>
            <h3 className="font-medium">
                Analytics</h3>
        </a>
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <HiOutlineEnvelope /></span>
            <h3 className="font-medium">
                Message</h3>
            <span className="bg-danger text-white py-[2px] px-[10px] text-xs rounded ">
                26</span>
        </a>
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <MdOutlineInventory /></span>
            <h3 className="font-medium">
                Products</h3>
        </a>
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <MdReportGmailerrorred /></span>
            <h3 className="font-medium">
                Reports</h3>
        </a>
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300" >
                <IoMdSettings /></span>
            <h3 className="font-medium">
                Settings</h3>
        </a>
        <a href="/" 
         className="group flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <MdAdd /></span>
            <h3 className="font-medium">
                Add Products</h3>
        </a>
        <a href="/" 
         className="group absolute bottom-8  w-full flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
        >
            <span className="group-hover:ml-4 transition-all duration-300">
                <IoIosLogOut /></span>
            <h3 className="font-medium">
                Logout</h3>
        </a>
    </div>
   </aside>
  )
}

export default Sidebar


 // <aside className="h-screen">
    //     {/* Sidebar top*/}
    //     <div className="flex items-center justify-between mt-6 bg-white">
    //         {/* logo */}
    //         <div className="flex items-center gap-x-3.5">
    //             <img src={images.Logo} alt="logo" className="w-8 h-8" />
    //             <h2>EGA<span>TOR</span></h2>
    //         </div>
    //         {/* close btn */}
    //         <div className="xl:hidden">
    //         <IoMdClose />
    //         </div>
    //     </div>

    //     {/* sidebar links */}
    //     <div className="bg-white flex flex-col h-[86vh] relative top-12">
    //         {
    //             data.links.slice(0, 4).map(({icon, name, path}, i) => (
    //                 <NavLink to={path}
                    
    //                 key={i}>
    //                     <div
    //                 className="flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
                        
    //                     >
    //                          <span className="text-2xl">
    //                         {icon}</span>
    //                     <h3>{name}</h3>
    //                     </div>
    //                 </NavLink>
    //             ))
    //         }
    //          <NavLink
    //            to='message'     
    //          >
    //                    <div 
    //          className="flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
    //                    >
    //                    <span className="text-2xl">
    //                         <HiOutlineEnvelope /></span>
    //                     <h3>message</h3> 
    //                     <span>26</span>
    //                    </div>
    //                 </NavLink>
    //         {
    //             data.links.slice(4, 9).map(({icon, name, path}, i) => (
    //                 <NavLink to={path}
                    
    //                 key={i}>
    //                  <div
    //                 className="flex text-dark-info ml-8 gap-x-4 items-center  h-[3.7rem] transition-all"
    //                  >
    //                  <span className="text-2xl">
    //                         {icon}</span>
    //                     <h3>{name}</h3>
    //                  </div>
    //                 </NavLink>
    //             ))
    //         }
    //     </div>
    // </aside>