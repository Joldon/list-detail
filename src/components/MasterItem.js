import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const MasterItem = ({ title, body, id }) => {
  return (
    <div>
      <div className="master-item">
        <ul>
          <li>
            <Link className="link" to={`/article/${id}`}>
              {title}
            </Link>
          </li>
          <li>{body.substring(0, 80) + '...'}</li>
        </ul>
      </div>
    </div>
  );
};

export default MasterItem;
