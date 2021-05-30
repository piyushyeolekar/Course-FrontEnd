import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import base_url from './../api/courseapi';

const AddCourse = () => {
    useEffect(() => {
        document.title="Add Course";
    },[]);

    const [course, setCourse] = useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                //setCourse({ id: "", title: "", description: "" });
            }, (error)=>{
                console.log(error);
                console.log("error");
                toast.success("Something went wrong");
            }
        )        
    };

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter id here" name="userId" id="userId" onChange={(e)=>{
                        setCourse({...course, id:e.target.value });
                    }} />
                </FormGroup>
                
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title" onChange={(e)=>{
                        setCourse({...course, title:e.target.value });
                    }} />
                </FormGroup>
                
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter here" name="description" id="description" style={{height:150}} onChange={(e)=>{
                        setCourse({...course, description:e.target.value });
                    }} />
                </FormGroup>

                <Container className="text-center mt-3">
                    <Button type="submit" color="info mr-5">Add Course</Button>
                    <Button type="reset" color="warning ml-5">Clear</Button>
                </Container>

            </Form>
        </Fragment>
    );
}

export default AddCourse;