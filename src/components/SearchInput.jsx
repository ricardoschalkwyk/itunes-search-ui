import React, { useState } from "react";
import PropTypes from "prop-types";
import { SearchIcon } from "@heroicons/react/solid";

import Api from "../Api";

import { mediaTypes } from "../constants";

import Input from "./Form/Input";
import Select from "./Form/Select";
import Button from "./Buttons/Button";

function SearchInput({ setSearch, setUserInput, userInput, setIsLoading }) {
  // This state is used for the selection of a media type
  const [media, setMedia] = useState("all");
  // This state is used for the selection of how many results the user wants
  const [limit, setLimit] = useState("10");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          // Prevents page refresh onSubmit
          e.preventDefault();
          setIsLoading(true);
          setSearch({});
          try {
            // Get input for the search
            const res = await Api.get(
              // This is how the states are applied in the url
              `/search?term=${userInput}&media=${media}&limit=${limit}`
            );
            // set new search Url
            setSearch(res);
            setIsLoading(false);
          } catch (error) {
            alert("Item not found");
          }
        }}
      >
        <div className="flex space-x-3">
          {/* This is a dinamic input comeponent*/}
          <Input
            type="text"
            placeholder="Search"
            value={userInput}
            onChange={(e) => {
              // This will get your input and use it for the search
              setUserInput(e.target.value);
            }}
          />
          {/* This is a dinamic select component */}
          <Select
            name="select"
            id=""
            value={media}
            options={mediaTypes}
            onChange={(e) => {
              // This will get your selection for media types
              setMedia(e.target.value);
            }}
          >
            {/* This map loops through mediaTypes and displays each one from the array */}
            {mediaTypes.map((type, index) => (
              <option key={index} value={type.value}>
                {type.displayName}
              </option>
            ))}
          </Select>

          <Select
            name="select"
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
          >
            {/* This is an array created to display the numbers for the limit of results */}
            {/* If you want more result you just have to change the number in -> {Array.from(Array(***).keys)}*/}
            {Array.from(Array(25).keys()).map((number, index) => (
              <option key={index} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </Select>

          <Button type="submit" className="flex gap-1 items-center">
            {/* Displays a search icon */}
            <SearchIcon className="w-5 h-5 text-white" />
          </Button>
        </div>
      </form>
    </div>
  );
}
// If you want to bring more props into this component you will have to and the PropType here
SearchInput.propTypes = {
  setSearch: PropTypes.func,
  setUserInput: PropTypes.func,
  userInput: PropTypes.string,
  setIsLoading: PropTypes.func,
};

export default SearchInput;
