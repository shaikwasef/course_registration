import './App.css';
import {useSelector } from 'react-redux';
import UserStateButtonContainer  from "./components/appComponents/UserStateButtonContainer"
import Admin from "./components/appComponents/Admin"
import Student from "./components/studentComponents/Student"

function App() {
  const userState = useSelector(state => state.userStateReducer);

  return (
    <div className="App">
     <UserStateButtonContainer />
     {userState === "STUDENT" ? <Student/> : <Admin/> }
    </div>
  );
}

export default App;
