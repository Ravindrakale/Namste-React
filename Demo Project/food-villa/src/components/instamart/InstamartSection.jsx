const InstamartSection = ({
  title,
  description,
  isVisible,
  onClickHideShow,
}) => {
  return (
    <div className="instamart-section">
      <div className={`title-section ${isVisible && "title-section-border"}`}>
        <h3>{title}</h3>
        <button onClick={onClickHideShow}>{isVisible ? "hide" : "show"}</button>
      </div>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default InstamartSection;
