import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const GetData = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
    <h2>Axios Data</h2>
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  )
}

export const PostData = async () => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    console.log("Post created:", response.data);
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

PostData();
