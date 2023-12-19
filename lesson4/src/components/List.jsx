const List = ({ name, isDone }) => {
  console.log(isDone);
  return (
    <div>
      <ul className="list">
        <li>Toshmat - 16.12</li>
        {isDone ? <li>Eshmat - 04.02 ✅</li> : <li>Eshmat - 04.02</li>}
        <li>{!isDone ? name : "not done"}</li>
        <li>Eshmat - 04.01</li>
        <li className={!isDone ? `read` : `delete`}>Eshmat - 04.03</li>
        <li>Eshmat - 04.04</li>
      </ul>
    </div>
  );
};

export default List;
