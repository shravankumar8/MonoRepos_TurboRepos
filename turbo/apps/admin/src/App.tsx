import './App.css'
import { Button } from '@repo/ui/button'
import { Greeting } from '@repo/ui/greeting'
import {Inputbox}from "@repo/ui/inputbox"
function App() {

  return (
    <>
      <div>
        <Button appName="disco radhod" children={"signup?"} />
        <Greeting />
        <Inputbox children={<div>this is an input box</div>} />
      </div>
    </>
  );
}

export default App
