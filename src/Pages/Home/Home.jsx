import React, {useState, useEffect} from 'react'
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import List from '../../components/List/List';

import './home.scss';

const Home = () => {
    const [lists, setLists] = useState([]);

    return (
        <div className = "home">
            <Navbar/>
            <Featured/>
            <List title = {"Continue to watch"}/>
            <List title = {"Favorites"}/>
            <List title = {"New series"}/>
        </div>
    )
}

export default Home
