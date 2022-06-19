import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setcourseTitle] = useState("");
  console.log("course form rendered");
  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("please add a course title");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
    });
    setcourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        value={courseTitle}
        onChange={(e) => {
          setcourseTitle(e.target.value);
        }}
      />
      <button className="form-submit-btn" onClick={()=>{
        handleCourseSubmit()
      }}>
        Add course
      </button>
    </div>
  );
}

export default CourseForm;
