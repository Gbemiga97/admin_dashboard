import { Insights, RecentOrders } from '.'


const Dashboard = () => {
  return (
    <div className="mt-4 text-dark">
      <h1>Dashboard</h1>
      <div className="inline-block bg-light rounded mt-4 py-2 px-6">
        <input type="date" className="bg-transparent text-dark" />
      </div>
      <Insights />
      <RecentOrders />
    </div>
  )
}

export default Dashboard