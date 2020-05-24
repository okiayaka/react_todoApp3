import React from 'react';

// css2(削除ボタン).cssファイルを使い classNameを指定する方法。
import "./Item.css"

// css3(編集ボタン).css in jsを使う方法。styled-componentsを使う。css1とcss2を合わせたもの。
  // $ yarn add styled-components を行う。
import styled from "styled-components"
// ↓
const EditButton = styled.button`
background-color: gray;
border-radius: 20px;
color: white;
`
const CompButton = styled.button`
background-color: plum;
border-radius: 10px;
color: white;
`



// css1(完了ボタン).jsの連想配列の形でcssを入力する方法。
const isDoneStyle = {
  backgroundColor:"skyblue",
  borderRadius: 20,
  color: "white"
}



const Item = (props) => {

  // ①"完了"したかどうか保存するデータを定義。
  const [isDone, setIsDone] = React.useState(false)
  // isDoneがtrue…完了した
  // isDoneがfalse…完了していない状態

  // ③編集機能
  const [isEdit, setIsEdit] = React.useState(false)
  // isEditがtrue…編集できるようになる
  // isEditがfalse…編集しない


  // ②削除機能
  const handleDelete = () => {
    // todos(state)をコピー
    const delTodos = props.todos.slice()
    // 該当のインデックス番号のtodoを１つ削除
    delTodos.splice(props.index, 1)
    // setTodosを更新
    props.setTodos(delTodos)
  }


  // submitされたと時の処理
  const handleEdit = (e) => {
    e.preventDefault()
    // todosのコピー
    const edtTodos = props.todos.slice()
    // 入力された文字列を取得
    const editTask = e.target.editTask.value
    // 置き換え
    edtTodos.splice(props.index, 1, editTask)
    // setTodosの更新
    props.setTodos(edtTodos)
    // isEditが変更される前にsetTodosを行う
    setIsEdit(!isEdit)
  }

  return (
    <>
      {
        isEdit ? 
        // true
        <form onSubmit={handleEdit}>
          <input type="text" name="editTask" />
          {/* <button type="submit">編集完了</button> */}
          <CompButton type="submit">編集完了</CompButton>
        </form>
        :
        // false
        // <></>
      // }
        <>
        {
          isDone ? 
          // isDoneがtrue
          <p style={{ textDecoration: "line-through" }}>{props.todo}</p> 
          : 
          // isDoneがfalse
          <p>{props.todo}</p>
        }

        {/* ボタンの表示。完了→戻す、戻す→完了。 */}
        <button style={isDoneStyle} onClick={()=>{
          setIsDone(!isDone)
        }}>{isDone ? "戻す":"完了"}</button>

        {/* 削除ボタン */}
          <button onClick={handleDelete} className="delete-button">削除</button>

        {/* 編集ボタン */}
        {/* <button onClick={()=>{
          setIsEdit(!isEdit)
        }}>編集</button> */}
        <EditButton onClick={()=>{
          setIsEdit(!isEdit)
        }}>編集</EditButton>
        </>
      } 
    </>
  )
}

export default Item
