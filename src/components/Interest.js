export default Interest = ({ data, setdata, errors }) => {
  const { interest } = data;
  const handleChange = (e, name) => {
    setdata((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i != e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interest.includes("coding")}
            onChange={handleChange}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cricket"
            checked={interest.includes("cricket")}
            onChange={handleChange}
          />
          cricket
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interest.includes("music")}
            onChange={handleChange}
          />
          music
        </label>
      </div>
      {errors.interest && <span className="error">{errors.interest}</span>}
    </div>
  );
};
