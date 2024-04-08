import React, { useState } from "react";


function SearchComponent(obj) {
    // Write your code here

    // Write your code here
    const [flights, setFlights] = useState(obj.flightsData);
    const [foundFlights, setFoundFlights] = useState([{}]);

    const [fromFlight, setFromFlight] = useState("");
    const [toFlight, setToFlight] = useState("");
    const [isFound, setIsFound] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fromFlight + ":" + toFlight);
        console.log(flights);
        let filterFlights = flights.filter((flight) => flight.departure_from === fromFlight);
        filterFlights = filterFlights.filter((flight) => flight.arrival_at === toFlight);
        console.log(filterFlights);
        setFoundFlights(filterFlights);
        if (filterFlights.length > 0)
            setIsFound(true);
        else
            setIsFound(false);

    };

    const searchElement = (

        <form onSubmit={handleSubmit}>
            <input type="text" value={fromFlight} onChange={(e) => setFromFlight(e.target.value)} />
            <input type="text" value={toFlight} onChange={(e) => setToFlight(e.target.value)} />
            <input type="submit" />

        </form>
    );
    const foundFlightsElement = (
        <table>
            <thead>
                <tr>
                    <th>Departure</th>
                    <th>Duration</th>
                    <th>Arrival</th>
                    <th>Price</th>
                </tr>

            </thead>
            <tbody data-testid="flights">
                {foundFlights.map(
                    (flight) => {
                        return (<tr key={flight.id}>
                            <td>{flight.takeoff_timestamp}</td>
                            <td>{flight.duration}</td>
                            <td>{flight.landing_timestamp}</td>
                            <td>{flight.flight_ticket_price}</td>
                        </tr>)
                    })}


            </tbody >

        </table>
    );

    return (
        <div>
            {searchElement}

            {
                isFound ? foundFlightsElement : <div data-testid="no-flights">No flights found</div>

            }


        </div>
    );
}

export default SearchComponent
