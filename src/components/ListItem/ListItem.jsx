import { Add, PlayArrow, ThumbUpAltOutlined, ThumbDownAltOutlined } from '@material-ui/icons';
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './ListItem.scss';   

const ListItem = ({index, thumbnail, trailer, genre, desc, time, age, release}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={{ pathname: "/Watch" + trailer, state: {trailer}}}>
            <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter = {()=>setIsHovered(true)} onMouseLeave = {()=>setIsHovered (false)}>
                <img src= {thumbnail} alt="" />
                {isHovered && (
                    <>
                        <video src = {trailer} autoPlay = {true} loop/>
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow/>
                                <Add/>
                                <ThumbUpAltOutlined/>
                                <ThumbDownAltOutlined/>
                            </div>
                            <div className="itemInfoTop">
                                <span>{time}</span>
                                <span className="limit">{age}</span>
                                <span>{release}</span>
                            </div>
                            <div className="desc">
                                {desc}
                            </div>
                            <div className="genre">
                                {genre}
                            </div>
                        </div>
                    </>
                )} 
            </div>
        </Link>
    );
}

export default ListItem
