export  default function Navbar(props){

    return(

<>
  <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
{/* 
                    <Link to="/"  className="nav-link active">Home</Link> */}
                    <a to="/"  className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                    {/* <Link to="/about"  className="nav-link active">About Us</Link> */}
                    <a href="#"  className="nav-link active">About Us</a>
                    </li>
                  </ul>
                </div>
                <div className ="d-flex">
                    <div className = "bg-primary rounded mx-2" style={{height:'20px',width:'20px'}} onClick={()=>{props.panelBtn('primary')}}></div>
                    <div className = "bg-success rounded mx-2" style={{height:'20px',width:'20px'}} onClick={()=>{props.panelBtn('success')}}></div>
                    <div className = "bg-danger rounded mx-2" style={{height:'20px',width:'20px'}} onClick={()=>{props.panelBtn('danger')}}></div>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`} >
                    <input onClick={props.switchmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
    </div>
  </nav>
 
</>
)}