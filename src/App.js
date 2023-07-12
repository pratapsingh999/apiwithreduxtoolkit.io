import './App.css';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import { getAllData } from './features/gitUserSlice';


function App() {

  const dispatch = useDispatch();

  const datas = useSelector((state) =>{
    console.log("state.." ,  state.user);
    return state.user
  });


  if(datas.loading){
    return(<h2>LOADING.......</h2>)
  }
  return (
    <>
    <div>
  <h1>Well come to api with redux-toolkit</h1>
  <button onClick={()=> dispatch(getAllData())}>Get github users</button>
  {
    datas.users.map((ele) =>(
      <li>{"name:" +  ele.login}</li>
    ))}
    </div>
    </>
  );
}

export default App;
