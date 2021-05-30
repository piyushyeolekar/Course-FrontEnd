import React, { useState, useEffect } from 'react';
import Course from './Course';
import axios from 'axios';
import base_url from './../api/courseapi';
import { toast } from 'react-toastify';

const AllCourses = () => {
    
    useEffect(() => {
        document.title="All Courses";
    },[]);
    
    //function to call the server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                console.log(response);
                toast.success("Courses has been loaded", {
                    position:"bottom-center",
                });
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong", {
                    position:"bottom-center",
                });
            }
        );
    };

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    },[]);

    const [courses, setCourses] = useState([]);
    
    const updateCourses=(id)=>{
        setCourses(courses.filter((c) => c.id != id));
    };

    return (
        <div>
            <h1>AllCourses</h1>
            <p>The list of courses are as follows</p>
            {
                courses.length > 0 
                ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />) 
                : "No Courses"
            }
        </div>
    );
}

export default AllCourses;