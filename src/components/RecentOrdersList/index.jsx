import './RecentOrdersList.css';
import ordersData from '../../data/ordersData';

const RecentOrdersList = () => {

  function findStatus(status) {
    if (status === "Delivered") return 'success';
    return 'no-success';
  }

  return (
// p-0 mt-0 mb-3 mx-0
    <div style={{ backgroundColor: "var(--cs-dark-blue)" }} className="row rounded-3 mx-1 px-4">
      <h3 className="px-0 py-3 m-0">Recent Orders</h3>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((e, index) =>
            <tr key={index}>
              <td>
                <img src={e.image} className='customer-image' />
                {e.name}
              </td>
              <td>{e.order_number}</td>
              <td>${e.amount}</td>
              <td>
                <span className={`status ${findStatus(e.status)}`}>{e.status}</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  )
}


export default RecentOrdersList;