import React, { useState,useEffect} from 'react'
import  { Link,useNavigate,useParams} from 'react-router-dom';

export default function Empedit(){
    const {empid} = useParams();
    const[id,idchange] =useState("");
    const[name,namechange] =useState("");
    const[email,emailchange] =useState("");
    const[phone,phonechange] =useState("");
    const [ countries, setCountries ] = useState([]);
    const navigation = useNavigate();

        useEffect(() => {
            const fetchData = async () => {
              try {
                // Fetch data from the API
                const response = await fetch('https://api.sampleapis.com/countries/countries');
                const data = await response.json();

                // Log the fetched data in the console
                console.log('Fetched data:', data);

                // Use only the first 3 items from the data
                setCountries(data.slice(0, 3));
              } catch (error) {
                console.error('An error occurred while fetching data:', error);
              }
            }

            // Call the fetchData function
            fetchData();
          }, []);

  return (
    <div>
      <div className='row'>
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>React Js Crud Tutorial</h2>

                </div>
                <div className='card-body'>
                <div className='offset-lg-3 col-lg-6'>
                <form >
                    <div className='row' style={{'textAlign':'left'}}>
                    <div className='container'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type='email' value={email} onChange={e=>emailchange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input type='text' value={name} onChange={e=>namechange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Phone Number</label>
                                    <input type='number' value={phone} onChange={e=>phonechange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group' style={{'textAlign':'center'}}>
                                    <button type='submit' className='btn btn-success m-2'>Submit</button>
                                    <Link to="/" className='btn btn-danger'>Back</Link>
                                </div>
                            </div>
                    </div>
                </div>
</form>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
