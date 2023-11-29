import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate,useParams } from 'react-router-dom';

const Blogs = () => {
  const [dataa, setDataa] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchBlog= async ()=>{
   try {
    const response = await axios.get(URL);
    // const data = axios.get(URL)

    console.log(response)
   setDataa(response.data)
   } catch (error) {
    console.log(error.message)

   }

  }
  useEffect(()=>{
    fetchBlog()
   console.log('daaata;', dataa);

  },[])
  return (
    <div className="blogs">
      <h2>Blogs</h2>
      {Array.isArray(dataa) ? (
        <table>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Title</th>

            </tr>
          </thead>
          <tbody>
            {dataa.map((blog) => (
              <tr key={blog.id}>
                {/* <td>{blog.id}</td> */}
                <Link to={`/detail/${blog.id}`}>
                <td>{blog.title}</td>
                </Link>


              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}


export default Blogs