import { BsGrid1X2Fill } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { IoReceiptOutline } from "react-icons/io5"
import { MdOutlineInsights, MdOutlineInventory, MdReportGmailerrorred, MdAdd } from "react-icons/md";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import { MdOutlineAnalytics, MdOutlineStackedLineChart } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";



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


const insights = [
    {
        icon: <MdOutlineAnalytics />,
        title: 'Total Sales',
        price: '25,024',
        percentage: '81',
    },
    {
        icon: <FaChartSimple />,
        title: 'Total Expenses',
        price: '14,160',
        percentage: '62',
    },
    {
        icon: <MdOutlineStackedLineChart />,
        title: 'Total Income',
        price: '10,864',
        percentage: '44',
    },
]


const data = {
    links,
    insights
}


export default data