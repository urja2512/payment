import { useState } from "react";
import customerService from "../service/CustomerService";

function AddCustomer() {

    const [newCustomer, setNewCustomer] = useState(
        {
            "customerName": "",
            "customerPassword": "",
            "mobileNumber": "",
            "emailId": "",
            "regDate": ""
        }
    );

    const [msg, setMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");


    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setNewCustomer((oldValue) => ({ ...oldValue, [name]: value }));

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Submit");
        console.log(newCustomer);

        customerService.addCustomer(newCustomer)
            .then(
                (r) => {
                    console.log(r.data);
                    setMsg("Customer Added .");
                    setErrMsg("");

                }
            )
            .catch(
                (e) => { 
                    console.log(e);
                setErrMsg("Failed to add customer . " + e.message);
                setMsg("");
                }
            )
    }

    const customerElement = (
        <>
        {msg && <h3 className="alert alert-success">{msg}</h3>}
        {errMsg && <h3 className = "alert alert-danger">{errMsg}</h3>}

            <form onSubmit={handleSubmit}>


                <input type="text" name="customerName" value={newCustomer.customerName} onChange={(event) => handleChange(event)} placeholder="Your customerName" ></input><br />
                <input type="text" name="customerPassword" value={newCustomer.customerPassword} onChange={(event) => handleChange(event)} placeholder=" customerPassword" ></input><br />
                <input type="text" name="mobileNumber" value={newCustomer.mobileNumber} onChange={(event) => handleChange(event)} placeholder=" mobileNumber" ></input><br />
                <input type="text" name="emailId" value={newCustomer.emailId} onChange={(event) => handleChange(event)} placeholder=" emailId" ></input><br />
                <input type="date" name="regDate" value={newCustomer.regDate} onChange={(event) => handleChange(event)} placeholder=" regDate" ></input><br />

                <input type="submit"></input>
            </form>
        </>
    );

    return (
        customerElement

    );

}
export default AddCustomer;