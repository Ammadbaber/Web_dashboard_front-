import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Chart } from 'react-charts';
import Container from 'react-bootstrap/Container';

import '../../src/assets/home.css'

const Tables = () => {
  const [dataa, setDataa] = useState([]);
  const URL = "https://fakestoreapi.com/products";
    
  const fetchBlog = async () => {
    try {
      const response = await axios.get(URL);
      setDataa(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <Container>
        <div className="table_inner">
        <h2>Appointment Table</h2>
          <table className="table_inner_table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {dataa.map((blog,index) => (
                <tr key={blog.id}>
                  <td>{index+1}</td>
                  {/* <td>{blog.id}</td> */}
                  <td>{blog.title}</td>
                  <td>{blog.description}</td>
                  <td>${blog.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

// function MyChart() {
//   const data = React.useMemo(
//     () => [
//       {
//         label: 'Series 1',
//         data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//       },
//       {
//         label: 'Series 2',
//         data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//       }
//     ],
//     []
//   )

//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'linear', position: 'bottom' },
//       { type: 'linear', position: 'left' }
//     ],
//     []
//   )

//   const lineChart = (
//     // A react-chart hyper-responsively and continuously fills the available
//     // space of its parent element automatically
//     <div
//       style={{
//         width: '400px',
//         height: '300px'
//       }}
//     >
//       <Chart data={data} axes={axes} />
//     </div>
//   )
// }
export default Tables;
