import styles from "./lists.module.css";

const Lists = () => {
  const students = [
    {
      id: 1,
      name: "Sukhrob",
      age: 22,
      gender: "male",
      isMerried: false,
    },
    {
      id: 2,
      name: "Shorxux",
      age: 16,
      gender: "male",
      isMerried: false,
    },
    {
      id: 3,
      name: "Muhammadrizo",
      age: 16,
      gender: "male",
      isMerried: false,
    },
    {
      id: 4,
      name: "Durdona",
      age: 15,
      gender: "female",
      isMerried: false,
    },
  ];
  const products = [
    {
      id: 1,
      img: "./vite.svg",
      title: "Noutebok....",
      rating: 4.8,
      price: 292200,
      priceDelete: 499700,
    },
  ];
  return (
    <div>
      <ul className={styles.lists}>
        {students.map((el) => {
          return (
            <li key={el.id} className={styles.student}>
              <p>Name: {el.name}</p>
              <p>Age: {el.age}</p>
              <p>IsMerried: {el.isMerried}</p>
              <p>Gender: {el.gender}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
