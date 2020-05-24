import React from 'react';
import Item from './Item';

const List = (props) => {
  
  return (
    <>
      {props.todos.map((todo, index) => {
        return (
          <Item todo={todo} index={index} todos={props.todos} setTodos={props.setTodos}></Item>
        )
      })}
    </>
  )
}


export default List
