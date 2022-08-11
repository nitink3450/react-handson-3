import React,{useState} from "react";
export function Form() {
  const [store,setStore] = useState({name:'',department:'',rating:''});
  const [out,setOut] = useState([]);
  const [sub,setSub] = useState(false);
  let input = (e) =>{
    let name = e.target.name;
    let inputValue = e.target.value; 
    setStore({...store,[name]:[inputValue]});
  }
  const submitted = (e) => {
    e.preventDefault();
    setOut([...out,{...store,id:out.length}]);
    setSub(true);
  }
  return (
<>
<div>
{sub ? null : <div className="container">
      <form onSubmit={submitted}>
        <label htmlFor="name">Name :</label>
        <input type="text" onChange={input} name='name' placeholder="Enter Name.." />
        <br />
        <label htmlFor="name">Department :</label>
        <input type="text" onChange={input} name='department' placeholder="Field" />
        <br />
        <label htmlFor="name">Rating :</label>
        <input type="text" onChange={input} name='rating' placeholder="Out of 5" maxLength={1} minLength={1} />
        <br />
        <br />
        <input style={{ fontSize: "xx-large", height: "65px" }} type="submit" value="Submit"/>
        
      </form>
      </div>}
      
        {(sub ? <><div className="feedStoreDiv">
        {out.map((ele)=>(
          <h3 className="feedStoreData" key={ele.id}>
          Name : {ele.name} || Department : {ele.department } || Rating : {ele.rating}
          </h3>))}
        </div>
        <button className="backBtn" onClick={()=>{setSub(!sub)}}>Back Home</button></> : null)}
    </div>
    </>
  );
}
