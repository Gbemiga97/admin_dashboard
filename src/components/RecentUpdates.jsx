import { IoMenuOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { FaMoon, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { images } from "../utils";
import { HiShoppingBag } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";

const RecentUpdates = () => {
  return (
    <div className="mt-6">
        {/* top */}
        <div className="flex justify-end gap-x-8">
            {/* menu btn */}
            <button className="">
            <IoMenuOutline />
            </button>
            {/* theme toggler */}
            <div className="bg-light p-1 flex justify-between items-center h-6 w-16 cursor-pointer rounded-md">
                <CiLight className="activeMode text-4xl w-[50%] h-full flex items-center justify-center" />
                <FaMoon className=" w-[50%] h-full flex items-center justify-center" />
            </div> 
            {/* profile */}
            <div className="flex text-right gap-x-8">
                <div>
                    <p>Hey, <b>Daniel</b></p>
                    <small className="text-muted">Admin</small>
                </div>
                <div>
                    <img src={images.Profile1} className="profilePic" alt="profile_img" />
                </div>
            </div>
        </div>

        {/* updates */}
        <div className="mt-4">
            <h2 className="mb-3">
                Recent Updates</h2>
            <div className="bg-white p-7 rounded-[2rem] shadow-1 hover:shadow-transparent transition-all duration-300">
                <div className='grid grid-cols-[3rem,auto] gap-x-4 mb-4'>
                    <div>
                        <img src={images.Profile2} className="profilePic" alt="profile_2" />
                    </div>
                    <div>
                        <p>
                            <b>Mike Tyson</b> received his order of Night lion tech GPS drone.
                            <small className="text-muted">
                                 2 Minutes Ago
                            </small>
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-[3rem,auto] gap-x-4 mb-4'>
                    <div>
                        <img src={images.Profile3} className="profilePic" alt="profile_2" />
                    </div>
                    <div>
                        <p>
                            <b>Mike Tyson</b> received his order of Night lion tech GPS drone.
                            <small className="text-muted">
                                 2 Minutes Ago
                            </small>
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-[3rem,auto] gap-x-4 mb-4'>
                    <div>
                        <img src={images.Profile4} className="profilePic" alt="profile_2" />
                    </div>
                    <div>
                        <p>
                            <b>Mike Tyson</b> received his order of Night lion tech GPS drone.
                            <small className="text-muted">
                                 2 Minutes Ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>


        {/* sales analytics */}
        <div className="mt-8">
            <h2 className="mb-3">Sales Analytics</h2>
            <div className="bg-white flex items-center gap-4 mb-3 p-6 rounded-[1.2rem] shadow-1 hover:shadow-transparent  transition-all duration-300  ">
                <div className="p-2 flex rounded-[100%] text-white bg-primary ">
                    <MdShoppingCart />
                </div>
                <div className='flex justify-between items-start m-0 w-full'>
                    <div>
                        <h3>ONLINE ORDERS</h3>
                        <small className="text-muted">
                             Last 24 Hours
                        </small>
                    </div>
                    <h5 className="text-success">
                        +39%
                    </h5>
                    <h3>3849</h3>
                </div>
            </div>
            <div className="bg-white flex items-center gap-4 mb-3 p-6 rounded-[1.2rem] shadow-1 hover:shadow-transparent  transition-all duration-300  ">
                <div className="p-2 flex rounded-[100%] text-white bg-danger ">
                    <HiShoppingBag />
                </div>
                <div className='flex justify-between items-start m-0 w-full'>
                    <div>
                        <h3>OFFLINE ORDERS</h3>
                        <small className="text-muted">
                             Last 24 Hours
                        </small>
                    </div>
                    <h5 className="text-danger">
                        -17%
                    </h5>
                    <h3>1100</h3>
                </div>
            </div>
            <div className="bg-white flex items-center gap-4 mb-3 p-6 rounded-[1.2rem] shadow-1 hover:shadow-transparent  transition-all duration-300  ">
                <div className="p-2 flex rounded-[100%] text-white bg-success">
                <FaUser />
                </div>
                <div className='flex justify-between items-start m-0 w-full'>
                    <div>
                        <h3>NEW CUSTOMERS</h3>
                        <small className="text-muted">
                             Last 24 Hours
                        </small>
                    </div>
                    <h5 className="text-success">
                        +24%
                    </h5>
                    <h3>849</h3>
                </div>
            </div>
            <div className="bg-transparent p-6 rounded-[1.2rem] text-primary cursor-pointer border-2 border-dashed border-primary flex items-center justify-center ">
                <div className="flex items-center gap-2 ">
                    <FaPlus />
                    <h3>Add Products</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentUpdates