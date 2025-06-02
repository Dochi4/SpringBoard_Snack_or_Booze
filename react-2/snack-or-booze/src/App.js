import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./Menu";
import Item from "./Item";
import NewItem from "./NewItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      const [snacks, drinks] = await Promise.all([
        SnackOrBoozeApi.getItem({ treat: "snacks" }),
        SnackOrBoozeApi.getItem({ treat: "drinks" }),
      ]);

      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }

    getItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home treats={snacks} />} />

            {/* SNACKS */}
            <Route
              path="/snacks"
              element={
                <Menu treats={snacks} treatType="snacks" title="Snacks" />
              }
            />
            <Route
              path="/snacks/new"
              element={
                <NewItem
                  itemList={snacks}
                  treatType="snacks"
                  title="NewSnacks"
                />
              }
            />
            <Route
              path="/snacks/:id"
              element={<Item items={snacks} cantFind="/snacks" />}
            />

            {/* DRINKS */}
            <Route
              path="/drinks"
              element={
                <Menu treats={drinks} treatType="drinks" title="Drinks" />
              }
            />
            <Route
              path="/drinks/new"
              element={
                <NewItem
                  itemList={drinks}
                  treatType="drinks"
                  title="NewDrinks"
                />
              }
            />
            <Route
              path="/drinks/:id"
              element={<Item items={drinks} cantFind="/drinks" />}
            />

            {/* Catch-all route */}
            <Route
              path="*"
              element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
