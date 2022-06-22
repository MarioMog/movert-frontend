import React from 'react'
import './style.css'
const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h2>Welcome {'employee.name'}.</h2>
          <hr />
          <p>
            You can perform your activities in this application.
          </p>
          <p>
            Contact technical support if you have a problem.
          </p>
        </div>
      </div>
    </>
  )
}

export default Main
