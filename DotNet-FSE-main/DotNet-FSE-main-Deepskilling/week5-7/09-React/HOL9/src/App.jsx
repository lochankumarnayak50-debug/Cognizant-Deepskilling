import "./App.css";
import officeImg from "./assets/office.jpg";

function App() {

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: officeImg
    },
    {
      Name: "Infosys",
      Rent: 75000,
      Address: "Bangalore",
      Image: officeImg
    },
    {
      Name: "TCS",
      Rent: 45000,
      Address: "Hyderabad",
      Image: officeImg
    },
    {
      Name: "Wipro",
      Rent: 90000,
      Address: "Pune",
      Image: officeImg
    }
  ];

  return (
    <div className="container">

      <h1>Office Space, at Affordable Range</h1>

      {offices.map((office, index) => (

        <div key={index} className="card">

          <img
            src={office.Image}
            alt="Office Space"
            width="300"
          />

          <h2>Name: {office.Name}</h2>

          <h3
            style={{
              color: office.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {office.Rent}
          </h3>

          <h3>Address: {office.Address}</h3>

        </div>

      ))}

    </div>
  );
}

export default App;