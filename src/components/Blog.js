import React from 'react';

import '../styles/Algorithms.css';
import palindrome from '../images/palindrome1.png';
import booWho from '../images/booWho.png';
import fizzBuzz from '../images/fizzBuzz.png';
import maxChar from '../images/maxChar.png';

export class Blog extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='section' id='blog'>
                <h2> Algorithms using JavaScript </h2>
                <div className='alg alg-container'>
                    <h3>Palindrome</h3>
                    <p> -- A palindrome is a word or phrase that reads the same backward as forward! -- </p>
                    <ul>
                        <li> Step 1: Remove all white space from string and store in a variable named strWithoutSpaces. <b>replace()</b> </li>
                        <li> Step 2: Split new string into an array of strings and store in a variable named reversedStr. <b>split()</b> </li>
                        <li> Step 3: Reverse the reversedStr array. <b>reverse()</b>  </li>
                        <li> Step 4: Create new string from the reversedStr array. <b>join()</b>  </li>
                        <li> Step 5: Compare strWithoutSpaces and reversedStr in <b>lowerCase()</b>  and return a boolean </li>
                    </ul>
                    <img src={palindrome} alt='code' />
                </div>
                <div className='alg alg-container'>
                    <h3>Boo Who</h3>
                    <p> -- Check if a value is classified as a boolean primitive. Return true or false. freeCodeCamp -- </p>
                    <ul>
                        <li>Step 1: Create a function with one parameter. booWho()</li>
                        <li>Step 2: Check argument and if its a primitive boolean return true, else return false. <b>typeof</b></li>
                    </ul>
                    <img src={booWho} alt='code' />
                </div>
                <div className='alg alg-container'>
                    <h3>Fizz Buzz</h3>
                    <p> -- Given a number 'n' as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out "Fizz"; when it's divisible by 5, print out "Buzz"; when it's divisible by both 3 and 5, print out "Fizz Buzz". -- </p>
                    <ul>
                        <li>Step 1: Create a function with one parameter. <b>fizzBuzz(num)</b></li>
                        <li>Step 2: Create a for loop starting at 1 and ends at num.</li>
                        <li>Step 3: First check if current number is divisible by both 3 and 5, if so print out "FizzBuzz". Can use Lowest Common Multiple</li>
                        <li>Step 4: Check if current number is divisible by 5, if so print out "Buzz"</li>
                        <li>Step 5: Check if current number is divisible by 3, if so print out "Fizz"</li>
                        <li>Step 6: If current number is not divisible by 3 and/or 5, print out the current number</li>

                    </ul>
                    <img src={fizzBuzz} alt='code' />
                </div>
                <div className='alg alg-container'>
                    <h3>Max Character</h3>
                    <p> -- Given a string of characters, return the character that appears the most often. Assume upper and lowercase letters are the same. Whitespace doesn't count. -- </p>
                    <ul>
                        <li>Step 1: Create a function with one string parameter that returns the most appeared letter. <b>maxCharacter(str)</b> </li>
                        <li>Step 2: Remove all whitespace and make string lowerCase.  <b>toLowerCase()</b> <b>replace(/\s/g,'')</b> </li>
                        <li>Step 3: Split string into an array. <b>split()</b></li>
                        <li>Step 4: Create an object and use the characters from the array for the keys in the object.</li>
                        <li>Step 5: Iterate through the characters array, check if each character is used as a key in the object.</li>
                        <li>Step 6: If character is not in the object, set obj.character to 1, if it is already in the object, increment the value.</li>
                        <li>Step 7: Create a varible named character to store the most appeared character </li>
                        <li>Step 8: Iterate through the object and check if the character count is greater than the last character. If so we can set the variable character to the current character</li>
                        <li>Setp 9: return the character</li>

                    </ul>
                    <img src={maxChar} alt='code' />
                </div>
            </div>
        )
    }
}

{/* <div className='alg alg-container'>
    <h3></h3>
    <p> --  -- </p>
    <ul>
        <li></li>
    </ul>
    <img src={} alt='code' />
</div> */}