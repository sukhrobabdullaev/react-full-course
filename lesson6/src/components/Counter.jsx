const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  console.log(count);
  return (
    <div className="flex">
      <h3>{count}</h3>
      <button className="btn" onClick={handleClick}>
        Count
      </button>
    </div>
  );
};

export default Counter;
