import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreditCardPaymentPage({ totalAmount }) {
  return (
    <div style={{ backgroundColor: '#87CEEB', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '400px', padding: '24px', borderRadius: '4px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Credit Card Payment
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Amount Payable: ${totalAmount}
        </Typography>
        <TextField fullWidth label="Card Number" variant="outlined" margin="normal" />
        <TextField label="Expiry Date" variant="outlined" fullWidth margin="normal" />
        <TextField label="CVV" variant="outlined" fullWidth margin="normal" />
        <TextField label="Cardholder Name" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>
          Pay Now
        </Button>
      </div>
    </div>
  );
}
