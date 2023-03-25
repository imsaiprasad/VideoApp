import React from 'react'
import {Link} from 'react-router-dom'
import main from '../../assets/main3.png'

function Header() {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:"100vw"}}>
  <span><img src={main} height={50} style={{marginRight:"6px",}} /></span>
  <Link class="navbar-brand"  to="/" >Indian Masala</Link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <div style={{margin:"0px 100px"}}>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit" style={{backgroundColor:"black"}}>Search</button>
    </form>
    </div>
  </div>

</nav>




    </div>
  )
}

export default Header