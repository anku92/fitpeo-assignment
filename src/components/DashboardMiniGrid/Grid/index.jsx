import './Grid.css';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Grid = (props) => {
  const { icon, title, value, status, change } = props.data;

  const isAmount = value.amount !== undefined;  
  const formattedValue = isAmount ? `$${value.amount}k` : value.count;

  return (
    <div className="col-lg-3 px-1 mb-2">
      <div className="dash-card">
        <div className="card-header border-0 p-0">
          <img src={icon} className="mini-card-img" alt={title} />
          <h6 className="title">{title}</h6>
        </div>

        <div className="card-footer p-0 border-0">
          <div className="footer-text">
            <p className="m-0 value">
              {formattedValue}
            </p>
            <p className={`stats ${status}`}>
              {
                status === 'up' ?
                  <FaCaretUp size='15px' />
                  : <FaCaretDown size='15px' />
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