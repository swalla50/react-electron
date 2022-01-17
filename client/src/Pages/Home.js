import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import NavMenu from '../components/navbar/Navmenu'
import './Home.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {

  const [employees, setEmployees] = React.useState([]);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    DoB: '',
    organization: '',
    organizationType: '',
    profilePhotoFile: '',
    createdAt:''
  })

  useEffect(() => {
    axios.get("http://localhost:5000/users")
            .then((response) => {
              let employeedata = response.data;
              const employee = employeedata.filter(employeedata => employeedata.EmployeeId === 1);
              setEmployees(employee);
                console.log("Response Data: ", employee);
                
            })
            .catch((err) => {
                console.log(err, "Unable to get Messages");
            });
  }, [])
    const [showMenu, setshowMenu] = React.useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        overflow: "hidden",
        width: isOpen ? "25%" : "0px",
        opacity: isOpen ? "100%" : "0%",
        transition: "0.5s"
    };
  
  const users = useSelector((state) => state.users );
  console.log("List of users:", users);


  let menu= <div className='nav-container' style={style}><NavMenu style={style}/></div>
    return (
        <div className="home">
            {menu}
          <div className='canvas-container'>
            <Button onClick={() => setIsOpen(prev => !prev)} className='toggle-btn'>
              <FontAwesomeIcon  icon={faBars} size ='lg'/>
            </Button>
            <Card style ={{width: "100%", height:"100%", background:"#f3f3f3", borderRadius:"30px", boxShadow:"0 25px 15px 0 rgb(0 0 0 / 45%)"}}>
              {employees.map((emp) => (    
                <>
                  <div className='welcome-container'>
                    <h3 className='user-welcome-start'>Welcome&nbsp;</h3><h3 className="user-welcome-banner"> {emp.EmployeeName}</h3>!
                  </div>
                </>
              ))}
            </Card>  
          </div> 
        </div>
    )
}

export default Home
