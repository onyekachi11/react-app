import React from 'react'
// import Task from './Task';
import { useState } from 'react'
import './app.css'



const List = () => {

  let myText 
//   const [input, setInput] = useState('')
  const [items, setItems] = useState([])


    const addItems = ()=>{
      setItems([...items,{
        id: items.length,
        value: myText
      }
      ])
    }

    const handleDelete =(deleteitem)=>{
        const newList  = items.filter((item) => item !== deleteitem);
        setItems(newList);
        // alert(deleteitem.value)
    }



    return (
      <form>
        <input type="text"  onInput={(event)=>{
            // setInput('')
        myText = event.target.value
        }}/>


        <button className='btn' onClick={(event)=>{
          event.preventDefault();
          addItems()
        }}>Add</button>

        <ul>
          {items.map(item=>(
            <li key={item
            .id}>
              {item.value}
              <button onClick={()=>{
                handleDelete(item)
              }}>Delete</button>
            </li>
          ))}
        </ul>
    </form>
  )
}




// export const Task = () => {
 
//   return (
//     <div>
//         <p>
//             hello
//         </p>
//         <button>Delete</button>
//     </div>
//   )
// }

export default List