import React, {useState, useEffect} from 'react' 


const List = () => {
  // const [data, setData] = useState([{}])

  // useEffect(() =>{
  //   fetch("https://jsonplaceholder.typicode.com/users").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // },[])
  const queryOne= JSON.parse(sessionStorage.getItem('usedIngredients'));
  var stringOne = "usedIngredients=";
  const queryTwo = JSON.parse(sessionStorage.getItem('diets'));
  var stringTwo = "diet=";
  const queryThree = JSON.parse(sessionStorage.getItem('intolerances'));
  var stringThree = "intolerances=";

  for(let i = 0; i < queryOne.length; i++) {
    stringOne+= i < queryOne.length-1 ? queryOne[i] + "," : queryOne[i]
  }

  for (let i = 0; i < queryTwo.length; i++) {
    stringTwo += i < queryTwo.length - 1 ? queryTwo[i] + "," : queryTwo[i]
  }

  for (let i = 0; i < queryThree.length; i++) {
    stringThree += i < queryThree.length - 1 ? queryThree[i] + "," : queryThree[i]
  }
  return (

    <div>
      {stringOne}
      {stringTwo}
      {stringThree}
      {/* <ul>{list.map(item =>
        <li> {item}</li>
      )}
      </ul> */}
      {/* {(typeof data.members === 'undefined') ? (
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
      </ul> */}
    </div>
  )
}
 export default List