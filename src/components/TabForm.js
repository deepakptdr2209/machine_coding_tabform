import Profile from "./Profile";
import Setting from "./Setting";
import Interest from "./Interest";
import { useState } from "react";

export default TabForm = () => {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "john",
    age: "23",
    email: "abc@gmail.com",
    interest: ["cricket", "coding"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tab = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is invalid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is invalid";
        }
        if (!data.email || data.email.length < 4) {
          err.email = "email is invalid";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (!data.interest || data.interest.length < 1) {
          err.interest = "select atleast one option";
        }
        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveComponent = tab[activeTab].component;
  const handleNext = () => {
    if (tab[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (tab[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmit = () => {
    //api call
  };
  return (
    <div>
      <div className="heading-container">
        {tab.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab">
        <ActiveComponent data={data} setdata={setData} errors={error} />
      </div>
      <div className="tab-body">
        <div>{activeTab > 0 && <button onClick={handlePrev}>Prev</button>}</div>
        <div>
          {activeTab < tab.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
        <div>
          {activeTab === tab.length - 1 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};
