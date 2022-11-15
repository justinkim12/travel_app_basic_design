import {BrowserRouter as Router, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faHouse,faUser,faStar,faClapperboard } from '@fortawesome/free-solid-svg-icons'

function Home() {

 return (
  <div>
    <div>
      Bubble
    </div>
    <div>
      <input type="text" placeholder="Drag Bubbles!"/>
      <Link to="/bubble">
      <button><FontAwesomeIcon icon={faSearch} className="search" /></button>
      </Link>
    </div>
    <div>      
      <button ><FontAwesomeIcon icon={faHouse} /></button>
      <button ><FontAwesomeIcon icon={faUser} /></button>
      <button ><FontAwesomeIcon icon={faStar} /></button>
      <button ><FontAwesomeIcon icon={faClapperboard} /></button>

      </div>
  </div>
 );

}
export default Home;