import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Counter from './Counter'
import Emp from './Emp'
function App() {
  let data= 'Sisira Anoop'
  // let count=0
  const [count, setCount] = useState(0);
  const addCount =() => {
    setCount(count+1)
    // console.log(count)
  }
  let obj ={
    title: 'first count',
    count
  }
  let emp =[{name:'sisira', age:27}, {name: 'Anoop', age:31}]
  return (
    <div style={{backgroundColor:'yellow'}}>
      <Header data={data}/>
      <h1 style={{color:'red'}}>Hello world</h1>
      <h6 className='test'>Counter: {count}</h6>
      <button onClick={addCount}>Add</button>
      <Sidebar/>
      <Counter {...obj}/>
      <Counter count={count}/>
      {
        emp.map((obj,index)=>{
          return(
            <Emp name= {obj.name} age={obj.age}/>
            )
          
        })
      }
      <Hello/>
      <Footer/>
    </div>
  );
}

export default App;

function Hello(){
  return(<h6>Helloworld test</h6>)
}