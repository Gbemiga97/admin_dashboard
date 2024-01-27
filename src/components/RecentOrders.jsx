import { data } from "../utils"

const RecentOrders = () => {
  return (
    <div className="mt-8">
        <h2 className="mb-3">
            Recent Orders</h2>
        <div className="bg-white w-full rounded-[2rem] shadow-1 p-7  text-center  hover:shadow-transparent transition-all duration-300">
           <table className="w-full ">
            <thead>
              <tr>
              <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th></th>
              </tr> 
            </thead>
            <tbody>
                {
                    data.orders.map(({name, number, payment, status}, i) => (
                     <tr key={i} className="h-11 border-b border-light text-dark-variant last:border-none ">
                        <td>{name}</td>
                        <td>{number}</td>
                        <td>{payment}</td>
                        <td
                        className={`${status === 'pending' ? 'text-warning' : ''} ${status === 'declined' ? 'text-danger' : ''} ${status === 'delivered' ? 'text-success' : ''} capitalize`}
                        >
                            {status}</td>
                            <td>
                                Details</td>
                     </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
        <a href="/" className="text-center block text-primary my-4 mx-auto">
            Show All
        </a>
    </div>
  )
}

export default RecentOrders