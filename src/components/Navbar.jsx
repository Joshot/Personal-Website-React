// Import React Stuff
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav id="navbar" className="{ navbar navbar-home navbar-dark navbar-expand-md fixed-top }">
            <div className="{ container-fluid }">
                <Link className="{ navbar-brand }" id="navnav" to="/">Joshua <span>HOT</span>ama</Link>
                <button className="{ navbar-toggler }" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span id="navbarToggler" className="{ navbar-toggler-icon }"></span>
                </button>
                <div className="{ collapse navbar-collapse justify-content-end }" id="navbarNav">
                    <ul className="{ navbar-nav }">
                        <li className="{ nav-item }">
                            <a className="{ nav-link m-2 }" href="#">Home</a>
                        </li>
                        <li className="{ nav-item }">
                            <a className="{ nav-link m-2 }" href="#whatIsSevendays">Experience</a>
                        </li>
                        <li className="{ nav-item }">
                            <a className="{ nav-link m-2 }" href="#howToPlay">How To Play</a>
                        </li>
                        <li className="{ nav-item }">
                            <a className="{ nav-link m-2 }" href="#credits">Credits</a>
                        </li>
                        {/* button */}
                        <button onClick={() => navigate('./')} className="{ m-auto ms-4 }" id="buttonNavbar" type="button">Play</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;
