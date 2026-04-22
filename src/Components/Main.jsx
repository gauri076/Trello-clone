import React, { useContext } from 'react'
import { MoreHorizontal, UserPlus, Edit2 } from 'react-feather'
import CardAdd from './CardAdd'
import { BoardContext } from '../context/BoardContext'
import { DragDropContext, Draggable,Droppable } from '@hello-pangea/dnd'

const Main = () => {

  const {allboard, setAllBoard} = useContext(BoardContext)
  const bdata = allboard.boards[allboard.active]

  function onDragEnd(res) {
    console.log("drag", res)
  }
  const cardData = (e) => {
    let newList = [...bdata.list];
  }


  return (
    <div className='flex flex-col bg-slate-900 w-full'>
      <div className='p-3 bg-black flex justify-between w-full bg-opacity-50'>
        <h2 className='text-lg'>{bdata.name}</h2>
        <div className='flex items-center justify-center'>
          <button className='bg-gray-200 text-gray-500 px-2 py-1 mr-2 rounded flex justify-center items-center h-8'>
            <UserPlus size={16} className='mr-2'></UserPlus>
            Share
          </button>
          <button className='hover:bg-gray-500 px-2 py-1 h-8 rounded '><MoreHorizontal size={16}></MoreHorizontal></button>
        </div>
      </div>

      <div className='flex flex-col w-full grow relative'>
        <div className='absolute mb-1 pb-2 left-0 top-0 right-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden'>

          <DragDropContext onDragEnd={onDragEnd}>
    {bdata.list && bdata.list.map((x, ind) => {
return  <div key={ind} className='mr-3 w-60 h-fit rounded-md p-2 bg-black shrink-0'>
        <div className="list-body">
          <div className='flex justify-between p-1 '>
            <span>{x.title}</span>
            <button className='hover:bg-gray-500 px-2 py-1 h-8 rounded '><MoreHorizontal size={16}></MoreHorizontal></button>
          </div>

       <Droppable droppableId={x.id} type="PERSON">
  {(provided, snapshot) => (
    <div className='py-1'
      ref={provided.innerRef}
      style={{ backgroundColor: snapshot.isDraggingOver ? '#222' : 'transparent' }}
      {...provided.droppableProps}
    >
  {x.items && x.items.map((item, index) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
            <span>{item.title}</span>
            <span className='flex justify-start items-start'>
              <button className='hover:bg-gray-600 p-1 rounded-sm'>
                <Edit2 size={16} />
              </button>
            </span>
          </div>
        </div>
      )}
    </Draggable>
  )
})}
      {provided.placeholder}
    </div>
  )}
</Droppable>
         
          
        <CardAdd getcard={(e) => cardData(e)} ></CardAdd>
        </div>
        </div>
          })}
          </DragDropContext>


      
       

        </div>
      </div> 
    </div>
  )
}

export default Main