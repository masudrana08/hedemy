import React from 'react';
import './Courses.css'

const Courses = (props) => {
    const {img, title, description, price} = props.course
    return (
        <div className="single-course">
            
           <div>
           <img src={img} alt=""/>
                <h6 className="course-title">{title}</h6>
                <p className="course-description">{description}</p>
                
           </div>
            <div>
                <h6 className="course-price">Price : {price} $</h6>
                <button onClick={()=>props.enrollHandler(props.course)} className="btn btn-sm btn-info">Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;