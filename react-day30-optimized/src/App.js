import React, { useState, useMemo, useCallback } from "react";



 const usersList =[
  "Alice","Bob","Charlie","david","Eve"
 ];

 const UserList =React.memo(({users}) =>{
  console.log("<Userlist>")
  return(
    <ul style={{listStyle:"none" ,padding:0}}>
      {users.map((u,i) => (
        <li key={i}>{u}</li>
      ))}
    </ul>
  )
 })

export default function App() {
  const [search, setSearch] = useState("")
  const [count, setCount] = useState(0)
  console.log(" App is rendering")

  const filteredUser =useMemo(() =>{
    console.log("filtering Users")
    return usersList.filter((u) =>
    u.toLowerCase().includes(search.toLowerCase()))
  },[search]

  )

  const handleClick = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

 const handleCount= useCallback(()=>{setCount((prev)=> (prev+1));},[])


  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>React day 30 useMemo and useCallback</h1>
      <p>Optimize rendering and performance like a pro</p>
      <div>
        <input type="text" placeholder="Search User "
          value={search}
          onChange={handleClick}
          style={{
            padding: "8px 16px ", 
            border:"1px solid red",
            width:"220px",
            marginRight:10
            }}/>
        <button onClick={handleCount} style={{padding:'8px 16px',
          border:"none",background:"blue",color:"white",cursor:"pointer"
        }}
        >count:{count}</button>
        <UserList users={filteredUser}/>

      </div>

    </div>
  )
}