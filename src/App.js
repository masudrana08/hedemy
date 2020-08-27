import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CourseData from "./CourseData";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  let totalCost=0;
  const [totalEnrolled, setTotalEnrolled]=useState([])

  function enrollHandler(enrolled){
    let newEnrolled=[...totalEnrolled,enrolled]
    setTotalEnrolled(newEnrolled)
  }
  totalEnrolled.map(data=>{
    totalCost=totalCost+data.price
  })
  return (
    <div className="fullpage bg-info">

      <div className="header">
        <h1 className="header-title">hello world</h1>
      </div>

      <div className="course-container">
        <div className="course-details ">
          {CourseData.map((course) => {
            return <Courses key={course.id} course={course} enrollHandler={enrollHandler}/>;
          })}
        </div>

        <div className="cart">
          <Cart totalCost={totalCost} totalEnrolled={totalEnrolled}/>
        </div>
      </div>

    </div>
  );
}

export default App;
