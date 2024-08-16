import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/post",
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("Your response has been saved");
        setName("");
        setEmail("");
        setMessage("");
        navigate("/contactus");
      })
      .catch((error) => {
        toast.error("There was an error saving your response");
      });
  };

  return (
    <div>
      <Box
        style={{
          backgroundImage:
            'url("https://e0.pxfuel.com/wallpapers/564/919/desktop-wallpaper-blue-and-white-background-23-background-1024%C3%97768-in-2020-blue-and-white-blue-background-blue-white-background-1024x768-blue.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // minHeight: "100vh",
        }}
      >
        <br />
        <p style={{ textAlign: "center" }}>
          <h5>
            If you have any doubts regarding booking or regarding our website,
            please contact us.
            <br />
            If you see any issues in booking places, you can contact us anytime,
            <br />
            and we will help you and fix your problems.
          </h5>
        </p>
        <p style={{ textAlign: "center" }}>
          <h5>
            If you encounter any of our guides cheating, <br />
            inform us, and we will not leak your information.
          </h5>
        </p>
        <p style={{ textAlign: "center" }}>
          <h5>
            To contact us, just fill out the details in the form below
            <br />
            and submit it.
          </h5>
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <h6>
            <h5>Email: travelhorizon@gmail.com</h5>
            <br />
            <h5>Contact Info: 9042117381, 9361095126, 8825690200</h5>
            <br />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
            />
            <div className="container">
              <h2>Follow Us On</h2>
              <div className="social d-flex justify-content-center  gap-2">
                <a
                  href="#"
                  id="share-fb"
                  className="sharer btn btn-sm btn-dark"
                >
                  <i className="fa fa-2x fa-facebook"></i>
                </a>
                <a
                  href="#"
                  id="share-tw"
                  className="sharer btn btn-sm btn-dark"
                >
                  <i className="fa fa-2x fa-twitter"></i>
                </a>
                <a
                  href="#"
                  id="share-li"
                  className="sharer btn btn-sm btn-dark"
                >
                  <i className="fa fa-2x fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  id="share-gp"
                  className="sharer btn btn-sm btn-dark"
                >
                  <i className="fa fa-2x fa-google-plus"></i>
                </a>
                <a
                  href="#"
                  id="share-em"
                  className="sharer btn btn-sm btn-dark"
                >
                  <i className="fa fa-2x fa-envelope"></i>
                </a>
              </div>
            </div>
          </h6>
        </p>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 600,
              mx: "auto",
              p: 2,
              border: "2px solid #000000",
              borderRadius: "12px",
              boxShadow: 1,
            }}
          >
            <Typography variant="h4" align="center" mb={2}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                fullWidth
                type="submit"
                sx={{
                  mt: 2,
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#111",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
