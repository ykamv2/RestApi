import React, {useState} from 'react'
import axios from 'axios';
import { InputGroup,FormControl, Button,Toast } from 'react-bootstrap'
import '../App.css';
const DeleteComponent = () => {
    const [showDisplayMsg, setShowDisplayMsg] = useState(false);
    
    const [deleteData, setDeleteData] = useState("");
    const handleDeleteChange = async (e) => {
        setDeleteData(e.target.value);
        // console.log(searchData);
      }
    const handleDelete = async (e) => {
        
        // console.log(searchData);
        // const URL = 'https://basic-restapi-yk.herokuapp.com/users';
        const URL = 'http://localhost:5000/users';
        var id = deleteData;
        let res = await axios.delete(`${URL}/${id}`,{params: {"id":id}})
        console.log(res);
        setShowDisplayMsg(true);
        // console.log(res);
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
                        <strong className="me-auto">Delete a User</strong>
                    </Toast.Header>
                    <Toast.Body>A DELETE request is made to the server deleting the data of the user corresponding to the ID provided.</Toast.Body>
                </Toast>
            </div>
            <InputGroup className="mt-3">
                <FormControl
                    placeholder="Delete User by ID" onChange={handleDeleteChange}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleDelete}>
                    Delete
                </Button>
            </InputGroup>
            {showDisplayMsg && (
            <p className='mt-3' id='red'>User successfully deleted!</p>
        )}
        </>
    )
}

export default DeleteComponent