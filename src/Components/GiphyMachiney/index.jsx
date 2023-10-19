import {useEffect, useState} from "react";

const GiphyMachiney = () => {

    const [gif, setGif] = useState()

    const getGif = async () => {
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=v3RKDXwUsodkRtbKfBpGPj1r8vRoKclk&rating=pg')
        const gif = await response.json()
        setGif(gif.data.images.original.url)
    }

    useEffect(() => {
        getGif()
    }, []);

    return (
        <>
        {gif && <img alt="gif" src={gif} />}
        </>

    )
}

export default GiphyMachiney