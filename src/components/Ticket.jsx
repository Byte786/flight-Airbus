import { Link } from "react-router-dom";

export default function Tickets({ item }) {
  return (
    <div className="d-flex ticket">
      <div className="airline-name">
        <h3>{item?.airlineName || ""}</h3>
      </div>

      <div className="d-flex">
        <div className="from">
          <h5>{item?.from} </h5>
          <p>
            <strong>{item?.departure?.departureTime}</strong></p>
            <p><strong>{item?.departure?.departureDate}</strong>
          </p>
        </div>
        <div className="d-col">
          <p>{item?.airlineName || ""}</p>
          <p>{item?.duration}</p>
          <p>{item?.via?.length > 0 ? item?.via?.[0] : "non-stop"}</p>
        </div>
        <div className="from">
          <h5>{item?.to} </h5>
          <p>
            <strong>{item?.return?.departureTime}</strong>
          </p>
        </div>
      </div>
   
      <div className="button-p">
        <p>
          <strong>{item?.price}</strong>
        </p>
        <Link to={`/checkout/${item.price}`}>
          <button className="book">Book now</button>
        </Link>
      </div>
    </div>
  );
}
