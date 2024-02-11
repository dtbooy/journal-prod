// import React from 'react'

import {  useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewEntry = ({ categories, addEntry }) => {
  // Selected category passed through params 
  const params = useParams();
  // Create State to store entry input
  const [entry, setEntry] = useState("");
  // Navigate hook
  const nav = useNavigate()

  // Handle change in form text to create controlled element
  const handleChange = (e) => {
    setEntry(e.target.value);
  };
  // Call on form submit
  const handleSubmit = async(event) => {
    // Prevent form submit from refreshing page
    event.preventDefault();
    // Call addEntry function from App (keeps entries array out of NewEntry component)
    // make function return new entry id
    const id = await addEntry(params.cat_id, entry);
    // Clear form
    setEntry("");
    // redirect to new entry page - TO DO
    nav("/entry/"+ id);
  };

  return (
    // adapt from elements from Bulma code for formatting
    <div className="container">
      <h3>NewEntry in {categories[params.cat_id]?.name}</h3>
      <form className="section" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Entry</label>
          <div className="control">
            <textarea
              onChange={handleChange}
              value={entry}
              className="textarea"
              placeholder="Textarea"
            ></textarea>
          </div>
        </div>
        <div className="control">
          <button className="button is-link" >Create Entry</button>
        </div>
      </form>
    </div>
  );
};

export default NewEntry;
