import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, faSignOutAlt, faHome } from  '@fortawesome/free-solid-svg-icons'



const Header = (props) => {


    return (
   <div>
   <nav class="navbar navbar-expand-lg bg-light borderBottom header-background fixed" >
        <a class="navbar-brand answers-brand nav-links" href="/fakelink" >{props.appName}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto" >
            <li><h5 className = 'button-text'>{props.user}</h5></li>
            <li class="nav-item dropdown">
                <a class="nav-link nav-links dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faUser}/>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                {/* <Link class="dropdown-item" Link to="/login"><FontAwesomeIcon icon= {faUser}/>{props.user}</Link>
                <Link class="dropdown-item" Link to="/"><FontAwesomeIcon icon={faCog}/> Edit Customers</Link> */}
                <a class="dropdown-item"  href='#' ><FontAwesomeIcon icon={faSignOutAlt}/>Logout</a>
                </div>
            </li>
            </ul>
        </div>
        </nav>
        </div>

    )
}

export default Header