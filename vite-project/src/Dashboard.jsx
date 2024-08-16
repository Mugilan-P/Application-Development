import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "sonner";

function Dashboard() {
  const [register, setRegister] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const photo = localStorage.getItem("profilePhoto");
    if (user && user.id) {
      setRegister(user);
      if (photo) {
        setProfilePhoto(photo);
      }
    } else {
      navigate("/login"); // Redirect to login if no user data is found
    }
  }, [navigate]);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profilePhoto", reader.result);
      setProfilePhoto(reader.result);
      setShowModal(false);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    localStorage.removeItem("profilePhoto");
    setProfilePhoto(null);
    setShowModal(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-sm-2 col-lg-1 d-sm-block bg-light sidebar"
          style={{
            background: "linear-gradient(90deg, black, gray)",
          }}
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column" style={{ alignItems: "center" }}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  onClick={() => navigate("/home")}
                >
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/offer")}
                >
                  <b>Offer</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/packages")}
                >
                  <b>Packages</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/login")}
                >
                  <b>Login</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/register")}
                >
                  <b>Register</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/favorite")}
                >
                  <b>Favourite</b>
                </a>
              </li>
              <li className="nav-item" style={{ marginTop: "40rem" }}>
                <a className="nav-link" href="#">
                  <b style={{ color: "white", marginLeft: "0.7rem" }}>Travel</b>
                  <br />
                  <b style={{ color: "white", marginLeft: "0.7rem" }}>
                    Horizon
                  </b>
                  <br />
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50px",
                      marginLeft: "0.7rem",
                    }}
                    src="https://wallpapercave.com/wp/wp7449411.jpg"
                    alt="Job Board Logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main
          className="col-md-10 ms-sm-auto col-lg-11 px-md-4"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/736x/14/bf/22/14bf2235c032f793074894144e24285d.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "90vh",
          }}
        >
          {register ? (
            <div
              className="card mt-4"
              style={{
                backgroundImage:
                  'url("https://wallpaperbat.com/img/603674-white-wallpaper-hd.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "900px", // Fixed width
                margin: "auto", // Center the card
                borderRadius: "8px", // Optional: rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: shadow effect
              }}
            >
              <div className="card-header bg-primary text-white text-center">
                <h3>My Profile</h3>
              </div>
              <div className="card-body">
                <div className="text-center mb-4">
                  {profilePhoto ? (
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="img-thumbnail"
                      style={{
                        width: "140px", // Profile photo size
                        height: "140px", // Profile photo size
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowModal(true)}
                    />
                  ) : (
                    <div
                      className="img-thumbnail"
                      style={{
                        width: "140px", // Profile photo size
                        height: "140px", // Profile photo size
                        lineHeight: "140px",
                        textAlign: "center",
                        background: "#f8f9fa",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowModal(true)}
                    >
                      No Photo
                    </div>
                  )}
                </div>
                <p>
                  <strong>First Name:</strong> {register.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {register.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {register.email}
                </p>
                <p>
                  <strong>Total Bookings:</strong> 5
                </p>
                <p>
                  <strong>Cashback available:</strong> 9%
                </p>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("profilePhoto");
                    navigate("/login");
                    toast.error("Logout successfully");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <h1 className="mt-5 mb-5 h4 fw-bold text-secondary">FAQs by you</h1>
          <div>
            {[
              {
                question: "Is taj mahal best to visit?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
              },
              {
                question: "Did you offer foreign tours in afordable prize?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
              },
              {
                question: "How long does travel takes for gingee?",
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
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profile Photo</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Profile" className="img-fluid" />
                ) : (
                  <p>No photo uploaded</p>
                )}
              </div>
              <div className="modal-footer">
                {profilePhoto ? (
                  <button
                    className="btn btn-danger"
                    onClick={handleRemovePhoto}
                  >
                    Remove Photo
                  </button>
                ) : (
                  <>
                    <input
                      type="file"
                      id="fileInput"
                      className="d-none"
                      onChange={handlePhotoUpload}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      Upload Photo
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
