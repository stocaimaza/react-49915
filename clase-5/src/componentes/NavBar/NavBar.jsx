import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <h1>Tienda Marolio</h1>
        </Link>

        <nav>
            <ul>
                <li>
                    <NavLink to="/categoria/2">Lacteos</NavLink>
                </li>

                <li>
                    <NavLink to="/categoria/3">Almacen</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default NavBar