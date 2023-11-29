import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Define the API endpoint to fetch a single post
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    // Fetch the post data using Axios
    axios.get(apiUrl)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className='blogs-detail'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Detail;