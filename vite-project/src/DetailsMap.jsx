import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsMap = () => {
  const location = useLocation();
  const { img, description, position, Location, name } =
    location.state.location;
  const navigate = useNavigate();

  return (
    <div className="bg-light">
      <Box
        style={{
          backgroundImage:
            'url("https://wallpapers.com/images/hd/light-blue-2160-x-3840-background-6tahvel26illolhf.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // minHeight: "100vh",
        }}
      >
        <div className="py-6">
          <div className="container px-4">
            <div className="row gx-4">
              <div className="col-md-6">
                <div
                  className="h-64 md:h-80 rounded bg-secondary mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    height: "35rem",
                    marginTop: "50px",
                  }}
                >
                  <span className="display-1">
                    <img
                      src={img}
                      alt={description}
                      style={{
                        width: "100%",
                        height: "35rem",
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <h2 className="mb-2 fw-bold text-secondary display-4">
                  {name}
                </h2>
                <p className="text-muted">
                  <a
                    href="#"
                    className="text-secondary text-decoration-underline"
                  >
                    {Location}
                  </a>
                </p>

                <div className="d-flex align-items-center my-4">
                  <div className="me-4">
                    <div className="d-flex py-2 px-3">
                      <span className="text-secondary me-1 mt-1">✵</span>
                      <span className="fw-bold text-secondary display-3">
                        Review
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        aria-hidden="true"
                        className="bi bi-star-fill text-warning"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443 4.693 9.566.752 6.276l5.164-.754L8 1.173l2.084 4.349 5.164.754-3.94 3.29 1.08 5.877L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-muted">{description}</p>

                <div className="d-flex py-4 justify-content-center justify-content-md-start">
                  <button
                    onClick={() => navigate("/payment")}
                    className="btn btn-secondary text-white fw-semibold"
                  >
                    Book Now
                  </button>
                </div>
                <p>
                  For further details or any queries regarding booking or any
                  other please contact us!
                </p>
                <div>
                  <h1 className="mb-5 h4 fw-bold text-secondary">
                    Contact Details
                  </h1>
                  <div className="row gx-2">
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-person-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 14s-1 0-1-1 1-4 5-4 5 4 5 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                        </span>
                        : Nag
                      </h1>
                    </div>
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-envelope-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm.05 1.555L8 9.745l7.95-4.19A2 2 0 0 0 14 4H2a2 2 0 0 0-1.95 1.555z" />
                          </svg>
                        </span>
                        : sdsdjaosdod@gmail.com
                      </h1>
                    </div>
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-telephone-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 1 1.018-.063l2.18 2.18c.198.198.291.48.244.757l-.547 3.278a.678.678 0 0 1-.738.576L4.295 7.208a11.487 11.487 0 0 0 4.042 4.042l.575-1.516a.678.678 0 0 1 .576-.738l3.278-.547a.678.678 0 0 1 .757.244l2.18 2.18a.678.678 0 0 1-.063 1.018l-2.745 2.745c-.346.346-.83.527-1.32.527a15.567 15.567 0 0 1-11.02-4.567 15.567 15.567 0 0 1-4.567-11.02c0-.49.181-.974.527-1.32L3.654 1.328z" />
                          </svg>
                        </span>
                        : 1234567890
                      </h1>
                    </div>
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-geo-alt-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12 5.318a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm-4 9.025C5.403 11.973 2 8.736 2 5.318 2 2.835 4.24 1 8 1s6 1.835 6 4.318c0 3.418-3.403 6.655-6 9.025z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                          </svg>
                        </span>
                        : xyz street
                      </h1>
                    </div>
                  </div>
                </div>
                {/* <div>
                <h1 className="mt-5 mb-5 h4 fw-bold text-secondary">
                  Product Reviews
                </h1>
                <div className="row">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <span className="ms-3 text-secondary">
                          {rating}
                          <svg
                            aria-hidden="true"
                            className="bi bi-star-fill text-warning ms-1"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443 4.693 9.566.752 6.276l5.164-.754L8 1.173l2.084 4.349 5.164.754-3.94 3.29 1.08 5.877L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}
                <h1 className="mt-5 mb-5 h4 fw-bold text-secondary">FAQs</h1>
                <div>
                  {[
                    {
                      question: "Is this place good?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                    {
                      question: "What is the return policy?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                    {
                      question: "How long does travel take?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                    {
                      question: "Is there any discount?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                  ].map((faq, i) => (
                    <div key={i} className="accordion mb-3" id="faqAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${i}`}
                            aria-expanded="true"
                            aria-controls={`collapse${i}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${i}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default DetailsMap;
