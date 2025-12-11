import { useState } from "react";

function SearchProd({ onSearch }) {
    const [searchProd, setSearchProd] = useState("");

    const handleChange = (e) => {
        setSearchProd(e.target.value);
        onSearch(e.target.value); // send search text to App
    };

    return (
        <>
            <h2>Search Product</h2>
            <input
                type="text"
                value={searchProd}
                onChange={handleChange}
                placeholder="Enter product name"
            />
        </>
    );
}

export default SearchProd;
