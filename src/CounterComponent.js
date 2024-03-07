import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Counter.css'
const CounterComponent = () =>{
   
    const [addOn,setAddOn] =  useState([0])
    let arr =[...addOn]
    const handleSubtract =(idx)=>{
        arr[idx] = arr[idx] >0 ? arr[idx]-1 : 0
        setAddOn(arr)
    }
    const addCard = ()=>{
        setAddOn([...addOn,0])
    }
    const removeCard = (index) =>{
        if(addOn.length>1){
            addOn.splice(index,1)
            setAddOn([...addOn])
        }
    }
    
    const addcount=(idx)=>{
       arr[idx]++
       setAddOn(arr)
    }
    const handleneutral = (idx)=>{
        arr[idx]=0
        setAddOn(arr)
    }
    console.log(addOn)
    return(
        <>
        {addOn.map((item,i)=>{
            return(
                <div className='maincontainer' key={i}>
                <FontAwesomeIcon icon={faCircleXmark} className='closeIcon' onClick={()=>removeCard(i)}/>
                <div className='count' key={i}>{addOn[i]}</div>
                <div className='d-flex'>
                    <button className='buttons add' onClick={()=>addcount(i)}>Add</button>
                    <button className='buttons subtract' onClick={()=>handleSubtract(i)}>Subtract</button>
                    <button className='buttons neutral' onClick={()=>handleneutral(i)}>Neutral</button>
                </div>
                <div className='addcomponent'>
                    <button className='btn' onClick={()=>addCard()}>Add Component</button>
                </div>
            </div>
            )
           
        })}
    </>
    )
}
export default CounterComponent;