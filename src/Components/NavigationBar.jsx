
export default function NavigationBar() {
  return (
    <>
      <div>
        <nav className="container">
          <div className='logo'> 
          
            <img src='/img/Nikelogo.png' alt='Brand Logo'  className='logo'/>
           
          </div>
          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button>Login</button>
        </nav>
      </div>
    </>
  );
}
