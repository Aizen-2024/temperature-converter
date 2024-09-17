import React,{useState,useEffect} from "react";
const Hell=()=>{
    const [userinput,setUserinput]=useState(0)
    const[userselection,setUserselection]=useState('Celcius')
    const [result,setResult]=useState(0)

    const convert=()=>{
        (userselection==='Celcius')?setResult((userinput*9/5)+32):setResult((userinput-32)*5/9)
        setUserinput(0)
        return result
    }
    useEffect(()=>{
        console.log(`has been rerendered`)
        return ()=>console.log('i am getting cleand up')
    },[userinput>=1000])
    return(
        <div id="main">
            <input placeholder="enter the value to be changed" value={userinput} onChange={e=>setUserinput(e.target.value)} required/><br/>
            <input type="radio" name="temp" value={'Celcius'} onChange={e=>setUserselection('Celcius')}/><label>Celcius</label>
            <input type="radio" name="temp" value={'Farenheit'} onChange={e=>setUserselection('Farenheit')}/><label>Farenheit</label><br/>
            <button onClick={convert}>Convert</button>
            <div id="result">
                {result}
            </div>
        </div>
    )
}
export default Hell