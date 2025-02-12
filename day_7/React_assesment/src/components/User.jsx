import { useEffect, useState } from "react";
import axios from "axios";
import "../css/user.css";

export function User() {
  let [data, setData] = useState([]); // Stores all users
  let [filteredData, setFilteredData] = useState([]);
  let [input, setInput] = useState("");
  let [loading, setloading] = useState(false);

  let api = "https://jsonplaceholder.typicode.com/users";

  async function handleUser() {
    setloading(true);
    try {
      let res = await axios.get(api);
      setData(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.log("error in fetching data", error);
    } finally {
      setloading(false);
    }
  }

  function handleInput(value) {
    setInput(value.target.value);
  }

  function handleSearch() {
    let filter = data.filter((ele) =>
      ele.name.toLowerCase().includes(input.toLowerCase())
      );
      if (filter.length < 1) {
           setInput("");
          return alert("Error: User not found!")
      }
      
      setFilteredData(filter);
      setInput("")
  }

  useEffect(() => {
    handleUser();
  }, []);

  if (loading) {
    return <h2>Users Loading...</h2>;
  }
  return (
    <>
      <div className="input-div">
        <input
          type="text"
          placeholder="Enter user here"
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleSearch}>Search</button>
        <br />
      </div>
      <div className="div">
        <div className="parent">
          <h1>Users</h1>
          {filteredData.length > 0 ? (
            filteredData.map((ele) => {
              return (
                <ul className="child" key={ele.id}>
                  <li>
                    <b>Name:</b> {ele.name}
                  </li>
                  <li>
                    <b>Email:</b> {ele.email}
                  </li>
                </ul>
              );
            })
          ) : (
            <div>
              <p>User not found</p>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
}
