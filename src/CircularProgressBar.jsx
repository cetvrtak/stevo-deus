function CircularProgressBar({ progress, children }) {
  const style = {
    background: `conic-gradient(rgb(0, 86, 254) 0% ${progress}%, rgba(0, 86, 254, 0.1) ${progress}% 100%)`,
  };
  return (
    <div className="circle" style={style}>
      {children}
    </div>
  );
}

export default CircularProgressBar;
