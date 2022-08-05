import { HeartIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import Api from "../Api";
import FavoriteItem from "../components/FavoriteItem";

// mock prop is passed for testing
function FavoritesPage({ mock = [] }) {
  // This state holds all current favorites
  const [favorites, setFavorites] = useState(mock);

  async function getData() {
    // GETS the newFavorites added to the favorites end-point from the search page
    try {
      const res = await Api.get("/favorites");
      setFavorites(res);
    } catch (error) {
      console.log(error);
    }
  }

  // This useEffect make sure that getData only fires once on render
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mt-10 text-white text-base">
        {/* Displays the Headers for the Favorite results */}
        <div className="mb-12">
          {favorites.length > 0 && (
            <div className="grid grid-cols-8 sticky top-0 bg-[rgb(22,22,22)]">
              <div className="p-3 col-span-1">#</div>
              <div className="p-3 col-span-3">Title</div>
              <div className="p-3 col-span-3">Collection</div>
              <div className="p-3 col-span-1">
                <HeartIcon className="w-7 h-7" />
              </div>
            </div>
          )}

          <div className="rounded-md flex flex-col gap-3">
            {/* This will loops through the current favorites so that it can be displayed */}
            {favorites.length === 0 && (
              <div className="text-3xl text-center">No current favorites</div>
            )}
            {favorites.map((result, index) => (
              <FavoriteItem
                key={result.id}
                index={index}
                result={result}
                refresh={getData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

FavoritesPage.propTypes = {
  mock: PropTypes.array,
};

export default FavoritesPage;
