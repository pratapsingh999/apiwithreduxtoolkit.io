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
  {/* {
    datas.users.map((ele) =>(
      <li>{"name:" +  ele.login}</li>
    ))} */}
    {datas.users.map((curElem) => {
              return(
                <div className="col-10 col-md-4 mt-5" key={curElem.id}>
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img
                        src={curElem.avatar_url}
                      className="rounded"
                      width="150"
                    />
                  </div>
                  <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-0 textLeft">
                     {curElem.login}
                    </h4>
                    <span className="text-left"></span>
                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                      <div className="d-flex flex-column">
                        <span className="articles">Articles</span>{" "}
                        <span className="number1">38</span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        <span className="followers">Followers</span>{" "}
                        <span className="number2">980</span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        <span className="rating">Rating</span>{" "}
                        <span className="number3">8.9</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              ) 
            })}
    </div>
    </>
  );
}

export default App;
