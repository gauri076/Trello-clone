import React, { use, useContext, useState } from 'react'
import { Popover } from 'react-tiny-popover'
import { ChevronRight, ChevronLeft, Plus, X} from 'react-feather'
import { BoardContext } from '../context/BoardContext'

const Sidebar = () => {

    const blanckBoard = {
        name: "",
        bgcolor: "#a396e9",
        items: []
    };
    const [boardData, setBoardData] = useState(blanckBoard);
    const [collapsed, setCollapsed] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen]= useState(false);

    const {allboard, setAllBoard} = useContext(BoardContext)
    const setActiveBoard = (i) => {
        let newBoard = {...allboard}
        newBoard.active = i;
        setAllBoard(newBoard)
    }

    const addBoard = () => {
        let newBoard = {...allboard};
        newBoard.boards.push(boardData)
        setBoardData(newBoard);
        setBoardData(blanckBoard)
        setIsPopoverOpen(!isPopoverOpen)
    }

  return (
    <div className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] transition-all linear duration-500 flex-shrink-0 ${collapsed ? 'w-[42px]' : 'w-[280px]'}`}>
        {collapsed &&
        <div className='p-2'>
            <button  onClick= {() => setCollapsed(!collapsed)}  className='hover:bg-slate-600 rounded-sm p-1'>
                <ChevronRight size={18}></ChevronRight>
            </button>
        </div>
}
{   !collapsed &&
    <div>
        {/* <p>{JSON.stringify(allboard)}</p> */}
        <div className='workspace p-3 flex justify-between border-b border-b-[#cfdbed29] '>
            <h4>Remote Dev's Workplace</h4>
            <button onClick={() => setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm p-1'>
            <ChevronLeft size={18}></ChevronLeft>
            </button>
        </div>

        <div className="boardlist">
            <div className='flex justify-between px-3 py-2'>
                <h6>Your Boards</h6>
                
<Popover
  isOpen={isPopoverOpen}
  align= "start"
  positions={['right','top', 'bottom', 'left' ]} // preferred positions by priority
  content={
  <div className='ml-2 p-2 w-60 flex-col justify-center items-center bg-slate-500 text-white rounded '>
   <button className='absolute right-2 top-2 hover:bg-gray-500 p-1 rounded'><X size={16}></X></button>
   <h4 className='py-3'>Create board</h4>
   <img src= "https://placehold.co/200x120/png"></img>

   <div className="flex flex-col items-start mt-3 w-full">
    <label htmlFor="title">Board Tittle <span>*</span></label>
    <input type="text" value={boardData.name} onChange={(e) => {setBoardData({...boardData, name: e.target.value})}} className="h-8 px-2 mt-2 w-full bg-gray-700"/>

     <label htmlFor="Color">Board Color </label>
    <input type="color" value={boardData.bgcolor} onChange={(e) => {setBoardData({...boardData, bgcolor: e.target.value})}}  className="h-8 px-2 mt-2 w-full bg-gray-700"/>
    <button onClick={() => {addBoard()}} className="w-full rounded h-8 bg-slate-700 mt-2  hover:bg-gray-500  ">Create</button>
   </div>
    </div>
}
>
   <button onClick={() => setIsPopoverOpen(!isPopoverOpen)} className='hover:bg-slate-600 p-1 rounded-sm'>
                    <Plus size={18}></Plus>
                </button>
</Popover>
            </div>
        </div>
        <ul>
            {allboard.boards && allboard.boards.map((x, i) => {
                return  <li key={i}>
                <button onClick={() => setActiveBoard(i)} className='px-2 py-2 w-full -text-sm flex justify-start align-baseline hover:bg-slate-600'>
                    <span className='w-6 h-max rounded-sm mr-2 ' style={{ backgroundColor: `${x.bgcolor }`}}>&nbsp;</span>
                    <span>{x.name}</span>
                </button>
            </li>
            })}
           
        </ul>
        </div>
}
    </div>
  )
}

export default Sidebar