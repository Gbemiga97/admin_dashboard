import { BsGrid1X2Fill } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { IoReceiptOutline } from "react-icons/io5"
import { MdOutlineInsights, MdOutlineInventory, MdReportGmailerrorred } from "react-icons/md";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";



const links = [
    {
        icon: <BsGrid1X2Fill />,
        name: 'Dashboard'
    },
    {
        icon: <CiUser />,
        name: 'Customer'
    },
    {
        icon: <IoReceiptOutline />,
        name: 'Order'
    },
    {
        icon: <MdOutlineInsights />,
        name: 'Analytics'
    },
    {
        icon: <MdOutlineInventory />,
        name: 'Products'
    },
    {
        icon: <MdReportGmailerrorred />,
        name: 'Report'
    },
    {
        icon: <IoMdSettings />,
        name: 'Settings'
    },
    {
        icon: <IoIosLogOut />,
        name: 'Logout'
    },
]


const data = {
    links
}


export default data