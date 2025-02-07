export default Profile = ({ data, setdata, errors }) => {
  const { name, age, email } = data;

  const handleChange = (e, item) => {
    setdata((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>Name : </label>

        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        ></input>
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        ></input>
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Email : </label>

        <input
          type="text"
          value={email}
          onChange={(e) => handleChange(e, "name")}
        ></input>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};
