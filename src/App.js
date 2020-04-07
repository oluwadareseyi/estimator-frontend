import React, { useState } from "react";
import "./App.css";
const App = () => {
  const initialState = {
    periodType: "days",
    timeToElapse: "",
    reportedCases: "",
    population: "",
    totalHospitalBeds: "",
  };

  const [form, setForm] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changedHandler = (event, id) => {
    const formCopy = { ...form };
    formCopy[id] = event.target.value;
    setForm(formCopy);
    console.log(formCopy);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="contact1-form validate-form">
        <div className="wrap-input1">
          <label className="label" htmlFor="population">
            Population
          </label>
          <input
            value={form.population}
            onChange={(e) => changedHandler(e, "population")}
            placeholder="Please Enter a value"
            type="number"
            id="population"
            name="population"
            data-population
            className="input1"
          />
        </div>

        <label className="label" htmlFor="data-period-type">
          Choose you preferred period type:
        </label>
        <select
          value={form.periodType}
          onChange={(e) => changedHandler(e, "periodType")}
          id="data-period-type"
          type="text"
          data-period-type
          className="input1"
        >
          <option value="Days">Days</option>
          <option value="Weeks">Weeks</option>
          <option value="Months">Month</option>
        </select>

        <div className="wrap-input1">
          <label className="label" htmlFor="time-to-elapse">
            Time to Elapse
          </label>
          <input
            value={form.timeToElapse}
            onChange={(e) => changedHandler(e, "timeToElapse")}
            id="time-to-elapse"
            type="number"
            placeholder="Please Enter a value"
            name="time-to-elapse"
            data-time-to-elapse
            className="input1"
          />
        </div>

        <div className="wrap-input1">
          <label className="label" htmlFor="reported-cases">
            Reported Cases
          </label>
          <input
            value={form.reportedCases}
            onChange={(e) => changedHandler(e, "reportedCases")}
            id="reported-cases"
            type="number"
            placeholder="Please Enter a value"
            name="reported-cases"
            data-reported-cases
            className="input1"
          />
        </div>

        <div className="wrap-input1">
          <label className="label" htmlFor="total-hospital-beds">
            Total Hospital Beds
          </label>
          <input
            value={form.totalHospitalBeds}
            onChange={(e) => changedHandler(e, "totalHospitalBeds")}
            id="total-hospital-beds"
            type="number"
            placeholder="Please Enter a value"
            name="total-hospital-beds"
            data-total-hospital-beds
            className="input1"
          />
        </div>

        <button className="contact1-form-btn">Submit Data</button>
      </form>
    </div>
  );
};

export default App;
