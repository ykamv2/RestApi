import React, { useState } from 'react'
import { Form, Button, Toast} from 'react-bootstrap'
import axios from 'axios';
import '../App.css';
const AddForm = () => {


    const [showDisplayMsg, setShowDisplayMsg] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            // trimming whitespaces
            [e.target.name]: e.target.value.trim()
        })
    }
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        rollno: ""
    });


    const handleAdd = async (e) => {
        // console.log(formData);
        e.preventDefault();
        const { firstName, lastName, age, rollno } = formData;
        const URL = 'https://basic-restapi-yk.herokuapp.com/users';
        var res = await axios.post(`${URL}`, { firstName, lastName, age, rollno })
        // console.log(res);
        setShowDisplayMsg(true);
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
                        <strong className="me-auto">Welcome!</strong>
                    </Toast.Header>
                    <Toast.Body>Enter the User data and click on Add button.The data is sent to the server using a POST request.</Toast.Body>
                </Toast>
            </div>

            <p className='display-5 mt-3'>Enter User Data:</p>
            <Form id='form' className='mt-3'>
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

                <Button variant="secondary" type="submit" onClick={handleAdd}>
                    Add
                </Button>
                {/* <Button variant="primary" type="submit" onClick={handleUpdate}>
          Update
        </Button> */}
            </Form>
            {showDisplayMsg && (
                <p className='mt-3' id='green'>User successfully added! Click on Read to view details of all the users!</p>
            )}
        </>
    )
}

export default AddForm;