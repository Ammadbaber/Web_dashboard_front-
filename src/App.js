import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Empedit from './empedit';
import Empcreate from './empcreate'
import Layout from '../src/components/Layout'
import NoPage from './components/no-page';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Signup';
import Detail from './components/Detail';
import User from './components/User';
import Create_data from './components/Create_data';
import Dashboard from './components/Dashboard';
import Tables from './components/Table';
import MyChart from './components/Table';
import  Table  from 'react-bootstrap';

function App() {
  return (
    <div className="App">

                  <Routes>
                    {/*  */}
                    <Route path='/' element={<Home />}>

                    </Route>
                      <Route  element={<Dashboard />}>
                      <Route path='/dashboard' element={<Layout />}/>
                      <Route path="/blogs" element={<Blogs />} />
                      <Route path="/tables" element={<MyChart />} />
                      <Route path="/user" element={<User />} />
                      <Route path="/create-data" element={<Create_data />} />
                      <Route path="*" element={<NoPage />} />
                      <Route path="detail/:id" element={<Detail/>} > </Route>
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* <Route path="/web" element={<Home />} /> */}

                  </Routes>
    </div>
  );
}
export default App;
