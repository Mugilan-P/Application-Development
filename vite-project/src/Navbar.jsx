import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { cards } from "./Packages";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Normalize query to handle case insensitivity and extra spaces
    const normalizedQuery = query.trim().toLowerCase();
    if (normalizedQuery !== "") {
      const filteredSuggestions = cards.filter((card) =>
        card.name.toLowerCase().includes(normalizedQuery)
      );
      console.log("Search Query:", normalizedQuery); // Log query to verify
      console.log("Filtered Suggestions:", filteredSuggestions); // Log filtered data
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (cardId) => {
    navigate(`/details/${cardId - 1}`);
    setSearchQuery(""); // Clear search query after navigating
    setSuggestions([]); // Clear suggestions after selecting
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/packages?query=${searchQuery}`);
      setSearchQuery(""); // Clear the search query after navigating
      setSuggestions([]); // Clear the suggestions after searching
    }
  };

  return (
    <div>
      <nav
        className="navbar nav-expand-lg bg-light shadow"
        style={{ background: "linear-gradient(90deg, black, gray)" }}
      >
        <ul className="navbar nav w-100">
          <li className="nav-item">
            <Link to="/home" className="nav-link" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/packages"
              className="nav-link"
              style={{ color: "white" }}
            >
              Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/offer" className="nav-link" style={{ color: "white" }}>
              Offer
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactus"
              className="nav-link"
              style={{ color: "white" }}
            >
              ContactUs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link" style={{ color: "white" }}>
              AboutUs
            </Link>
          </li>
          <li className="nav-item ms-auto" style={{ position: "relative" }}>
            <form className="form-inline" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  className="form-control rounded-end"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{ marginLeft: "8px" }}
                  >
                    Search
                  </button>
                </div>
              </div>
              {suggestions.length > 0 && (
                <ul
                  className="suggestions-list"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    listStyleType: "none",
                    padding: "0",
                    margin: "0",
                    border: "1px solid #ddd",
                    width: "100%",
                    zIndex: 1000,
                    maxHeight: "200px",
                    overflowY: "auto",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  {suggestions.map((card) => (
                    <li
                      key={card.id}
                      onClick={() => handleSuggestionClick(card.id)}
                      style={{
                        cursor: "pointer",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                        backgroundColor: "#fff",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f0f0f0")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#fff")
                      }
                    >
                      {card.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </li>
          <li className="nav-item ms-auto" style={{ color: "white" }}>
            <Link to="/map" className="nav-link" style={{ color: "white" }}>
              <FaLocationDot />
            </Link>
          </li>
          <li className="nav-item" style={{ color: "white" }}>
            <Link to="/login" className="nav-link" style={{ color: "white" }}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className="nav-link"
              style={{ color: "white" }}
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-link"
              style={{ color: "white" }}
            >
              My Dashboard
            </Link>
          </li>
          <li className="nav-item ms" style={{ color: "white" }}>
            <Link
              to="/favorite"
              className="nav-link"
              style={{ color: "white" }}
              title="Favourite"
            >
              <FaRegHeart />
            </Link>
          </li>
          <li className="nav-item">
            <b style={{ color: "white", marginRight: ".5rem" }}>
              Travel Horizon
            </b>
            <br />
            <img
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
                marginLeft: "1.6rem",
              }}
              src="https://wallpapercave.com/wp/wp7449411.jpg"
              alt="Job Board Logo"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
