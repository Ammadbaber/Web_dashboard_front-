import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import DataTable from "react-data-table-component";

const Feedback = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/contactus");
        setApiData(response.data);
        setFilteredData(response.data); // Set initial filtered data

        // Log the API response in the console
        console.log("API Responses:", response.data);
      } catch (error) {
        console.error("Error fetching data from the APIs:", error);
      }
    };

    fetchData();
  }, []);

  // Columns configuration for DataTable
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Messages",
      selector: "message",
      sortable: true,
    },
  ];

  // Pagination options
  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  // Handle filtering based on user input
  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredResult = apiData.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.message.toLowerCase().includes(keyword)
    );
    setFilteredData(filteredResult);
  };

  return (
    <Container>
      <div className="user-data-content  table_inner_table">
        <h2>User Feedbacks</h2>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
          className="form-control search-field mb-2"
        />
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationComponentOptions={paginationOptions}
          paginationPerPage={10} // Adjust as needed
          paginationRowsPerPageOptions={[10, 20, 30]}
          highlightOnHover
          striped
          dense
        />
      </div>
    </Container>
  );
};

export default Feedback;
