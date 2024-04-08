import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
          &nbsp;
                <Link to="/">Home</Link> | 

                <Link to="/login"> Login</Link> | 

                <Link to="/contact"> Contact</Link> | 

                <Link to="/goal"> Goal </Link> | 

                <Link to="/employees"> Employees </Link> | 

                <Link to="/crud"> Employees CRUD </Link> | 

                <Link to="/customers"> All Customers </Link> | 

                <Link to="/addcustomer"> Add Customer</Link> | 

                <Link to="/doselect"> Do Select</Link> | 




            </nav>
            <Outlet />
        </>
    );
}
export default Layout;