import { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/countries")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch(err => console.log(err))
    }
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 40 }}>Countries</h1>
      <ul>
        {countries &&
          countries.map((country) => {
            return (
              <li key={country.id}>
                <h2>{country.name}</h2>
                <img src={country.img} alt={country.name} width={200}/>
                <p>{country.desc}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Countries;
