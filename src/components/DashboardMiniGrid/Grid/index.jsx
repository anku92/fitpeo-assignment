import './Grid.css';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Grid = (props) => {
  const { icon, title, value, status, change } = props.data;

  const isAmount = value.amount !== undefined;
  const formattedValue = isAmount ? `$${value.amount}k` : value.count;

  return (
    <div id='dash-col' className="col-lg-3">
      <div className="dash-card">
        <div className="card-header border-0 p-0">
          <img src={icon} className="mini-card-img" alt={title} />
          <span className="title">{title}</span>
        </div>

        <div className="card-footer p-0 border-0">
          <div className="footer-text">
            <p className="m-0 value">
              {formattedValue}
            </p>
            <p className={`ms-2 stats ${status}`}>
              {
                status === 'up' ?
                  <FaCaretUp size='17px' />
                  : <FaCaretDown size='17px' />
              }
              <span className='ms-1'>{change}%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid;