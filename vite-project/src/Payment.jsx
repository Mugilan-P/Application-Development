import React, { useState } from "react";
import {
  Divider,
  Typography,
  Box,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
} from "@mui/material";

export default function PaymentComponent() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false); // New state for payment success

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    // Validate input: only numeric and max length of 16
    if (/^\d*$/.test(value) && value.length <= 16) {
      setCardNumber(value);
      setCardError(""); // Clear error if valid input
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would normally handle the payment process, e.g., API call
    // For the purpose of this example, we'll just set the payment as successful
    setPaymentSuccess(true);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        maxWidth: "960px",
        mx: "auto",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Booking Summary Section */}
      <Box
        sx={{
          bgcolor: "background.default",
          borderRadius: 2,
          p: { xs: 3, md: 4 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h5" component="h1" fontWeight="bold">
            Booking Summary
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <img
              src="https://t3.ftcdn.net/jpg/03/33/21/62/360_F_333216210_HjHUw1jjcYdGr3rRtYm3W1DIXAElEFJL.jpg"
              width={40}
              height={40}
              alt="Visa"
            />
            <img
              src="https://wallpaper.forfun.com/fetch/30/3062b457d7072b936cd7f79a86f6c49d.jpeg"
              width={40}
              height={40}
              alt="Mastercard"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1788486625086820352/CLfx1IGe_400x400.jpg"
              width={40}
              height={40}
              alt="rupay"
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gap: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                variant="subtitle1"
                component="h2"
                fontWeight="medium"
              >
                Acme Retreat
              </Typography>
              <Typography color="text.secondary">2 nights</Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="h4" component="p" fontWeight="bold">
                ₹899
              </Typography>
              <Typography color="text.secondary">per night</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography color="text.secondary">Check-in</Typography>
              <Typography fontWeight="medium">June 1, 2023</Typography>
            </Box>
            <Box>
              <Typography color="text.secondary">Check-out</Typography>
              <Typography fontWeight="medium">June 3, 2023</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="text.secondary">Subtotal</Typography>
            <Typography fontWeight="medium">₹1792</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="text.secondary">
              Travel charges & other expenses
            </Typography>
            <Typography fontWeight="medium">₹2792</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="text.secondary">Taxes and fees</Typography>
            <Typography fontWeight="medium">₹199</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="p" fontWeight="bold">
              Total
            </Typography>
            <Typography variant="h4" component="p" fontWeight="bold">
              ₹4,783
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Payment Section */}
      <Box
        sx={{
          bgcolor: "background.default",
          borderRadius: 2,
          p: { xs: 3, md: 4 },
        }}
      >
        <Typography variant="h5" component="h2" fontWeight="bold" mb={2}>
          Payment
        </Typography>

        {/* Conditionally render the success message */}
        {paymentSuccess ? (
          <Alert severity="success">Payment Successful!</Alert>
        ) : (
          <Box
            component="form"
            sx={{ display: "grid", gap: 2 }}
            onSubmit={handlePayment}
          >
            <TextField
              required
              id="card-number"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              fullWidth
              value={cardNumber}
              onChange={handleCardNumberChange}
              error={Boolean(cardError)}
              helperText={cardError || "Enter your 16-digit card number"}
              inputProps={{
                maxLength: 16,
                inputMode: "numeric",
                pattern: "[0-9]{16}",
              }}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                required
                id="expiration-month"
                select
                label="Expiration Month"
                defaultValue=""
                sx={{ flex: 1 }}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <MenuItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="expiration-year"
                select
                label="Expiration Year"
                defaultValue=""
                sx={{ flex: 1 }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <MenuItem key={2023 + i} value={2023 + i}>
                    {2023 + i}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="cvv"
                required
                label="CVV"
                placeholder="123"
                sx={{ flex: 1 }}
                inputProps={{
                  maxLength: 3,
                  inputMode: "numeric",
                  pattern: "[0-9]{3}",
                }}
              />
            </Box>
            <FormControlLabel
              control={<Checkbox id="save-card" />}
              label="Save this card for future payments"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Pay ₹4,783
            </Button>
          </Box>
        )}
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxafhTEsAxaTxYLKU0Ow-muSk_ZFt61EvpbT6SK6OKopvDpsxY3BGm2mknW_5atgzE-A&usqp=CAU"
            width={90}
            height={50}
            alt="Trust Badge"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBU336TrNJQiSejHbbKaaczFoS6I_rFvM9PJ61PRszOrIhy4h2YuYpqoEY9keYQUVp8M&usqp=CAU"
            width={50}
            height={50}
            alt="Security Badge"
          />
          <img
            src="https://wallpapercave.com/wp/wp7449411.jpg"
            width={50}
            height={50}
            alt="Privacy Badge"
            style={{ borderRadius: "50px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
