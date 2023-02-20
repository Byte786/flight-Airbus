import { useEffect, useId, useState } from "react";
import { URL } from "../const";
import Tickets from "./Ticket";
export default function Home() {
  const [data, setData] = useState([]);
  const getFlights = () => {
    fetch(`${URL}/flights`)
      .then((data) => data.json())
      .then((data) => setData(data));
  };
  console.log(data);
  useEffect(() => {
    getFlights();
  }, []);
  const id = useId();
  return (
    <div>
      <div>
        <h4 className="available"><strong>Available Flights</strong></h4>
        <div style={{ height: "700px" }}>
          {data?.map((item) => (
            <Tickets key={id} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}