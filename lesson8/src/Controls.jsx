
const Controls = ({ hanldeModal }) => {
  return (
    <div className="controls">
      <button>Clear</button>
      <button onClick={hanldeModal}>Add</button>
    </div>
  );
};

export default Controls;
