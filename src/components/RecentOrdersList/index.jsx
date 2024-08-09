import './RecentOrdersList.css';
import ordersData from '../../data/ordersData';

const RecentOrdersList = () => {

  function findStatus(status) {
    if (status === "Delivered") return 'success';
    return 'no-success';
  }
  // note for self: Design the table components all is set
  return (
    <div className="row p-0 mt-0 mb-3 mx-0 g-0">
      <div className="table-container">
        <h4>Recent Orders</h4>
        <table className="orders-table">
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
    </div>

  )
}


export default RecentOrdersList;