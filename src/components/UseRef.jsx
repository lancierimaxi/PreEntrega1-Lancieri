import {useRef} from 'react'

const UseRef = () => {

const inputRef =useRef(null)

const handleFocus=()=>{
    inputRef.current.innerHTML = "Agrego Contenido"
}

    return (
        <div>
            <div ref={inputRef}>Texto</div>
            <button onClick={handleFocus}>Click Me</button>
        </div>
    )
}

export default UseRef