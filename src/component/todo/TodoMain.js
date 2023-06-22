import React from 'react'
import TodoItem from './TodoItem';

import './scss/TodoMain.scss'

const TodoMain = ({todoList, rmTodo, chkTodo}) => {
  return (
    <ul className='todo-list'>
        {todoList.map(todo =><TodoItem key={todo.id} item={todo} rmTodo={rmTodo} chkTodo={chkTodo}/>)}
    </ul>
  )
}

export default TodoMain;