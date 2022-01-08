import "./Home.scss"

import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"
import { useRef, useState } from "react"


function Home () {
    const [text, textas] = useState(0)
    const input1 = useRef()
    const input2 = useRef()
    // const p = useRef()
    const modall1 = useRef
    return(
        <>
            <Header />
            <p >{text}</p>
            <input ref={input1} type="number" />
            <select onChange={(e) =>{
                // alert(e.target.value)

                if(e.target.value === "plus"){
                    textas(Number(input1.current.value) + Number(input2.current.value))
                } else if(e.target.value === "minus"){
                    textas(Number(input1.current.value) - Number(input2.current.value))
                } else if(e.target.value === "boluv"){
                    textas(Number(input1.current.value) / Number(input2.current.value))
                } else if(e.target.value === "mulp"){
                    textas(Number(input1.current.value) * Number(input2.current.value))
                }
            }}>
                <option value="plus">+</option>
                <option value="minus">-</option>
                <option value="boluv">/</option>
                <option value="mulp">*</option>
            </select>
            <input ref={input2} type="number" />
            {/* <button onClick={() =>{
                let value = Number(input1.current.value) + Number(input2.current.value)
                textas(value)
            }}>+</button> */}



            {/* <button onClick={() =>{
                let value = Number(input1.current.value) - Number(input2.current.value)
                textas(value)
            }}>-</button> */}

            <div ref={modall1} className="modal">
                <button onClick={() =>{
                    modall1.current.style.display = "none"
                }}>&times;</button>
                <h2>Qalesan ukam</h2>
            </div>
        
            <button onClick={() =>{
                modall1.current.style.display = "block"
            }} className="MODAL">go</button>


            <Footer />
        </>
    )
}
export {Home}