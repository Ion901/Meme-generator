import memesData from "./memesData"
import React from 'react'

export default function MainContent() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage] = React.useState(memesData)


    const handleChange = (event) => {
        const value = event.target.value;
        console.log(event.target.name);
        setMeme(prevMessage => ({
            ...prevMessage,
            [event.target.name]: value
        }))
    };

    function getMemeImage() {
        const memsArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memsArray.length)
        const url = memsArray[randomNumber].url
        setMeme(prevUrl => ({ ...prevUrl, randomImage: url }))

    }

    return (
        <div className="mid">

            <div className="form">
                <input
                    type='text'
                    className="finput1"
                    onChange={handleChange}
                    name='firstName'
                />
                <input
                    type='text'
                    className="secInput1"
                    onChange={handleChange}
                    name='secondName'
                />
            </div>
            <div className="mid--submit">
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div >
                <div className="lock">
                    <img alt="not responding" src={meme.randomImage} className="pic1"></img>
                </div>
                
                    <p className="finput2">{meme.topText}</p>
                    <p className="secInput2">{meme.bottomText}</p>
                   
                  
            </div>

        </div>
    )
}