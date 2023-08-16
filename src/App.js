import './App.css';
import logo from '../public/logo.svg';

function App() {
  return (
    <>
      <header>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <nav>
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Menu</a></li>
              <li><a>Reservations</a></li>
              <li><a>Order Online</a></li>
              <li><a>Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main></main>
      <footer>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
          </ul>
          <ul>
            <li><a>Address</a></li>
            <li><a>Phone Number</a></li>
            <li><a>Email</a></li>
          </ul>
          <ul>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
            <li><a>Twitter</a></li>
            <li><a>Youtube</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
