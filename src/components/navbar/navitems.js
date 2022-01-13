import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faPiggyBank, faMoneyCheck, faReceipt } from '@fortawesome/free-solid-svg-icons'

export const NavItems= [
    {
        title: 'Business Overview',
        url: '/home',
        cName:'nav-links',
        icon: <FontAwesomeIcon icon={faBriefcase} style={{width:"50px",marginRight:"5%", color:"#1976d2"}} />
    },
    {
        title: 'Banking',
        url: '/reports',
        cName:'nav-links',
        icon: <FontAwesomeIcon icon={faPiggyBank} style={{width:"50px", marginRight:"5%", color:"#1976d2"}} />
    },
    {
        title: 'Payroll',
        url: '/inbox',
        cName:'nav-links',
        icon: <FontAwesomeIcon icon={faMoneyCheck} style={{width:"50px", marginRight:"5%", color:"#1976d2"}} />
    },
    {
        title: 'Bookkeeping',
        url: './',
        cName:'nav-links',
        icon: <FontAwesomeIcon icon={faReceipt} style={{width:"50px", marginRight:"5%", color:"#1976d2"}} />
    }
]