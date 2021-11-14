import { useState } from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';

function Counter({ title }) {
  const [counter, setCounter] = useState(0);
  const [counterInput, setCounterInput] = useState(1);
  const addToCounter = () => {
    setCounter(counter + counterInput);
  };
  const subtractFromCounter = () => {
    setCounter(counter - counterInput);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" data-testid="counter-header">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography data-testid="counter-number" variant="h3">
          {counter}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="number"
          value={counterInput}
          inputProps={{ 'data-testid': 'counter-input' }}
          onChange={(e) => {
            setCounterInput(parseInt(e.target.value) || 1);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          size="large"
          variant="contained"
          data-testid="counter-add-button"
          onClick={addToCounter}>
          +
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          size="large"
          variant="outlined"
          color={`${counter < 0 ? 'error' : ''}`}
          data-testid="counter-subtract-button"
          onClick={subtractFromCounter}>
          -
        </Button>
      </Grid>
    </Grid>
  );
}

export default Counter;
