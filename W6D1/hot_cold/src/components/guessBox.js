'use strict';

import React from 'react';

import './guessBox.css';

export default function Guess(props){
    return (
         <div class='answer box'>
            <form>
                <input type='text' placeholder="Enter your guess">
                <button type='submit'>Guess</button>
            </form>
        </div>
    );
};