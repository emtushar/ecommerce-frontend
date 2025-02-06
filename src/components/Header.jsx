import React, { useState } from "react";
import { ShoppingCart, Search, User, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    console.log("search");
    if (search) {
      console.log(search);
      navigate(`/search/${search}`);
    }
  };
  return (
    <nav className="bg-amber-200 p-3 flex justify-between items-center">
      <Link to={"/"}>
        {" "}
        <div className="flex bg-[#f5f5f5] p-2 lg:px-4  rounded-md">Logo</div>
      </Link>
      <div className=" flex  lg:gap-2 bg-yellow-100  lg:px-2 rounded-md items-center px-1 w-1/2 lg:w-1/3">
        <input
          className=" w-full  focus:outline-none  bg-yellow-100  rounded-md p-1 lg:py-3 lg:px-2"
          type="text"
          placeholder=" Search by category ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="  cursor-pointer p-2 hover:bg-amber-200  rounded-sm"
        >
          <Search />
        </button>
      </div>
      <div className=" flex gap-4 lg:gap-16 pr-2">
        <Link to={"/cart"}>
          <ShoppingCart />
        </Link>
        <Heart />
        <User />
      </div>
    </nav>
  );
}

export default Header;
