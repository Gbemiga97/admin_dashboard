import { data } from "../utils"

const Dashboard = () => {
  return (
    <div className="mt-4 text-dark">
      <h1>Dashboard</h1>
      <div className="inline-block bg-light rounded mt-4 py-2 px-6">
        <input type="date" className="bg-transparent text-dark" />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {
          data.insights.map(({icon, title, price, percentage}, i) => (
            <div key={i}
            className="bg-white p-7 rounded-[2rem] mt-4 shadow-1 hover:shadow-transparent transition-all duration-300"
            >
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <h1>${price}</h1>
              </div>
              <div>
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div>
                  <p>{percentage}%</p>
                </div>
              </div>
              <small className="text-muted">
                Last 24 Hours 
              </small>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard