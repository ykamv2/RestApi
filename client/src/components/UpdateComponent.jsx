import React, { useState } from 'react'
import { Form, Button,Toast } from 'react-bootstrap'
import axios from 'axios';
import '../App.css';
const UpdateComponent = () => {
    const [showDisplayMsg, setShowDisplayMsg] = useState(false);
    const [showDisplayMsg2, setShowDisplayMsg2] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            // trimming whitespaces
            [e.target.name]: e.target.value.trim()
        })
    }
    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        rollno: ""
    });


    const handleUpdate = async (e) => {
        // console.log(formData);

        if (formData.id) {
            e.preventDefault();
            // const URL = 'https://basic-restapi-yk.herokuapp.com/users';
            const URL = 'http://localhost:5000/users';
            var res = await axios.patch(`${URL}/${formData.id}`, formData);
            // console.log(res);
            setShowDisplayMsg(true);
        }

        else setShowDisplayMsg2(true);


    }
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    return (
        <>
        <div className="mb-2 mt-2">
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Update the data</strong>
                    </Toast.Header>
                    <Toast.Body>A PATCH request is made to the server updating the user data respective to the ID.</Toast.Body>
                </Toast>
            </div>
            <Form id='form' className='mt-3'>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>ID(Required)</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" onChange={handleChange} name="id" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" onChange={handleChange} name="firstName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" onChange={handleChange} name="lastName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" onChange={handleChange} name="age" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rollno">
                    <Form.Label>Roll Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Roll Number" onChange={handleChange} name="rollno" />
                </Form.Group>
                <Button variant="secondary" type="submit" onClick={handleUpdate}>
                    Update
                </Button>
            </Form>
            {showDisplayMsg && (
            <p className='mt-3' id='green'>User details updated succesfully!</p>
        )}
            {showDisplayMsg2 && (
            <p className='mt-3' id='red'>You must enter ID to update!</p>
        )}

        </>
    )
}

export default UpdateComponent