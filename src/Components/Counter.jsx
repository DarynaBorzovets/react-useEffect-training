import {useState, useEffect} from "react";

function MyComponent() {

const [count, setCount] = useState(0);

function addCount() {
    setCount((prevCounter) => prevCounter  + 1);
}
  
useEffect(() => {
  document.title = `Count: ${count}`
})

return (
    <>
    <p>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    </>
  )
}

export default MyComponent

