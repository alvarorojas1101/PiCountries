import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateField } from "./validate";
import { createActivity, fetchCountries } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

const FormPage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    activityCountries: [],
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const handleCountryChange = (e) => {
    const { checked, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      activityCountries: checked
        ? [...prevState.activityCountries, value]
        : prevState.activityCountries.filter(
            (countryId) => countryId !== value
          ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const activityData = {
      ...formData,
      countryId: formData.activityCountries,
    };
    dispatch(createActivity(activityData)).then(() => {
      navigate("/home");
    });
  };

  const handleSearch = function (e) {
    const searchTerm = e.target.value.toLowerCase();
    let filteredCountries = [];
    if (searchTerm) {
      filteredCountries = countries.filter(function (country) {
        return country.name.toLowerCase().includes(searchTerm);
      });
    } else {
      filteredCountries = [];
    }
    setFilteredCountries(filteredCountries);
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className={styles.form}>
      <h2>Create Touristic Activity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <input
            type="number"
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
          />
          {formErrors.difficulty && <span>{formErrors.difficulty}</span>}
        </div>
        <div>
          <label htmlFor="duration">Duration (hours):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            min="0"
            required
          />
          {formErrors.duration && <span>{formErrors.duration}</span>}
        </div>
        <div>
          <label htmlFor="season">Season:</label>
          <select
            id="season"
            name="season"
            value={formData.season}
            onChange={handleInputChange}
            required>
            <option value="">Select</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
          {formErrors.season && <span>{formErrors.season}</span>}
        </div>
        <div>
          <label>Search Countries:</label>
          <input type="text" onChange={handleSearch} placeholder="Search..." />
        </div>
        <div>
          {filteredCountries.map((country) => (
            <div key={country.id}>
              <input
                type="checkbox"
                id={`country-${country.id}`}
                name={`country-${country.id}`}
                value={country.id}
                onChange={handleCountryChange}
              />
              <label htmlFor={`country-${country.id}`}>{country.name}</label>
            </div>
          ))}
        </div>
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default FormPage;
