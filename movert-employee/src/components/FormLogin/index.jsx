import React, { useState } from 'react'

import './style.css'

const FormLogin = () => {
  const [dataForm, setData] = useState({ idEmploye: '', password: '' })
  const { idEmploye, password } = dataForm
  const handleOnChange = (e) => {
    setData({ ...dataForm, [e.target.name]: e.target.value })
  }
  const handleOnClick = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="form-container">
        <form autoComplete="off">
          <input
            type="string"
            className="form-item-input"
            placeholder="Employee id"
            value={idEmploye}
            name="idEmploye"
            onChange={handleOnChange}
          />
          <input
            type="password"
            className="form-item-input"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleOnChange}
          />
          <button onClick={handleOnClick} className="form-item-button">
            Sing in
          </button>
        </form>
      </div>
    </>
  )
}

export default FormLogin
