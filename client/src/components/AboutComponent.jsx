import React from 'react';
import './css/about.css';

const AboutComponent = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-dark about__container-border">
        <div className="container bg-light about__container">
          <h1 className="display-4 fw-bold about__heading">BASIC REST API</h1>
          <footer className="blockquote-footer about__subtitle">Implemented using a simple React JS application</footer>
          <hr />
          <p>Check out some of my other projects-</p>
          <div className="about__buttons">
            <a href="https://github.com/ykamv2" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Github</a>
            <a href="https://yashkatariya.netlify.app/#projects" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">My Projects</a>
          </div>


          <div className='mt-4'>
            <p className='lead'>What is a REST API?</p>
            <p><b>REST</b> or <b>REST</b>ful API stands for <b>RE</b>presentational <b>S</b>tate <b>T</b>ransfer. It is an architectural style which follows a set of rules, used for creating robust and flexible web services.REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth making it more suitable for internet usage.</p>
            <p className='lead'>Working</p>
            <p>Requests are sent from a client to a server using HTTP GET/POST/PUT/DELETE request. Server then responds to that request and sends data in JSON format.
            In this implementation, I have used Axios to do CRUD(Create,Read,Update & Delete) operations, using GET,POST,PATCH and DELETE methods.</p>
          </div>
          <p className='mt-3 mb-0 display-5 text-muted about__prompt'>Click on create in the navbar to get started!</p>
        </div>
      </div>
    </>
  )
}

export default AboutComponent