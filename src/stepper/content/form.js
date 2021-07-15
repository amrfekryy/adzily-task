import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 290,
  },
}));


export const Form = ({appStore: {form: {name, email, phone}, setForm}}) => {
  const classes = useStyles()

  const [validation, setValidation] = useState({name: false, email: false, phone: false})

  useEffect(() => {
    const {name, email, phone} = validation
    if (name && email && phone) setForm((form) => ({...form, isValid: true}))
  }, [validation]);

  const handleChange = e => {
    const {name, value} = e.target
    setForm((form) => ({...form, [name]: value}))
    setValidation({...validation, [name]: Boolean(name)})
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.root}
    >
      <TextField
        name='name'
        label="Name"
        variant="outlined"
        size="small"
        helperText={name? '': 'required'}
        // error={!name}
        onChange={handleChange}
      />
      <TextField
        name='email'
        label="Email"
        variant="outlined"
        size="small"
        helperText={email? '': 'required'}
        // error={!email}
        onChange={handleChange}
      />
      <TextField
        name='phone'
        label="Phone"
        variant="outlined"
        size="small"
        helperText={phone? '': 'required'}
        // error={!phone}
        onChange={handleChange}
      />
    </Grid>
  )
}
