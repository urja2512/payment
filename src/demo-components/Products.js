function Products() {
    const myProductTable = (
        <>
            <div className="alert alert-success">
                <strong>Success!</strong> Indicates a successful or positive action.
            </div>

            <table className="table table-bordered table-striped" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>John@gmail.com</td>
                        <td>5555555</td>
                    </tr>
                    <tr>
                        <td>Elsa</td>
                        <td>Elsa@gamil.com</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                        <td>Elsa</td>
                        <td>Elsa@gamil.com</td>
                        <td>66666666</td>
                    </tr>
                </tbody>

            </table>
        </>
    );


    return (myProductTable);
}
export default Products;