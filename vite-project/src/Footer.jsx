import React from "react";
import styled from "styled-components";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];
  const topPlaces = ["Paris", "London", "Mandrid", "Gingee", "Dubai"];
  return (
    <Container style={{ backgroundColor: "#FFBF00" }}>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>
            <p
              className="desciption"
              style={{ marginTop: "15px", paddingLeft: "20px" }}
            >
              You dream, We create, design, and build the most wonderful
              Experience.
            </p>
          </div>
          <ul>
            <li>
              <span> +0213 456 987 </span>
            </li>
            <li>
              <span>nihal2813669@gmail.com</span>
            </li>
            <li>
              <span>www.youtube.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 style={{ marginTop: "15px" }}>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2 style={{ marginTop: "15px" }}>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2 style={{ marginTop: "15px" }}>Top Places</h2>
          <ul>
            {topPlaces.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; Travel Horizon <a href="#"></a>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  .upper-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 2rem;
    gap: 5rem;
    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--secondary-text);
      h2 {
        color: black;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 1rem 2rem;
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
          background-color: #f8f8f8;
        }
      }
    }
  }
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .upper-footer {
      grid-template-columns: 1fr;
    }
  }
`;
