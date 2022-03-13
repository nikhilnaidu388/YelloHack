import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

const LandingPage = (props) => {
  const newList = props.x;
  return (
    <>
      {newList && newList.map((ele, idx) => {
        const dob=moment(ele.dob.date).format('MMMM Do, YYYY')
        return (
          <tr>
            <td>{`${ele.name.title} ${ele.name.first} ${ele.name.last}`}</td>
            <td>{ele.gender}</td>
            <td>{dob}</td>
            <td>{ele.email}</td>
          </tr>
        );
      })}
    </>
  );
};

export default LandingPage;
