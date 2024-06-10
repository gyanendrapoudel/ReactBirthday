import User from './component/User';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const fetchUsers = async ()=>{
    const response = await fetch("https://randomuser.me/api?results=6")
    const data = await response.json()
    const users = data.results;
    setUsers(users)
    
  }
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div className="App py-5 ">
      <div className="container bg-light w-75 m-auto rounded-3 shadow-lg">
        <h1 className=" py-2">Birthday Reminder</h1>
        {
          users.map((user, index)=>{
            return <User user={user} />
          })
        }
      </div>
    </div>
  );
}

export default App;
