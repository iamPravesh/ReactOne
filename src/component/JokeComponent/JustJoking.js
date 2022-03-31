import React, { useState } from 'react'
import axios from 'axios';
// import Button from '@mui/material'
import './JustJoking.scss';

function JustJoking() {
    const [jokes, setJokes] = useState('');
    const about = 'Carlos Ray "Chuck" Norris (born March 10, 1940) is an American martial artist and actor. He is a black belt in Tang Soo Do, Brazilian jiu jitsu and judo. After serving in the United States Air Force, Norris won many martial arts championships and later founded his own discipline Chun Kuk Do. Shortly after, in Hollywood, Norris trained celebrities in martial arts. Norris went on to appear in a minor role in the spy film The Wrecking Crew (1969). Friend and fellow martial artist Bruce Lee invited him to play one of the main villains in Way of the Dragon (1972). While Norris continued acting, friend and student Steve McQueen suggested him to take it seriously. Norris took the starring role in the action film Breaker! Breaker! (1977), which turned a profit. His second lead Good Guys Wear Black (1978) became a hit, and he soon became a popular action film star.'

    const joke = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                console.log(res.data.value);
                setJokes(res.data.value);
            })
            .catch(err => {
                console.log(err);
            }
            )
    }

    return (
        <div className="container">
            <div className="header">
                This page is dedicated to CHUCK NORRIS :)
            </div>
            <div className="content">
                <div className="leftContent">
                    <div className="contentTitle">
                        About Chuck norris
                    </div>
                    <div className="contentDescription">
                        {about}
                    </div>
                </div>
                <div className="rightContent">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg"
                        alt='Chuck Norris'
                        height="300"
                        width="300"
                        className="chucknorris"
                    />
                    <div className="contentTitle">
                        But did you know that:
                    </div>
                    <div className="contentDescription">
                        {jokes ? jokes : 'Click on the button to get a joke'}
                    </div>
                    {
                        !jokes ?
                            <button onClick={joke} className="jokeButton">Get a joke</button> :
                            <button onClick={joke} className="jokeButton">Get another joke</button>
                    }
                </div>
            </div>
            <div className="footer">
                This web page is inspired by: <a href="https://github.com/mousamdhakal/programming_jokes">Mousam Dhakal</a>
            </div>
        </div>
    )
}

export default JustJoking