import React from "react";
import PropTypes from "prop-types";
import { HeartIcon } from "@heroicons/react/solid";

import Button from "./Buttons/Button";
import Api from "../Api";

function FavoriteItem({ result, refresh, index }) {
  // This function is used to delete a favorite from the Favorites end-point
  const handleDelete = async () => {
    try {
      await Api.delete(`/favorites/delete/${result.id}`);
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Displays the result given from the favorites end-point
    <div className="items-center grid grid-cols-8 gap-y-1 bg-slate-700 hover:bg-slate-500 transition-all duration-300 rounded-md ">
      <div className="px-3 py-2 col-span-1">{index + 1}</div>
      <div data-testid={index + 1} className="px-3 py-2 col-span-3">
        {result.trackName}
      </div>
      <div className="px-3 py-2 col-span-3">{result.artistName}</div>
      <div className="px-3 py-2 col-span-1">
        <Button
          onClick={() => {
            handleDelete();
          }}
        >
          <HeartIcon className="w-5 h-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
}

// If you want to bring more props into this component you will have to add the PropType here
FavoriteItem.propTypes = {
  result: PropTypes.object,
  refresh: PropTypes.func,
  index: PropTypes.number,
};

export default FavoriteItem;
