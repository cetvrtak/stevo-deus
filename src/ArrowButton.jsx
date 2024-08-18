function ArrowButton({ rotation = 0 }) {
  return (
    <div className="arrow-btn-container">
      <img
        src="/arrow-right.svg"
        alt="Arrow Icon"
        className="arrow-btn-icon"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}

export default ArrowButton;
