import React from 'react';

import styled from "styled-components"

const AddButton = styled.button`
background-color: silver;
border-radius: 20px;
color: white;
`


const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodos = props.todos.slice()

    const task = e.target.task.value

    newTodos.push(task)

    props.setTodos(newTodos)

  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="追加するTODOを入力"/>
        {/* <button type="submit">追加する</button> */}
        <AddButton type="submit">追加する</AddButton>
      </form>
    </>
  )
}

export default Form
