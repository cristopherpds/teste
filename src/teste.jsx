import { useState } from 'react'
const Botao1 = () =>{
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    return (
        <>
        <button onClick={() => setCount((count) => count + 1)}>
        Botao1 {count}
        </button>
        <button onClick={() => {setCount(0); setColor((color) => color === "green" ? "yellow" : "green")}} style={{color}}>
        Zerar contador
        </button>
        </>
    )
}

export default Botao1;