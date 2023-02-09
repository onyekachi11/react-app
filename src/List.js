import React from 'react'
// import Task from './Task';
import { useState } from 'react'



const List = () => {

  let myText 

    const [items, setItems] = useState([])


    const addItems = ()=>{
      setItems([...items,{
        id: items.length,
      }
      ])
    }



    return (
      <form>
        <input type="text" onInput={(event)=>{
        myText = event.target.value
          // console.log(myText)
        }}/>


        <button className='btn' onClick={(event)=>{
          event.preventDefault();
          console.log(myText)
          addItems()
        }}>Add</button>

        <ul>
          {items.map(item=>(
            <li key={item
            .id}>
              {/* {item.value} */}
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