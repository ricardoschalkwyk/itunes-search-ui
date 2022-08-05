import React, { useState } from "react";
import PropTypes from "prop-types";
import { HeartIcon } from "@heroicons/react/outline";

import SearchInput from "./SearchInput";
import SearchItem from "./SearchItem";

function Search({ setSearch, search, favorites, isLoading, setIsLoading }) {
  // This state is used to take the users input from the search input
  const [userInput, setUserInput] = useState("Ali Gatie");

  return (
    <div>
      <h1 className="text-white mb-2 text-lg">What would you like to find?</h1>
      <div className="text-black">
        {/* This component controls and displays your search input */}
        <SearchInput
          setIsLoading={setIsLoading}
          setSearch={setSearch}
          setUserInput={setUserInput}
          userInput={userInput}
        />
      </div>

      <div className="mt-10 text-white text-base">
        {/* Show the headers for the search results */}
        <div className="mb-12">
          {search.result?.length > 0 && (
            <div className="grid grid-cols-9 sticky top-0 bg-[rgb(22,22,22)]">
              <div className="p-3 col-span-2">#</div>
              <div className="p-3 col-span-3">Title</div>
              <div className="p-3 col-span-3">Collection</div>
              <div className="p-3 col-span-1">
                <HeartIcon className="w-7 h-7" />
              </div>
            </div>
          )}

          <div className="rounded-md flex flex-col gap-3">
            {isLoading && <div className="text-3xl">Loading...</div>}
            {/* This loops each result in your GET request for display */}
            {search.result?.length === 0 && (
              <div className="text-3xl text-center">No results found</div>
            )}
            {search.result?.map((result) => (
              // This component controls and displays your search results
              <SearchItem
                key={result.trackId}
                result={result}
                favorites={favorites}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// If you want to bring more props into this component you will have to and the PropType here
Search.propTypes = {
  setSearch: PropTypes.func,
  search: PropTypes.object,
  favorites: PropTypes.array,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
};

export default Search;
