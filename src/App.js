import Customer from "./demo-components/Customer";
import Destructuring from "./demo-components/Destructuring";
import Employees from "./demo-components/Employees";
import Footer from "./demo-components/Footer";
import Fruits from "./demo-components/Fruits";
import Header from "./demo-components/Header";

import Products from "./demo-components/Products";
import Resume from "./demo-components/Resume";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login"
import Goal from "./game/Goal";
import EmployeesCRUD from "./CRUD/EmployeesCRUD";
import DisplayAllCustomers from "./components/DisplayAllCustomers";
import AddCustomer from "./components/AddCustomer";
import DoselectApp from "./Doselect/DoselectApp";

const demoElement = (
  <>
    <Header></Header>
    <Customer></Customer>
    <Employees></Employees>
    <Login></Login>
    <Resume></Resume>
    <Products></Products>
    <Fruits></Fruits>
    <Destructuring></Destructuring>
    <Footer></Footer>
  </>


);

const empList = [
  {
    "id": "1",
    "name": "AA",
    "email": "aa@gmail.com"
  },
  {
    "id": "2",
    "name": "BB",
    "email": "bb@gmail.com"
  },
  {
    "id": "3",
    "name": "CC",
    "email": "cc@gmail.com"
  }
];
const noEmpList = [];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
            <Route path="goal" element={<Goal isGoal={false} />} />
            <Route path="employees" element={<Employees data={empList} />} />

            <Route path="customers" element={<DisplayAllCustomers />} />

            <Route path="addcustomer" element={<AddCustomer />} />

            <Route path="crud" element={<EmployeesCRUD/>} />

            <Route path="doselect" element={<DoselectApp/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
