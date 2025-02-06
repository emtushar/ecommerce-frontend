import React from "react";
import { useDispatch } from "react-redux";
import { setSortingDigit } from "../store/slices/appSlice";

function Filter() {
  const dispatch = useDispatch();
  const handleSort = (e) => {
    dispatch(setSortingDigit(Number(e.target.value)));
  };

  return (
    <div className="flex gap-2 p-2 bg-white justify-around items-center">
      <h2>Sort By</h2>
      <select name="" id="" onChange={handleSort}>
        <option value={1}>Latest</option>
        <option value={2}>Price</option>
        <option value={3}>Rating</option>
      </select>
    </div>
  );
}

export default Filter;
