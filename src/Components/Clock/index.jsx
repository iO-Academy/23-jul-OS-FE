import {useState, useEffect} from "react";

const Clock = () => {
    const [time, setTime] = useState('')

    const clockFunction = () => {
        const dateObject = new Date()
        const month = dateObject.toLocaleString('en-US', {month: 'short'})
        const day = dateObject.getDate()
        const hour = dateObject.getHours()
        let minute = dateObject.getMinutes()
        if (minute < 10) {
            minute = '0' + minute
        }
        const curTime = day + ' ' + month + ' ' + hour + ':' + minute
        setTime(curTime)
    }

        useEffect(() => {
            clockFunction()
            setInterval(clockFunction, 1000)
        }, [])
        return <div>{time}</div>
}


export default Clock