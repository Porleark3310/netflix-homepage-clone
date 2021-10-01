import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../ListItem/ListItem';
import React, { useRef, useState } from 'react';
import dragonprince from '../../Trailers/dragonprince.mp4'
import queensgambit from '../../Trailers/queensgambit.mp4'
import armyofthieves from '../../Trailers/armyofthieves.mp4'
import arcane from '../../Trailers/arcane.mp4'
import stranger from '../../Trailers/stranger.mp4'
import cobrakai from '../../Trailers/cobrakai.mp4'
import red from '../../Trailers/red.mp4'
import dontlookup from '../../Trailers/dontlookup.mp4'
import sandman from '../../Trailers/sandman.mp4'
import heist from '../../Trailers/heist.mp4'
import './list.scss';

const List = ({title}) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const dummyDesc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eligendi maxime obcaecati vero praesentium.';
    const listRef = useRef();

    const handleClick = (direction) =>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if(direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <div className = "list">
            <span className="listTitle">{title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                    className = "sliderArrow left" 
                    onClick = {()=>handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem 
                        index={0}
                        thumbnail={"http://images6.fanpop.com/image/photos/43300000/The-Dragon-Prince-the-dragon-prince-43327198-1280-720.jpg"} 
                        trailer={dragonprince}
                        genre = {'Fantasy'}
                        desc="In the magical land of Xadia, magic comes from six primal sources: the sun, moon, stars, sky, earth and ocean. When human mages create a..."
                        age = {'PG+'}
                        time = {'30 Minutes'}
                        release = {'2018'}
                    />
                    <ListItem 
                        index={1}
                        thumbnail={"https://occ-0-7-6.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSg-pdv7e4DjgQ-vSo3P57T6h2XTRkey3Tbbwmvd07r84DMBBTrDKg_EHl8ltRcx7m2WNUkc6xU2JGomnAy58InhEpHL.jpg?r=8ec"} 
                        trailer={armyofthieves}
                        genre = {'Action'}
                        desc="In this prequel to Army of the Dead, a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe."
                        age = {'R'}
                        time = {'45 Minutes'}
                        release = {'2021'} />
                    <ListItem 
                        index={2}
                        thumbnail={"https://librarynews.blog.fordham.edu/wp-content/uploads/2020/11/The-Queens-Gambit-Netflix-tv-series.jpg"} 
                        trailer={queensgambit}
                        genre = {'Historical'}
                        desc="Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world."
                        age = {'R'}
                        time = {'45 Minutes'}
                        release = {'2020'} 
                    />
                    <ListItem 
                        index={3}
                        thumbnail={"https://www.dexerto.com/wp-content/uploads/2021/05/04/arcane-league-of-legends-anime-netflix-show-release-date-jinx-vi-story-leaks.jpg"} 
                        trailer={arcane}
                        genre = {'Fantasy'}
                        desc="Arcane is an upcoming animated streaming television event series set in the League of Legends universe."
                        age = {'13'}
                        time = {'45 Minutes'}
                        release = {'2021'} />
                    <ListItem 
                        index={4}
                        thumbnail={"https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"} 
                        trailer={stranger}
                        genre = {'Thriller'}
                        desc="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel..."
                        age = {'18'}
                        time = {'45 Minutes'}
                        release = {'2018'} />
                    <ListItem 
                        index={5}
                        thumbnail={"https://flxt.tmsimg.com/assets/p15315129_b_h8_ac.jpg"} 
                        trailer={cobrakai}
                        genre = {'Action'}
                        desc="Thirty four years after events of the 1984 All Valley Karate Tournament, a down-and-out Johnny Lawrence seeks redemption by reopening the infamous Cobra..."
                        age = {'13'}
                        time = {'45 Minutes'}
                        release = {'2018'} />
                    <ListItem 
                        index={6}
                        thumbnail={"https://i.ytimg.com/vi/T6l3mM7AWew/maxresdefault.jpg"} 
                        trailer={red}
                        genre = {'Action'}
                        desc="Former CIA operative Frank Moses is basking in normality. But he's forced to return to old habits when an assassin puts a target on his back."
                        age = {'R'}
                        time = {'45 Minutes'}
                        release = {'2018'} />
                    <ListItem 
                        index={7}
                        thumbnail={"https://tvline.com/wp-content/uploads/2021/09/sandman-dream-poster.jpg?w=618"} 
                        trailer={sandman}
                        genre = {'Fantasy'}
                        desc="The Sandman is an upcoming British fantasy streaming television series based on the 1989–1996 comic book written by Neil Gaiman and published..."
                        age = {'13'}
                        time = {'45 Minutes'}
                        release = {'2018'} />
                    <ListItem 
                        index={8}
                        thumbnail={"https://i.ytimg.com/vi/SL9aJcqrtnw/maxresdefault.jpg"} 
                        trailer={dontlookup}
                        genre = {'Comedy'}
                        desc="Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth."
                        age = {'R'}
                        time = {'45 Minutes'}
                        release = {'2021'} />
                    <ListItem 
                        index={9}
                        thumbnail={"https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"} 
                        trailer={heist}
                        genre = {'Fantasy'}
                        desc="A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros..."
                        age = {'13'}
                        time = {'45 Minutes'}
                        release = {'2018'} />                                   
                </div>
                <ArrowForwardIosOutlined className = "sliderArrow right" onClick = {()=>handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
