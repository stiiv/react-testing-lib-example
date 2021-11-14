import { Grid } from '@mui/material';
import Counter from './components/Counter';

function App() {
  return (
    <Grid container alignItems="center">
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Counter title="My Counter" />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default App;
