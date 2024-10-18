import React, { useState, useTransition } from 'react'

function Todo() {
    const [todo,setTodo]=useState('')
    const [todoArr,setTodoArr]=useState([])
    // const [isfinished,setIsfinished]=useState(false)
    function addTodo(){
        if(todo=='')return
        setTodoArr([...todoArr,{text:todo,isfinished:false,iseditable:false}])
        console.log(todoArr)
        setTodo('')
    }
    
    function del(index){
        setTodoArr(todoArr.filter((item,i)=>i!=index))
    }
    function finish(index) {
        const newTodoArr = todoArr.map((item, i) => 
            i === index ? { ...item, isfinished: !item.isfinished } : item
        )
        setTodoArr(newTodoArr)
        console.log(newTodoArr) 
    }
    function edit(index) {
        const newTodoArr = todoArr.map((item, i) => 
            i ==index ? { ...item, iseditable: !item.iseditable } : item
        )
        setTodoArr(newTodoArr)
    }
    function handleEdit(index,value){
        const newTodoArr = todoArr.map((item, i) => 
            i ==index ? { ...item, text:value } : item
        )
        setTodoArr(newTodoArr)
    }
    function closeInput(index){
        const newTodoArr = todoArr.map((item, i) => 
            i ==index ? { ...item, iseditable: !item.iseditable } : item
        )
        setTodoArr(newTodoArr)
    }

    return (
        <div>
            {todoArr.map((item,i)=>{
                return(
                    <div key={i} className={`w-full fixed justify-center items-center h-[100vh] bg-[#80808080] ${item.iseditable ? 'flex' : 'hidden'} `}>
                        <div className='flex rounded-[50px] border-2 border-gray-700'>
                            <input contentEditable='true' onChange={(e)=>{handleEdit(i,e.target.value)}} value={`${item.iseditable ? item.text : ''}`} type="text" className='h-[50px] rounded-tl-[50px] rounded-bl-[50px]  bg-slate-200'/>
                            <i onClick={()=>closeInput(i)} className="fa-solid fa-check h-[50px] flex items-center justify-center bg-slate-200 rounded-tr-[50px] rounded-br-[50px] w-[30px] hover:bg-slate-400"></i>
                        </div>
                    </div>
                )
            })}
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input value={todo} onChange={(e)=>{setTodo(e.target.value)}} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker " placeholder="Add Todo"/>
                           
                            <button onClick={addTodo} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal bg-[#9fc1c1] hover:text-white hover:bg-[teal]">Add</button>
                        </div>
                    </div>
                    <div>
                        {
                            todoArr.map((item,i)=>{
                                return(
                                    <div key={i}  className="flex mb-4 items-center">
                                        <p  className={`w-full text-grey-darkest font-bold ${item.isfinished ? 'line-through decoration-[red] text-[red]' : '' }`}>{item.text}</p>
                                        <button onClick={()=>{
                                            edit(i)
                                            }}className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red bg-[#d6ba88] hover:text-white hover:bg-[#FF7900] ">Edit
                                        </button>

                                        <button onClick={()=>{
                                            finish(i)
                                        }} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white  bg-[#a2dca2]  border-green hover:bg-[green]">Done
                                        </button>

                                        <button onClick={()=>{
                                            del(i)
                                            }}className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red bg-[#e49797] hover:text-white hover:bg-[red] ">Remove
                                        </button>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
