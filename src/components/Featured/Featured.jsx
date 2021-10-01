import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import dragonprince from '../../Trailers/dragonprince.mp4'
import React from 'react';
import { Link } from "react-router-dom";
import './featured.scss';

const Featured = ({type}) => {

    const trailer = dragonprince;
    return (
        <div className = "featured">
            {type &&  (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://images3.alphacoders.com/980/thumb-1920-980884.jpg" alt="" />
            <div className="info">
                <img src="https://occ-0-7-6.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRHnagBR9hIGuc9W0baxi1zqbevmcM61lT5JzvBSOka6dJRtAseM0-Ws3-7rP9fuTcoekv72ppf6BtiUqkHQxehPiOrhs6_EgpVsyfWDYmh-ugxRVIFIUkBF48RrGzyi7UimArJJuxC7EKScEswy2kSIpg9EsIlgStGQ2QjDJBRQPw.png?r=32c" alt="" />
                <span className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi totam soluta quae, neque quod natus aperiam maiores esse eum modi voluptate sapiente. Nostrum suscipit architecto perferendis? Id, mollitia ullam!
                </span>
                <div className = "buttons">
                    <button className="play">
                        <Link to={{ pathname: "/Watch" + trailer, state: {trailer}}} style={{ display:'flex', textDecoration: 'none', alignItems: 'center' }}>
                            <PlayArrow/>
                            <span>Play</span>
                        </Link>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
