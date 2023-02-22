import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar (){
    // const username = useSelector((state) => state.username.username)
    return(       
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <Link
                    to={"/beranda"}
                    className="navbar-brand text-white"
                    aria-current="page"
                    role='button2'>
                    Mini Project
                </Link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link
                        to={"/product"}
                        className="nav-link text-white active"
                        role='button1'>
                        Product
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link
                        to={"/"}
                        className="btn btn-danger nav-link text-white active position-relative top-0 start-100"
                        role='button3'>
                        Logout
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default NavBar;





 