import React from 'react'
import './home.css'
import { Navbar,NavDropdown,Nav,Container } from 'react-bootstrap'
import logo from './dnslogo.png'


function Home() {
  return (
    <div className='maindiv'>
     
     <div className='firstpart'>
     <Navbar  expand="lg">
  <Container>
  <img className='logo' src={logo}/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
      <i class="fas fa-home" ></i>
      <NavDropdown title="COMPANY" id="basic-nav-dropdown" bsPrefix="navb" >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="SERVICES" id="basic-nav-dropdown"  bsPrefix="navb">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
       <div className='links'>
       <Nav.Link href="#home"  bsPrefix="navb">BLOG</Nav.Link>
        <Nav.Link href="#link"  bsPrefix="navb">CAREER</Nav.Link>
        <Nav.Link href="#link"  bsPrefix="navb">CONTACT US</Nav.Link>
       </div>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className='text'>
    <h2>Kubernetes Consulting 
Services</h2>
<p>
Industrial grade containerization solution which is an open-source tool which helps in automating deployment, scaling, and management of containerized applications.
</p>
<button className='know'>Know More</button>
</div>
<div className='boxes'>
    <div className='box' style={{borderBottom:"3px solid #FFA115"}}><p style={{color:"#FFA115"}} className='boxtext'>Kubernetes 
Consulting Services</p></div>
    <div className='box'><p className='boxtext'>aws
Consulting Services</p></div>
    <div className='box'><p className='boxtext'>Dedicated IT 
Team</p></div>
    <div className='box'><p className='boxtext'>Managed 
Services Provider</p></div>
</div>
     </div>
     <div className='middlepart'>

     </div>
     <div className='secondpart'>
         <h3 style={{color:"white",textAlign:"center"}}>What We Do</h3>
         <div className='container'>
           <div className='boxcontainer'>
           <div style={{display:"flex"}}><div className='smallwhitebox'>Mobile Application Development</div><div className='line'></div></div>
           <div style={{display:"flex"}}><div className='smallbox'>Mobile Application Development</div><div className='line'></div></div>
           <div style={{display:"flex"}}><div className='smallbox'>Mobile Application Development</div><div className='line'></div></div>
           <div style={{display:"flex"}}><div className='smallbox'>Mobile Application Development</div><div className='line'></div></div>
           <div style={{display:"flex"}}><div className='smallbox'>Mobile Application Development</div><div className='line'></div></div>

           </div>
          
           
          
         <div className='whitebdr'>
                <div className='whitebox'>
         <img className='settingslogo' src="https://img.icons8.com/ios/50/000000/settings--v1.png"/>

                    <h5 style={{marginTop:"20px"}}>Mobile Application Development</h5>
                    <p className='parag'>DevOps is the practice of operations and development engineers participating together in the entire service lifecycle, from design through the development process to production support. DevOps is not a new concept, but it is still maturing.</p>
                        <button className='read'>READ MORE</button>
                </div>

        
         </div>
         <div className='boxcontainer'>
          

<div style={{display:"flex"}}><div className='line'></div><div className='smallbox'>24/7 Server Monitoring
& Managed Services</div></div>
           <div style={{display:"flex"}}><div className='line'></div><div className='smallbox'>AWS  Cloud Consulting</div></div>
           <div style={{display:"flex"}}><div className='line'></div><div className='smallbox'>Azure 
Cloud Consulting</div></div>
           <div style={{display:"flex"}}><div className='line'></div><div className='smallbox'>DevOps 
Consulting Services</div></div>



           </div>
         
         


         </div>
        
     </div>
    </div>
  )
}

export default Home
