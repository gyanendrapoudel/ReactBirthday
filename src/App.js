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
  const handleUsers =()=>{
    if(users.length===0){
      fetchUsers()
    }
    setUsers([])
  }
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div className="App py-5 ">
      <div className="container bg-light w-75 m-auto rounded-3 shadow-lg">
        <h1 className=" py-2">Birthday Reminder</h1>
        {users.map((user, index) => {
          return <User user={user} />
        })}
        <button
          className={
            users.length > 0
              ?'my-5 btn btn-primary w-100 bg-danger border-0'
              : 'my-5 btn btn-primary w-100'
               
          }
          onClick={handleUsers}
        >
          {users.length > 0 ? 'Clear All' : 'Reset'}
        </button>
      </div>
    </div>
  )
}

export default App;
