import { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("../../data/db.json")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.countries);
          setCountries(data.countries)
        })
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 40 }}>Countries</h1>
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.id}>
              <h2>{country.name}</h2>
              <img src={country.img} alt={country.name} width={200} />
              <p>{country.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
