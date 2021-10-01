import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './watch.scss'

const Watch = () => {
    const location = useLocation();
    const {trailer} = location.state;
    return (
        <div className="watch">
           <Link to="/">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            <video className="video" autoPlay progress controls src = {trailer}/>
        </div>
    )
}

export default Watch
