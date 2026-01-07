import React from "react";
import "./InlineAlert.css";

const InlineAlert = ({ type, message }) => {
  if (!message) return null;

  return <div className={`inline-alert ${type}`}>{message}</div>;
};

export default InlineAlert;
