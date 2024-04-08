const SearchEmployees = ()=>{

    const [empList,setEmplList] = useState([
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
    ]);
 

    const handleSearch = ()=>{

    };

    const myEmpList = (
        <>
        <input type="text" value={searchText} onChange={(e)=>{handleSearch}} placeholder="Search Employees..."/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empList.map(
                            (emp,index) => {

                                return (
                                    <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                    </tr>
                                );

                            }


                        )

                    }

                </tbody>
            </table>
        </>
    );
    return (
        <>
            {myEmpList}
        </>
    );
};
export default SearchEmployees;