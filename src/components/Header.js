/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png"></img></a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png"></img></a>
            </div>
        </header>
    )
}