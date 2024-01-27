import { BsGrid1X2Fill } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { IoReceiptOutline } from "react-icons/io5"
import { MdOutlineInsights, MdOutlineInventory, MdReportGmailerrorred, MdAdd } from "react-icons/md";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import { MdAnalytics, MdOutlineStackedLineChart, MdBarChart } from "react-icons/md";



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
        icon: <MdAnalytics />,
        iconColor: 'bg-primary' ,
        title: 'sales',
        price: '25,024',
        percentage: '81',
    },
    {
        icon: <MdBarChart />,
        iconColor: 'bg-danger',
        title: 'expenses',
        price: '14,160',
        percentage: '62',
    },
    {
        icon: <MdOutlineStackedLineChart />,
        iconColor: 'bg-success',
        title: 'income',
        price: '10,864',
        percentage: '44',
    },
]


const orders = [
    {
        name: 'Foldable Mini',
        number: '85631',
        payment: 'Due',
        status: 'pending',
    },
    {
        name: 'LARVENDER KF102 Drone',
        number: '363778',
        payment: 'Refunded',
        status: 'declined',
    },
    {
        name: 'Ruko F11 Pro Drone',
        number: '49347',
        payment: 'Due',
        status: 'pending',
    },
    {
        name: 'Drone with Camera Drone',
        number: '96996',
        payment: 'Paid',
        status: 'delivered',
    },
    {
        name: 'GPS 4K Drone',
        number: '22821',
        payment: 'Paid',
        status: 'delivered',
    }, {
        name: 'DJI Air 2S',
        number: '81475',
        payment: 'Due',
        status: 'pending',
    },
    {
        name: 'Lozenge Drone',
        number: '00482',
        payment: 'Paid',
        status: 'delivered',
    },
]

const data = {
    links,
    insights,
    orders
}


export default data