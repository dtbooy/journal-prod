// import React from "react";
import Home from "./Home";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import ShowEntry from "./ShowEntry";

const App = () => {
  const [categories, setCategories] = useState([]);

  const [entries, setEntries] = useState([]);

  useEffect(
    () => {
      fetch("https://journal-api-8d80.onrender.com/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data))  

        fetch("https://journal-api-8d80.onrender.com/entries")
        .then((res) => res.json())
        .then((data) => setEntries(data))  
    },[]
  );

  async function addEntry(catId, entry) {
    // new post id will be the current length of entries array
    // need to do this here as setEntries is async and will not return updated value
    const newId = entries.length;
    // 1. Create newEntry Object
    const newEntry = {
      category: categories[catId],
      content: entry,

    };
    // POST to API
    try {
    const res = await fetch("https://journal-api-8d80.onrender.com/entries/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
   const data = await res.json()
   // 2. Add new Entry into the Entries list 
   setEntries([...entries, data])
  } catch(err) {
    console.log(err);}
    // return post id (index of new post)
   return newId;
  }
  //Higher Order Component
  function ShowEntryWrapper() {
    const { id } = useParams();
    return <ShowEntry categories={categories} entry={entries[id]} />;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home categories={categories} entries={entries} />}
          />
          <Route
            path="/category"
            element={<CategorySelection categories={categories} />}
          />
          <Route path="/entry">
            <Route path=":id" element={<ShowEntryWrapper />} />
            <Route
              path="new/:cat_id"
              element={<NewEntry addEntry={addEntry} categories={categories}/>}
            />
          </Route>
          <Route path="*" element={<h3> 404: Page not found </h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
