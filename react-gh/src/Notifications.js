import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';


const Notifications = () => {
  return (
    <div className="Notifications">
      <button style={{
        position: "relative",
        float: "right",
        border: "none",
      }}
      aria-label='Close'
      onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon" width="10" height="10"></img>
      </button>
      <p>Say something different</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  )
};

export default Notifications;
