import React from "react"
import NavBar from '../templates/navbar/NavBar';
import '../index.css';

export default ({ children, breadCrumbs }) => (
    <div>
        <NavBar breadCrumbs={breadCrumbs}/>
        <div className="content">
            {children}
        </div>
    </div>
)
