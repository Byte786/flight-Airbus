import { useState } from "react";

export default function SearchBar({ getFlights }) {
  const [frominput, setFromInput] = useState("");
  const [departInput, setdepartInput] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  return (
    <div className="searchBar_div">
      <div className="availFlight">
        <h4>Search Flights</h4>
        <div className="search_div">
          <div>
            <label className="search" for="from">From</label>
            <input
              type="text"
              name="from"
              onChange={(e) => setFromInput(e?.target.value)}
              id="from"
            />
          </div>
          <div>
            <label className="search" for="to">To</label>
            <input type="text" name="to" id="from" onChange={(e) => setdepartInput(e?.target.value)}/>
          </div>
          <div>
            <label className="search" for="Depart">Depart</label>
            <input type="date" name="Depart" id="Depart" />
          </div>
          <div>
            <label className="search" for="return">Return</label>
            <input type="date" name="return" id="from" />
          </div>
          <div>
            <button className="search-flight"
              name="from"
              id="from"
              onClick={() => getFlights(frominput, departInput)}
            >
              Search Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
