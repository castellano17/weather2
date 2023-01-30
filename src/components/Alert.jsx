import React, { useState, useEffect } from "react";
import "./styles/Alert.css";

const Alert = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return show && <div className="Alert">Ciudad no encontrada</div>;
};

export default Alert;
