import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UpiIdTransactionPage({ totalAmount }) {
  return (
    <div style={{ backgroundColor: '#87CEEB', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '400px', padding: '24px', borderRadius: '4px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          UPI ID Transaction
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Amount Payable: ${totalAmount}
        </Typography>
        <TextField label="UPI ID" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>
          Proceed to Pay
        </Button>
      </div>
    </div>
  );
}
