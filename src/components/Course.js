import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from 'reactstrap';
import base_url from '../api/courseapi';

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.post(`${base_url}/courses/{id}`).then(
            (Response)=>{
                toast.success("Course Deleted!");
                update(id);
            },
            (error)=>{
                toast.error("Course not Deleted!");
            }
        )
    };

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{ course.title }</CardSubtitle>
                <CardText>{ course.description }</CardText>
                <Container className="text-center">
                    <Button color="primary" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
                <CardFooter className="mt-3">By Piyush</CardFooter>
            </CardBody>
        </Card>
    );
}

export default Course;