import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'
import {BoardContext} from './context/BoardContext'

function App() {
const boardData = {
  active:0,
  boards:[
    {
      name: "My Trello Board",
      bgcolor: "#a396e9",
      list:[
        {id:"1", title: "to do", items:[
          {id:"11", title: "task 1"},
          {id:"12", title: "task 2"},
          {id:"13", title: "task 3"},
        ]},
         {id:"2", title: "in progress", items:[
          {id:"21", title: "task 4"},
          {id:"22", title: "task 5"},
          {id:"23", title: "task 6"},
        ]},
         {id:"3", title: "done", items:[
          {id:"31", title: "task 1"},
          {id:"32", title: "task 2"},
          {id:"33", title: "task 3"},
        ]},
      ]
    }
  ]
}
  const [allboard, setAllBoard] = useState(boardData)
  return (
    <>
    <Header></Header>
    <BoardContext.Provider value={{allboard, setAllBoard}} >

  <div className='content flex'>
       <Sidebar></Sidebar>
    <Main></Main>
    </div>
    </BoardContext.Provider>
  
   
    </>
  )
}

export default App
