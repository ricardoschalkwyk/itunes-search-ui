import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

import Button from "./Buttons/Button";
import Api from "../Api";

function SearchItem({ result, favorites }) {
  // This state is for the display of an icon
  const [icon, setIcon] = useState(false);
  // This state controls your current favorite
  const [favorite, setFavorite] = useState({});

  // This function handles the save of a favorite
  const handleSave = async () => {
    // Creates a newFavorite that is posted to the favoritesPage
    const newFavorite = { ...result };

    // This deletes the id that was made when posting the newFavorite
    delete newFavorite.id;

    setIcon(true);
    try {
      // This will send the newFavorite to the favorites end-point
      const data = await Api.post("/favorites", newFavorite);
      setFavorite(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    // This will make a DELETE reqeust which will remove a favorite
    setIcon(false);
    try {
      await Api.delete(`/favorites/delete/${favorite.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // This useEffect is used to match search results to your current favorites so that the heart icon stays red until it is unfavorited
  useEffect(() => {
    const match = favorites.find(
      (favorite) => favorite.trackId === result.trackId
    );

    if (match) {
      setIcon(true);
      setFavorite(match);
    }
  }, [favorites]);

  return (
    // Displays the search results
    <div className="items-center grid grid-cols-9 gap-y-1 bg-slate-700 hover:bg-slate-500 transition-all duration-300 rounded-md ">
      <div className="px-3 py-2 col-span-1">{result.id}</div>
      <div className="px-3 py-2 col-span-1">
        <img
          className="w-8 h-8 object-cover"
          src={result.image}
          alt={result.trackName}
        />
      </div>
      <div className="px-3 py-2 col-span-3">{result.trackName}</div>
      <div className="px-3 py-2 col-span-3">{result.artistName}</div>
      <div className="px-3 py-2 col-span-1">
        {/* Conditionally changing the icon state depending on which function is used*/}
        <Button
          onClick={() => {
            icon ? handleDelete() : handleSave();
          }}
        >
          {icon ? (
            <HeartIconSolid className="w-5 h-5 text-red-600" />
          ) : (
            <HeartIcon className="w-5 h-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
// If you want to bring more props into this component you will have to and the PropType here
SearchItem.propTypes = {
  result: PropTypes.object,
  favorites: PropTypes.array,
};

export default SearchItem;
