import { useState, useEffect } from "react";

import customerService from "../service/CustomerService";

function DisplayAllCustomers() {

    const [allCustomers, setAllCustomers] = useState(
        [{
            "customerId": "",
            "customerName": "",
            "customerPassword": "",
            "mobileNumber": "",
            "emailId": "",
            "regDate": ""
        }]
    );

    const [updateCustomer, setUpdateCutomer] = useState({
        "customerId": "",
        "customerName": "",
        "customerPassword": "",
        "mobileNumber": "",
        "emailId": "",
        "regDate": ""
    });
    const [isUpdate, setIsUpdate] = useState(false);

    const [msg, setMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");


    useEffect(() => {
        //Runs only on the first render
        loadCustomerData();
    }, []);

    const loadCustomerData = () => {
        customerService.getAllCustomers()
            .then(
                (response) => {
                    console.log(response.data);
                    setAllCustomers(response.data);
                }
            )// call back for success response code
            .catch(
                (error) => {
                    console.log(error)
                }
            ) // call back for error response code

    }
    const handleDelete = (id) => {
        console.log("Delete:" + id);
        if (window.confirm("Are you sure to Delete Customer?"))
            customerService.deleteCustomerById(id)
                .then(
                    (r) => {
                        console.log(r.data);
                        loadCustomerData();// after successful customer delte, load all customer data from back end 
                        setMsg("Customer deleted.");
                        setErrMsg("");
                    }
                )
                .catch(
                    (err) => {
                        console.log(err.message);
                        setErrMsg("Customerr could not be deleted.");
                        setMsg("");
                    }
                );
    };

    const handleUpdate = (updateCustomer) => {
        console.log("handleUpdate");
        console.log(updateCustomer);
        setIsUpdate(true);
        setUpdateCutomer(updateCustomer);// assign to updateCustome state

    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Update Submit");
        console.log(updateCustomer);

        customerService.updateCutomer(updateCustomer)
            .then(
                (r) => {
                    console.log(r.data);
                    setMsg("Customer Updated .");
                    setErrMsg("");
                    loadCustomerData();// after successful customer update, load all customer data from back end 
                    setIsUpdate(false);


                }
            )
            .catch(
                (e) => {
                    console.log(e);
                    setErrMsg("Failed to update customer . " + e.message);
                    setMsg("");
                }
            )
    }

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setUpdateCutomer((oldValue) => ({ ...oldValue, [name]: value }));

    }

    const handleCancel = () => {
        setIsUpdate(false);
    }

    const updateCustomerElement = (
        <>
            <h3>Update customer</h3>
            <form onSubmit={handleUpdateSubmit}>

                customerName:<br />
                <input type="text" name="customerName" value={updateCustomer.customerName} onChange={(event) => handleChange(event)} placeholder="Your customerName" ></input><br />
                mobileNumber:<br />
                <input type="text" name="mobileNumber" value={updateCustomer.mobileNumber} onChange={(event) => handleChange(event)} placeholder=" mobileNumber" ></input><br />
                emailId:<br />
                <input type="text" name="emailId" value={updateCustomer.emailId} onChange={(event) => handleChange(event)} placeholder=" emailId" ></input><br />
                regDate:<br />
                <input type="date" name="regDate" value={updateCustomer.regDate} onChange={(event) => handleChange(event)} placeholder=" regDate" disabled></input><br />
                <br />
                <input type="submit"></input>
                <input type="button" onClick={handleCancel} value="Cancel"></input>
            </form>

        </>
    );

    const allCustomersElement = (
        <>
            <h3>Display all Customers.</h3>
            {msg && <h3 className="alert alert-success">{msg}</h3>}
            {errMsg && <h3 className="alert alert-danger">{errMsg}</h3>}

            {allCustomers.length == 0 && <h6>No customer registered to display...</h6>}
            {allCustomers.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th> email</th>
                            <th> Mobile</th>
                            <th> Reg date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCustomers.map(
                                (cust) => {
                                    return (
                                        <tr key={cust.customerId}>
                                            <td>{cust.customerName}</td>
                                            <td>{cust.emailId}</td>
                                            <td>{cust.mobileNumber}</td>
                                            <td>{cust.regDate}</td>
                                            <td> <input type="button" onClick={() => handleUpdate(cust)} className="btn btn-info" value="Update"></input></td>

                                            <td> <input type="button" onClick={() => handleDelete(cust.customerId)} className="btn btn-danger" value="delete"></input></td>

                                        </tr>);
                                }
                            )
                        }

                    </tbody>
                </table>
            }

        </>
    );


    return (
        isUpdate ? updateCustomerElement : allCustomersElement
    );


}
export default DisplayAllCustomers;