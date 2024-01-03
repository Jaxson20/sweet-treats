import './style.scss';
import Christmas from '../../assets/images/christmas/Christmas.png';
import { Link }  from 'react-router-dom'

export default function Home() {
  return (
     <div id="home-page">
      <h1>Home</h1>
      <div>
      <Link to="/Christmas">
      <img className="Christams-logo" src={Christmas} alt="Christmas"/> 
      </Link>
      </div>
    </div>
  );
};

