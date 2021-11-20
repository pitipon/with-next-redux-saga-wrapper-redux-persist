import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="metamania-nav">
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light">

                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Search for anything" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Home</a>
                                        </Link>
                                    </li>



                                    <li className="nav-item">
                                        <Link href="/courses" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Courses</a>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link href="/become-a-teacher" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Instructor</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About</a>
                                        </Link>
                                    </li>

                                </ul>

                                <div className="others-option d-flex align-items-center">


                                    <div className="option-item">
                                        <Link href="/profile-authentication">
                                            <a className="default-btn">
                                                <i className="flaticon-user"></i> Login/Register <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
