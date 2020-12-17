import React, {useState} from "react";
import {motion,AnimatePresence} from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggled] = useState(1)
  return (
    <motion.div 
    initial = {{opacity:0 }}
    animate = {{opacity:1}} 
    transition = {{duration:1}}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
      <AnimatePresence>
      {isToggled && (
        <motion.h2 
        initial = {{opacity:0}}
        animate = {{opacity:1, x:value + "px"}}
        exit = {{opacity:0}}
        >Super Cool
        </motion.h2>
      )}
      </AnimatePresence>
        <button 
        onClick={()=>setToggled((prevValue)=>{return prevValue ? 0 : 1})}>Toggle</button>

        <input type = "range" min= "-100" max = "100" value = {value} 
        onChange = {(e) => setValue(e.target.value)}/>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} alt='' />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} alt=''/>
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} alt=''/>
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} alt=''/>
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
