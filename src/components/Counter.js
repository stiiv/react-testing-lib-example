import { useState } from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counterInput, setCounterInput] = useState(1);
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
          Counter
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
        />
      </Grid>
      <Grid item xs={12}>
        <Button size="large" variant="contained" data-testid="counter-add-button">
          +
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button size="large" variant="outlined" data-testid="counter-subtract-button">
          -
        </Button>
      </Grid>
    </Grid>
  );
}

export default Counter;
