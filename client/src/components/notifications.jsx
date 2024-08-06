import React from "react";
import './notifications.css';
import { useState, useEffect } from "react";
function Notifications(){

    const [notifications, setNotifications] = useState([]);

    // Simulate fetching notifications (replace with your actual API call)
    /*useEffect(() => {
      const fetchNotifications = async () => {
        const response = await fetch('https://your-api.com/notifications');
        const data = await response.json();
        setNotifications(data.notifications);
      };
  
      fetchNotifications();
    }, []);*/
  
    const filteredNotifications = notifications.filter(
      (notification) => notification.type === 'like'
    );
    
    return(
        
        //<div className="Notifipg">
        //</div>
        <div className="Notifipg">
      {filteredNotifications.length > 0 ? (
        <ul>
          {filteredNotifications.map((notification) => (
            <li key={notification.id}>
              <div className="notification-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="notification-content">
                <p>{notification.message}</p>
                {/* Optional: Time or other details */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No like notifications yet.</p>
      )}
    </div>
        

        
    );
}
export default Notifications;
