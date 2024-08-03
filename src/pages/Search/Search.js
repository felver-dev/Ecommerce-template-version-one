import React from "react";
import { SearchProducts, Breadcrumb } from "../../components";

const Search = () => {
  return (
    <div className="body-wrapper space-pt--70 space-pb--120">
      <Breadcrumb pageTitle="Search Results" prevUrl="/home" />
      {/* search products */}
      <SearchProducts limit="20" />
    </div>
  );
};

export default Search;
