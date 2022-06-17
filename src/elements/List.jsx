import React, {useState, useEffect} from 'react' 


const List = () => {
  const [data, setData] = useState([{}])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  },[])


  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p> Loading...</p>
      ) : (
        data.members.map((member,i)=> (
          <p key={i}>{member}</p>
        ))
      )}
      <ul>
        {data.map(item =>
          <li key = {item.id}>
            ID: {item.id} | Name: {item.name} | Username: {item.username} 
          </li>
          )}
      </ul>
    </div>
  )
}
 export default List