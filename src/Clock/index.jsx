import {useState, useEffect} from "react";

const Clock = () => {

    const [time, setTime] = useState('')

    useEffect(() => {

        setInterval(() => {
            const dateObject = new Date()

            const month = dateObject.toLocaleString('en-US', {month: 'long'})
            const day = dateObject.getDate()
            const hour = dateObject.getHours()
            let minute = dateObject.getMinutes()
            if (minute < 10) {
                minute = '0' + minute
            }
            const curTime = month + ' ' + day + ' ' + hour + ':' + minute
            setTime(curTime)
        }, 1000)
    }, [])
    return <div>{time}</div>
}

export default Clock