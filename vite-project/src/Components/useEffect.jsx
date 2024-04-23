import React, { useEffect, useState } from 'react'

const UseEffect=()=>{

    const[age,setAge] = useState(0)

    const[sibling,setSibling] = useState(0)

const[sum, setSum] = useState(0)

    useEffect(()=>{

        alert(`my age is ${age}`)

    },[sibling,age])

    return(
        <>
        <div>
            <p></p>
        </div>

        <button onClick={()=>setAge((prev)=>prev+1)}>age</button>
        <button onClick={()=>setSibling((prev)=>prev+1)}>sibling</button>


        </>

    )

}

export default UseEffect
