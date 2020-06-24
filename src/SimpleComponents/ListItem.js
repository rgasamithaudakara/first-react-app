import React from "react";
import "./ListItem.css";
function ListItem(props) {
  return (
    <React.Fragment>
      <div className="list-group-item list-group-item-dark Card rounded-lg">
        <div className="row align-items-center">
          <div className="col-">
            <div className="ImageFrame rounded-circle">
              <img className="Image rounded-circle" src={props.avatar} alt={props.avatar} />
            </div>
          </div>
          <div className="col-4 Details">
            <p className="Name">{props.name}</p>
            <p className="TextLine">{props.city} | {props.email}</p>
            <p className="TextLine">Date of Birth - {props.birthday}</p>
          </div>
          <div className = "col-lg">
            <p className = "Description"> {props.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListItem;
