import { useState } from "react"

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요 : </legend>
            <input
                value = {temperature}
                onChange = {handleChange} />
            <BoilingVerdict
                celsius = {parseFloat(temperature)} />
        </fieldset>
    )
}

const scaleNames = {
    c: '섭씨',
    f: '화씨',
}

function temperatureInput(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위 : {scaleNames[props.scale]}) : </legend>
            <input value = {temperature} onChange = {handleChange} />
        </fieldset>
    )
}