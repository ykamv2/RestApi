import React, { useState } from 'react';
import { Button, Table,Toast } from 'react-bootstrap'
import axios from 'axios';
import '../App.css';

const DisplayUsers = () => {
    const [users, setUsers] = useState({});
    const [showDisplayTable, setShowDisplayTable] = useState(false);
    const [showDisplayMsg, setShowDisplayMsg] = useState(false);
    const getUser = async () => {
        const URL = 'https://basic-restapi-yk.herokuapp.com/users';
        var res = await axios.get(`${URL}`)
        var data = res.data;
        // console.log(data);
        if(Object.keys(data).length){
            setUsers(data);
            setShowDisplayTable(true);
        }
        else setShowDisplayMsg(true);
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
                        <strong className="me-auto">Display the Data</strong>
                    </Toast.Header>
                    <Toast.Body>A GET request is made to the server fetching all the data you entered. <b>Copy the ID value to use in the further steps.</b></Toast.Body>
                </Toast>
            </div>
            <h3 className='mt-3 display-5'>Click on the button to show all the added Users</h3>
            <Button variant="secondary" type="button" onClick={getUser} className='mt-2'>
                Show Users
            </Button>

            {showDisplayTable && (<Table striped bordered hover variant="dark" className='mt-3 w-75'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Roll Number</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(element => {
                        return (
                            <tr key={element.id}>
                                <th>{element.id}</th>
                                <th>{element.firstName}</th>
                                <th>{element.lastName}</th>
                                <th>{element.age}</th>
                                <th>{element.rollno}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>)}
            {showDisplayMsg && (
                <p className='mt-3' id='red'>Uh-Ooh! No user data to show! Click on Create in navbar to add user.</p>
            )}
        </>
    )
}

export default DisplayUsers