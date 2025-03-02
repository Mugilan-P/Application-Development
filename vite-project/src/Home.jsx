import { useState } from "react";
import styled from "styled-components";
import Destinations from "./Destination";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
// import HeroImage from "../assets/hero.png";
// import Button from "./Button";
export default function Home() {
  const [value, setValue] = useState("$500 - $10,000");
  const navigate = useNavigate();

  return (
    <div>
      <Section>
        <div className="background">
          <img src="https://wallpaperaccess.com/full/7281.jpg" alt="Hero" />
        </div>
        <div className="content">
          <div className="info">
            <h1 style={{ color: "orange" }}>It's Time To</h1>
            <h1 style={{ color: "green" }}>Explore The World</h1>
            <button
              className="btn btn-warning"
              style={{ color: "black", fontWeight: "bold" }}
              onClick={() => navigate("/packages")}
            >
              Plan Your Trip
            </button>
          </div>
          <div className="planner">
            <form>
              <div className="row">
                <label>Destinations</label>
                <select>
                  <option>Egypt</option>
                  <option>Japan</option>
                  <option>United States</option>
                  <option>Australia</option>
                  <option>UAE</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="row">
                <label>Check In</label>
                <input type="date" />
              </div>
              <div className="row">
                <label>Price Range</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="row">
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/packages")}
                >
                  Discover More
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      <br />
      <br />
      <br />
      <br />
      <Destinations />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

const Section = styled.section`
  margin-top: 2rem;
  position: relative;
  .background {
    img {
      height: 90vh;
      width: 100%;
    }
  }
  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 5rem;
        margin-bottom: 2rem;
      }
    }
    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
          input:focus {
            outline: none;
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
