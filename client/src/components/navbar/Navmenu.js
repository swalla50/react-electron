import React from 'react'
import Card from '@mui/material/Card';
import {NavItems} from './navitems'
import './Navmenu.css'

function Navmenu() {


    return (
        <div  className="nav-card">
            {NavItems.map((item,index) => {
                return(
                    <li className='nav-list'key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.icon}{item.title}
                                </a>
                    </li>
                )
            })}
        </div> 
    )
}

export default Navmenu
