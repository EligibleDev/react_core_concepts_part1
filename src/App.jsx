import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BazarList from './to_be_done'
import Biris from './Biri'

function App() {
  const [count, setCount] = useState(0)

  const biris = ['akij', 'moushomi', 'gopal', 'ajij', 'bangla', 'pata'];

  return (
    <>
      {biris.map(biri => <Biris brandName={biri}></Biris>)}


      {/* <BazarList productName="alu" bought={true}></BazarList>
      <BazarList productName="begun" bought={false}></BazarList>
      <BazarList productName="potol" bought={true}></BazarList>
      <BazarList productName="something" bought={false}></BazarList> */}

      {/* <Todo isDone={true} task="learn HTML"></Todo>
      <Todo isDone={true} task="learn CSS"></Todo>
      <Todo isDone={false} task="learn react"></Todo>
      <Todo isDone={false} task="learn mongo"></Todo> */}

      {/* <Developer></Developer> */}

      {/* <Device name="laptop" price="43000"></Device> */}

      {/* <Student name="Mikail" group="science" grade="86"></Student> */}

      {/* <Bus wheels="6" seat="56"></Bus>  */}
    </>
  )
}

function Developer() {
  const developerStyles = {
    border: '1px solid red',
    borderRadius: '20px',
    backgroundColor: 'green'
  }

  const name = 'Mikail';
  const profession = 'web developer';
  const age = 16;
  const place = 'kushtia'
  return (
    <>
      <div style={developerStyles}>
        <p>Hi, My name I am {name}.</p>
        <p>I am a {profession}.</p>
        <p>I am {age} years old.</p>
        <p>I live in {place}.</p>
      </div>
    </>
  )
}

function Device(props) {
  return <p>this device is {props.name}</p>
}

function Student({ name, group, grade }) {
  return (
    <>
      <h4>this is {name}.</h4>
      <p>he studies in {group}.</p>
      <p>the result of his last exam was {grade}.</p>
    </>
  )
}

function Bus({ wheels, seat }) {
  console.log({ wheels, seat });
  return (
    <h1>This is a bus with {wheels} wheels, and {seat} seats.</h1>
  )
}

export default App
