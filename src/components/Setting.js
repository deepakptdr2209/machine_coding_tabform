export default Setting = ({ data, setdata }) => {
  const { theme } = data;
  const handleChange = (e) => {
    setdata((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};
