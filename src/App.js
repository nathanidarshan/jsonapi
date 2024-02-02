import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from './Posts';
import Comments from './Comments';
import Albums from './Albums';
import Todos from './Todos';
import Photos from './Photos';
import Users from './Users';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <div style={{textAlign:"center" , textDecoration:"overline"}}>
        <h1>Jsonapi</h1>
        <Link to="Posts" style={{color:"black" , textDecoration:"none" , fontSize:"30px" , marginRight:"10px"}}>Posts</Link>
        <Link to="Comments" style={{color:"black" , textDecoration:"none" , fontSize:"30px" , marginRight:"10px"}}>Comments</Link>
        <Link to="Albums" style={{color:"black" , textDecoration:"none" , fontSize:"30px" , marginRight:"10px"}}>Albums</Link>
        <Link to="Photos" style={{color:"black" , textDecoration:"none" , fontSize:"30px" , marginRight:"10px"}}>Photos</Link>
        <Link to="Todos" style={{color:"black" , textDecoration:"none" , fontSize:"30px" , marginRight:"10px"}}>Todos</Link>
        <Link to="Users" style={{color:"black" , textDecoration:"none" , fontSize:"30px" , marginRight:"10px"}}>Users</Link>
      </div>

      <div className="App">
        <Routes>
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />
          <Route path="albums" element={<Albums />} />
          <Route path="Photos" element={<Photos />} />
          <Route path="Todos" element={<Todos />} />
          <Route path="Users" element={<Users />} />
        </Routes>
      </div>


    </>
  );
}

export default App;
