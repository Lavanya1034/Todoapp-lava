
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './Login';
import ToDoList from './ToDoList';
import { LayOut } from "./LayOut";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {

  //const[loginSuccess,setLoginSuccess] = useState(false)
  

  return (
    // <div className = "App">  
    //   {!loginSuccess && <Login credentials = {setLoginSuccess}/>}
    //   {loginSuccess && <ToDoList/>}  
    // </div>
    <div>
    <LayOut/>
    <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>      
      <Route path="/todolist" element={<ToDoList/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;
