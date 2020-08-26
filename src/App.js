import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CourseData from "./CourseData";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className=" bg-info">

      <div className="header">
        <h1 className="header-title">hello world</h1>
      </div>

      <div className="course-container">
        <div className="course-details ">
          {CourseData.map((course) => {
            return <Courses key={course.id} course={course} />;
          })}
        </div>

        <div className="cart">
          <Cart />
        </div>
      </div>

    </div>
  );
}

export default App;
