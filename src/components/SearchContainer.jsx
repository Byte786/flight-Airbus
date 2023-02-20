import { useEffect, useId, useState } from "react";
import { URL } from "../const";
import SearchBar from "./Searchbar";
import Tickets from "./Ticket";

export default function SearchContainer() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const getFlights = (from, to) => {
    fetch(`${URL}/flights?from=${from || ""}&to=${to || ""}`)
      .then((data) => data.json())
      .then((dat) => {
        console.log("data", dat);
        dat?.length > 0 ? setError("") : setError("No flights available");
        setData(dat);
      });
  };

  const id = useId();
  return (
    <div>
      <SearchBar getFlights={getFlights} />
      {error && <h2 style={{ textAlign: "center", color:"#DCD6F7", fontWeight: "bold", fontSize: "50px" }}>{error}</h2>}
      <div style={{ height: "700px", overflow: "auto" }}>
        {data?.map((item) => (
          <Tickets key={id} item={item} />
        ))}
      </div>
    </div>
  );
}