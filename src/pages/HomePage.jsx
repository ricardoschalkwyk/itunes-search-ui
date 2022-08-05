import React, { useEffect, useState } from "react";

import Api from "../Api";

import Search from "../components/Search";

// HomePage holds the Search component and all its children which include display of the search functionality and search results

function HomePage() {
  // This state holds your search input
  const [search, setSearch] = useState({});
  // This state hold your favorited result
  const [favorites, setFavorites] = useState([]);
  // This state is used for loading of search results
  const [isLoading, setIsLoading] = useState(true);

  async function getFavorites() {
    // This function GETS your favorites so that a heart stays red even if you search something else
    try {
      const res = await Api.get("/favorites");
      setFavorites(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function getSearchResults() {
    // This function GETS an initial search value to display how it would look
    try {
      const res = await Api.get("/search?term=Ali%20Gatie&limit=10");
      setSearch(res);
      // Isloading state is changed to false when the results are finished fetching
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // This useEffect makes sure that these functions only fire once on render
    getFavorites();
    getSearchResults();
  }, []);

  return (
    <div className="container mx-auto">
      {/* Search Component */}
      <Search
        setIsLoading={setIsLoading}
        setSearch={setSearch}
        search={search}
        favorites={favorites}
        isLoading={isLoading}
      />
    </div>
  );
}

export default HomePage;
