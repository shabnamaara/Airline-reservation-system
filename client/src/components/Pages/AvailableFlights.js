import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from "./Footer";

function createData(
  flightId,
  maxSeats,
  flightName,
  departure,
  arrival,
  timeOfTravel,
  price
) {
  return {
    flightId,
    maxSeats,
    flightName,
    departure,
    arrival,
    timeOfTravel,
    price,
  };
}

const rows = [
  createData(1, 150, 'Bharat SPJ12S', 'Banglore', 'Hyderabad', '2024-04-27 12:00:00', 100),
  createData(2, 200, 'Bharat ECM91K', 'Banglore', 'Hyderabad', '2024-04-27 15:00:00', 120),
  createData(3, 120, 'Bharat GBH56L', 'Banglore', 'Hyderabad', '2024-04-27 10:30:00', 150),
  // Add more rows as needed
];

export default function BasicTable() {
  const [passengerCount, setPassengerCount] = useState({ adult: 1, child: 0 });
  const [tripType, setTripType] = useState('oneWay');

  const handlePassengerCountChange = (type, value) => {
    setPassengerCount((prevCount) => ({ ...prevCount, [type]: value }));
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const calculatePrice = (price) => {
    let totalPrice = price;
    if (tripType === 'roundTrip') {
      totalPrice *= 2;
      totalPrice *= 0.9; // 10% discount
    }
    const { adult, child } = passengerCount;
    totalPrice = totalPrice * adult + (totalPrice * child) / 2;
    return totalPrice.toFixed(2);
  };

  return (
    <div style={{ backgroundColor: '#e6f7ff', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ backgroundColor: '#004080', color: 'white', padding: '10px', textAlign: 'center' }}>AVAILABLE FLIGHTS</h2> {/* Header with darker color */}
      <Box mb={2}>
        <Typography variant="h6">Select Number of Passengers</Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <Typography variant="body1">Adults:</Typography>
          <IconButton
            onClick={() =>
              handlePassengerCountChange('adult', Math.max(passengerCount.adult - 1, 1))
            }
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1">{passengerCount.adult}</Typography>
          <IconButton onClick={() => handlePassengerCountChange('adult', passengerCount.adult + 1)}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <Typography variant="body1">Children (below 9):</Typography>
          <IconButton
            onClick={() =>
              handlePassengerCountChange('child', Math.max(passengerCount.child - 1, 0))
            }
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1">{passengerCount.child}</Typography>
          <IconButton onClick={() => handlePassengerCountChange('child', passengerCount.child + 1)}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Trip Type</Typography>
        <Button
          variant={tripType === 'oneWay' ? 'contained' : 'outlined'}
          onClick={() => handleTripTypeChange('oneWay')}
          sx={{ mr: 2 }}
        >
          One Way
        </Button>
        <Button
          variant={tripType === 'roundTrip' ? 'contained' : 'outlined'}
          onClick={() => handleTripTypeChange('roundTrip')}
        >
          Round Trip
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flight ID</TableCell>
              <TableCell align="right">Max Seats</TableCell>
              <TableCell align="right">Flight Name</TableCell>
              <TableCell align="right">Departure</TableCell>
              <TableCell align="right">Arrival</TableCell>
              <TableCell align="right">Time of Travel</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.flightId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.flightId}
                </TableCell>
                <TableCell align="right">{row.maxSeats}</TableCell>
                <TableCell align="right">{row.flightName}</TableCell>
                <TableCell align="right">{row.departure}</TableCell>
                <TableCell align="right">{row.arrival}</TableCell>
                <TableCell align="right">{row.timeOfTravel}</TableCell>
                <TableCell align="right">${calculatePrice(row.price)}</TableCell>
                <TableCell align="right">
                  <Link to={`/BookingForm/${row.flightId}`}>Book</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}
