import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import LandingPage from "./LandingPage";
import "../App.css";
const Api = () => {
  const apiKey = "SO70-HZTL-3Z9A-157B";
  const [memberList, setmemberList] = useState("");
  const [data1, setdata1] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://randomuser.me/api/?${apiKey}&results=10`
      );
      const { results } = data;
      setmemberList(results);
    };
    getData();
  }, []);
  const handleSortAsc = () => {
    const sortedData = [...memberList].sort((a, b) => {
      const fullName1 = a.name.title + a.name.first + a.name.second;
      const fullName2 = b.name.title + b.name.first + b.name.second;
      return fullName1 > fullName2 ? 1 : -1;
    });
    setdata1(sortedData);
  };
  const handleSortDsc = () => {
    const sortedData = [...memberList].sort((a, b) => {
      const fullName1 = a.name.title + a.name.first + a.name.second;
      const fullName2 = b.name.title + b.name.first + b.name.second;
      return fullName1 < fullName2 ? 1 : -1;
    });
    setdata1(sortedData);
  };
  console.log(memberList);
  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="table-responsive">
      <div className="search">
        <input placeholder="Search" onChange={inputHandler} />
      </div>
      <Table bordered responsive className="table">
        <thead className="dark-table">
          <tr>
            <th>
              Name{" "}
              <div className="sortButtonDiv">
                <button className="sortButton" onClick={handleSortAsc}>
                  Asc
                </button>
                <button className="sortButton" onClick={handleSortDsc}>
                  Dsc
                </button>
              </div>
            </th>
            <th>Gender</th>
            <th>Dob</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            <LandingPage
              x={
                data1.length === 0
                  ? memberList &&
                    memberList.filter((ele) => {
                      if (inputText === "") return ele;
                      else {
                        const fullName =
                          ele.name.title +
                          ' ' +
                          ele.name.first +
                          ' ' +
                          ele.name.last;
                        return (
                          fullName.toLowerCase().includes(inputText) ||
                          ele.gender.toLowerCase().includes(inputText) ||
                          ele.email.toLowerCase().includes(inputText)
                        );
                      }
                    })
                  : data1.filter((ele) => {
                      if (inputText === "") return ele;
                      else {
                        const fullName =
                          ele.name.title +
                          ' ' +
                          ele.name.first +
                          ' ' +
                          ele.name.last;
                        return (
                          fullName.toLowerCase().includes(inputText) ||
                          ele.gender.toLowerCase().includes(inputText) ||
                          ele.email.toLowerCase().includes(inputText)
                        );
                      }
                    })
              }
            />
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Api;
