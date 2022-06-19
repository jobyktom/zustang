import React from 'react'
import useCourseStore from '../app/courseStore'


function CourseList() {
    const {courses,removeCourse,toggeleCourseStatus} = useCourseStore(
        (state) =>({
            courses : state.courses,
            removeCourse : state.removeCourse,
            toggeleCourseStatus :state.toggeleCourseStatus
        })
    );
  return (
    <>
    <ul>
        {courses.map((course, i) =>{
            return (
                <React.Fragment key={i}>
                    <li className="course-item"
                    style={{
                        backgroundColor: course.completed ? "#00FF0044" :"grey"
                    }}>
                        <span className='course-item-col-1'>
                            <input 
                            checked ={course.completed}
                            onChange = {(e)=>{
                                toggeleCourseStatus(course.id)
                            }}
                            type="checkbox" />
                        </span>
                        <span>{course?.title}</span>
                        <button className='delete-btn' onClick={(e)=>{
                            removeCourse(course.id)
                        }}>Delete</button>

                    </li>
                </React.Fragment>
            )
        })}
    </ul>
    </>
    
  )
}

export default CourseList