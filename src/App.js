import './App.scss';
import ToDoList from './components/ToDoList'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {
  Link, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
