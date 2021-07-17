import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`} style={{ display: "flex" }}>
        <i className="fas fa-info-circle"> {alert.msg} </i>
          <i
            class="fas fa-times"
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={alertContext.removeAlert}
          ></i>
      </div>
    )
  );
};

export default Alert;
