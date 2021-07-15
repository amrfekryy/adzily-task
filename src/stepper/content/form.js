import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 290,
  },
}));


export const Form = ({appStore: {setForm}}) => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.root}
    >
      <TextField
        required
        label="Name"
        variant="outlined"
        size="small"
        onChange={e => setForm((form) => ({...form, name: e.target.value}))}
      />
      <TextField
        required
        type="email"
        label="Email"
        variant="outlined"
        size="small"
        onChange={e => setForm((form) => ({...form, email: e.target.value}))}
      />
      <TextField
        required
        label="Phone"
        variant="outlined"
        size="small"
        onChange={e => setForm((form) => ({...form, phone: e.target.value}))}
      />
    </Grid>
  )
}
