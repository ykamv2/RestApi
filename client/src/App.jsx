import React, { useState } from 'react';
import { Form, Button, Navbar, FormControl, Nav, Container, Table } from 'react-bootstrap';
// import classNames from 'classnames';
import axios from 'axios';
import {AddForm,DisplayUsers,DeleteComponent,UpdateComponent, AboutComponent} from './components';
import './App.css'

const App = () => {

  const [searchData, setSearchData] = useState("");  
  const [showQueryTable, setShowQueryTable] = useState(false);
  const [queryUser, setQueryUser] = useState({});
  

  // All Show States -------------------------
  const [showAddState, setShowAddState] = useState(false);

  const showAdd = ()=>{
    setShowAboutState(false);
    setShowUpdateState(false);
    setShowQueryTable(false);
    setShowDisplayState(false);
    setShowDeleteState(false);
    setShowAddState(true);
  }


  const [showDisplayState, setShowDisplayState] = useState(false);

  const showDisplay = ()=>{
    setShowAboutState(false);
    setShowUpdateState(false);
    setShowQueryTable(false);
    setShowAddState(false);
    setShowDeleteState(false);
    setShowDisplayState(true);
  }


  const [showDeleteState, setShowDeleteState] = useState(false);
  
  const showDelete = ()=>{
    setShowAboutState(false);
    setShowUpdateState(false);
    setShowQueryTable(false);
    setShowAddState(false);
    setShowDisplayState(false);
    setShowDeleteState(true);
  }


  const [showUpdateState, setShowUpdateState] = useState(false);
  
  const showUpdate = ()=>{
    setShowAboutState(false);
    setShowQueryTable(false);
    setShowAddState(false);
    setShowDisplayState(false);
    setShowDeleteState(false);
    setShowUpdateState(true);
  }


  const [showAboutState, setShowAboutState] = useState(true);
  
  const showAbout = ()=>{
    setShowQueryTable(false);
    setShowAddState(false);
    setShowDisplayState(false);
    setShowDeleteState(false);
    setShowUpdateState(false);
    setShowAboutState(true);
  }

  
  const handleSearchChange = async (e) => {
    setSearchData(e.target.value);
    // console.log(searchData);
  }
  
  const search = async (e) => {
    e.preventDefault();
    // console.log(searchData);
    // const URL = 'https://basic-restapi-yk.herokuapp.com/users';
    const URL = 'http://localhost:5000/users';
    var id = searchData;
    let res = await axios.get(`${URL}/${id}`)
    var data = res.data;
    // console.log(data);
    setQueryUser(data);
    setShowDeleteState(false);
    setShowAddState(false);
    setShowDisplayState(false);
    setShowQueryTable(true);
  }

  return (
    <div className='container'>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="https://www.youtube.com/c/Yk-AMV/featured" target="_blank" rel="noopener noreferrer">YkAMV</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={showAbout}>About</Nav.Link>
              <Nav.Link onClick={showAdd}>Create</Nav.Link>
              <Nav.Link onClick={showDisplay}>Read</Nav.Link>
              <Nav.Link onClick={showUpdate}>Update</Nav.Link>
              <Nav.Link onClick={showDelete}>Delete</Nav.Link> 
            </Nav>
            <Form className='d-flex' onSubmit={search}>
              <FormControl
                type="search"
                placeholder="Search user by ID"
                className="input_width"
                aria-label="Search"
                onChange={handleSearchChange} />
              <Button type="submit" variant="outline-success">Search</Button>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showAddState && (
        <AddForm 
        />
      )}
      {showDisplayState && (
        <DisplayUsers
        />
      )}
      {showUpdateState && (
        <UpdateComponent
        />
      )}
      
      {showQueryTable && (<Table striped bordered hover variant="dark">
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
          <tr key={queryUser.id}>
            <th>{queryUser.id}</th>
            <th>{queryUser.firstName}</th>
            <th>{queryUser.lastName}</th>
            <th>{queryUser.age}</th>
            <th>{queryUser.rollno}</th>
          </tr>
        </tbody>
      </Table>)}

      {showDeleteState && (
        <DeleteComponent/>
      )}

      {showAboutState && (
        <AboutComponent/>
      )}
      
    </div>
  )
}

export default App