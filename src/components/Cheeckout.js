import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [pName, setPname] = useState("");
  const [age, setAge] = useState("");
  const [adddress, setAddress] = useState("");
  const [pcode, setPcode] = useState("");
  const [num, setNum] = useState("");
  const [card, setCard] = useState("");
  const [cardnum, setCardnum] = useState("");
  const [edate, setEdate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setErrro] = useState("");
  const [err, setErr] = useState("");

  let charges = 740;
  let { id } = useParams();
  let total = charges + Number(id);
  const isLogin = localStorage.getItem("userlogin");
  if (!isLogin) {
    return <Navigate to="/login" replace={true} />;
  }
  const submit = () => {
    if (
      pName.length == 0 ||
      age.length == 0 ||
      adddress.length == 0 ||
      pcode.length == 0 ||
      num.length == 0 ||
      email.length == 0
    ) {
      setErrro("Please fill the Details");
    } else {
      setErrro("");
      alert("Submitted");
    }
  };
  const pay = () => {
    if (
      card.length == 0 ||
      cardnum.length == 0 ||
      edate.length == 0 ||
      cvv.length == 0
    ) {
      setErr("Please fill the Details");
    } else {
      setErr("");
      alert("Payment Sucessfull! Your ticket is booked");
    }
  };

  return (
    <div>
      <div className="checkout">
        <h2>
          <strong>Fare Summary</strong>
        </h2>

        <div>
          <strong>Base fair - {id}</strong>
        </div>
        <div>
          <strong>fee and surcharges - {charges}</strong>
        </div>
        <div>
          <strong>Total = {total}</strong>
        </div>
      </div>

      <div className="passenger-details">
        <form method="post">
          <h2>
            <strong>Passanger details</strong>
          </h2>
          <div className="inputBox">
            <input
              name="text"
              value={pName}
              onChange={(e) => setPname(e.target.value)}
              type="text"
              placeholder="Passenger name"
              required
            />
          </div>
          <div className="inputBox">
            <input
              name="passengerName"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Passenger age"
              required
            />
          </div>
          <div className="inputBox">
            <input
              name="address"
              type="text"
              value={adddress}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
          </div>
          <div className="inputBox">
            <input
              name="text"
              type="number"
              value={pcode}
              onChange={(e) => setPcode(e.target.value)}
              placeholder="PIN Code"
              required
            />
          </div>
          <div className="inputBox">
            <input
              name="text"
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="Mobile number"
              required
            />
          </div>
          <div className="inputBox">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email-Id"
            />
          </div>
          <h5>{error}</h5>
          <div>
            <button
              className="search-flight"
              onClick={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="checkout-wrapper">
        <form method="post">
          <h2>
            <strong>Payment Method</strong>
          </h2>
          <div className="inputBox">
            <input
              name="cardname"
              type="text"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              placeholder="Name on card"
              required
            />
          </div>
          <div className="inputBox">
            <input
              name="text"
              type="number"
              value={cardnum}
              onChange={(e) => setCardnum(e.target.value)}
              placeholder="Card Number"
              required
            />
          </div>
          <div className="inputBox">
            <label htmlFor="date" style={{ color: "gray" }}>
              Expiry Date
            </label>
            <input
              name="text"
              type="date"
              value={edate}
              onChange={(e) => setEdate(e.target.value)}
              placeholder="Expiry Date (mm/dd/yyyy)"
              required
            />
          </div>
          <div className="inputBox">
            <input
              name="text"
              type="number"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              required
            />
          </div>
          <h5>{err}</h5>
          <div>
          <button
            className="search-flight"
            onClick={(e) => {
              e.preventDefault();
              pay();
            }}
          >
            Pay
          </button></div>
        </form>
      </div>
    </div>
  );
}
