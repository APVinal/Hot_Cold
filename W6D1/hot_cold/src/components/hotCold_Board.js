import React, { Component } from 'react';

import './hotCold_Board.css';

export default function HotCold_Board() {
    return (
        <div className="hotColdBoard">
            <ul>
                <li className='links'>New Game</li>
            </ul>
            <h1>Hot or Cold</h1>
            <div className='guessBox'>
                <div className='hintField'>Make your Guess!</div>
                <div className='answerBox'>
                    <form>
                        <input type='text' placeholder="Enter your guess"></input>
                        <button type='submit'>Guess</button>
                        </form>
                    <div className='guessCount'>Guess Number</div>
                </div>
                <div className='guessed'></div>
            </div>
        </div>
    );
}