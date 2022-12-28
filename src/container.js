function Container({ time, content, pos, isVisible }) {
  const className = isVisible
    ? "content animate__animated animate__fadeIn"
    : "content animate__animated animate__fadeOut";
  return (
    <div className={pos}>
      <div className={className}>
        <h2>{time}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Container;
