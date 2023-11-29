import React, { useState, useEffect } from 'react';
import '../../src/assets/Create.css';



const Create_data = ({ sharedState, setSharedState }) => {





    const getDatafromLS = () => {
        const items = JSON.parse(localStorage.getItem('books'));
        return items ? items : [];
    };


    const result=getDatafromLS();
    const result_length = result.length;
    console.log("items",result_length)


    // useEffect(()=>{
    //     setSharedState(result_length);
    // },[])


    // main array of objects state || books state || books array of objects
    const [books, setbooks] = useState(getDatafromLS());

    // input field states
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

    useEffect(() => {
        // Save books to local storage whenever the 'books' state changes
        localStorage.setItem('books', JSON.stringify(books));
        getDatafromLS();
    }, [books]);

    const handleAddBookSubmit = (e) => {
        e.preventDefault();
        // creating an object
        let book = {
            title,
            author,
            isbn,
        };
        setbooks((prevBooks) => [...prevBooks, book]);
        setTitle('');
        setAuthor('');
        setIsbn('');
    };


    const handleDeleteBook = (index) => {
        // Create a copy of the current books array
        const updatedBooks = [...books];
        // Remove the book at the specified index
        updatedBooks.splice(index, 1);
        // Update the state with the new books array
        setbooks(updatedBooks);
    };

    return (
        <div className='blogs'>
            <div className='wrapper'>
                <h1>BookList App</h1>
                <p>Add and view your books using local storage</p>
                <p>Total number of persons is = {result_length}  </p>
                <div className='main'>
                    <div className='form-container'>
                        <form autoComplete='off' className='form-group' onSubmit={handleAddBookSubmit}>
                            <label>Title</label>
                            <input type='text' className='form-control' required onChange={(e) => setTitle(e.target.value)} value={title}></input>
                            <br></br>
                            <label>Author</label>
                            <input type='text' className='form-control' required onChange={(e) => setAuthor(e.target.value)} value={author}></input>
                            <br></br>
                            <label>ISBN#</label>
                            <input type='text' className='form-control' required onChange={(e) => setIsbn(e.target.value)} value={isbn}></input>
                            <br></br>
                            <button type='submit' className='btn btn-success btn-md'>
                                ADD
                            </button>
                        </form>
                    </div>

                    <div className='view-container'>
                        {books.length > 0 &&
                            <>
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>ISBN#</th>
                                                <th>Title</th>
                                                <th>Author</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {books.map((book, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>

                                                    <td>{book.isbn}</td>
                                                    <td>{book.title}</td>
                                                    <td>{book.author}</td>
                                                    <td>
                                                        <button
                                                            className='btn btn-danger btn-sm'
                                                            onClick={() => handleDeleteBook(index)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                                <button className='btn btn-danger btn-md'
                                    onClick={() => setbooks([])}>Remove All</button>
                            </>}
                        {books.length < 1 && <div>No books are added yet</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create_data;

