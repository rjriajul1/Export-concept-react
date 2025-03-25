import "./App.css";
import Actors from "./components/actors";
import Books from "./components/books";
import Food from "./components/food";
import Singers from "./components/singers";
import Todo from "./components/todo";

function App() {
  // const time = 50;

  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah'];
  const singers =[
    {id:1, name:"Shouge", age:45},
    {id:2, name:"Jamase", age:35},
    {id:3, name:"Aiub Basue", age:45},
    {id:4, name:"shuvro Deb", age:60},
  ]
  const books = [
    {id:1, name:"Bnagla", price: 300},
    {id:2, name:"English", price: 200},
    {id:3, name:"Math", price: 250},
    {id:4, name:"History", price: 100},
    {id:5, name:"Psychology", price: 150},
  ]
  return (
    <>
      <h1>Vite + React</h1>

      <Books books={books}></Books>
      {
        singers.map(singer=><Singers key={singer.id} singer={singer}></Singers>)
      }



 {
   actors.map((actor, index)=> <Actors key={index} name={actor}></Actors>)
 }

      {/* <Todo task="Learn React" isDone={false} time={time}></Todo>
      <Todo task="Revise js" isDone={true}></Todo>
      <Todo task="Take a shower" isDone={false} ></Todo> */}

      {/* <Food name={"Banana"} isAngry={true}></Food>
      <Food name={"Apple"} isAngry={true}></Food>
      <Food name={"Painaple"} isAngry={false}></Food> */}
    </>
  );
}

export default App;
