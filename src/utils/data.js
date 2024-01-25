import { BsGrid1X2Fill } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { IoReceiptOutline } from "react-icons/io5"
import { MdOutlineInsights, MdOutlineInventory, MdReportGmailerrorred, MdAdd } from "react-icons/md";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";



const links = [
    {
        icon: <BsGrid1X2Fill />,
        path: '/',
        name: 'Dashboard'
    },
    {
        icon: <CiUser />,
        path: 'customer',
        name: 'Customer'
    },
    {
        icon: <IoReceiptOutline />,
        path: 'order',
        name: 'Order'
    },
    {
        icon: <MdOutlineInsights />,
        path: 'analytics',
        name: 'Analytics'
    },
    {
        icon: <MdOutlineInventory />,
        path: 'products',
        name: 'Products'
    },
    {
        icon: <MdReportGmailerrorred />,
        path: 'report',
        name: 'Report'
    },
    {
        icon: <IoMdSettings />,
        path: 'settings',
        name: 'Settings'
    },
    {
        icon: <MdAdd /> ,
        path: 'add',
        name: 'Add Product'
    },
    {
        icon: <IoIosLogOut />,
        path: 'logout',
        name: 'Logout'
    },
]


const data = {
    links
}


export default data