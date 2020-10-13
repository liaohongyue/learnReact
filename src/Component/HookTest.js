import React, { useState, useEffect } from 'react';


function useAge(){
    const [age, setAge] = useState(0);
    useEffect(() => {
        setTimeout(() =>{
            setAge(20);
        }, 2000);
    });
    return age;
}

export default function HookTest() {
    useEffect(() => {
        document.title = `您点击了 ${count} 次`;
    },[])

    const age = useAge();
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState("banana");
    const [fruits, setFruits] = useState(["apple","banana"]);
    const [input, setInput] = useState('');

    return (
        <div>
            <p>您的年龄是{age !== 0 ? age : 'loading...'  }</p>
            <button onClick={()=>setCount(count + 1)}>点击</button>
            <h1>{count}</h1>
            <p>{fruit}</p>
            <p>
                <ul>
                { fruits.map(f =>( <li key={f} onClick={()=>setFruit(f)} >{f}</li>))}
                </ul>
            </p>
            <p>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button onClick={()=>{setFruits( [...fruits, input]);setInput('') } }>新增水果</button>
            </p>
        </div>
    )
}
