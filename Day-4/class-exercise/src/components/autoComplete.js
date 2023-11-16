import {Autocomplete, Button, TextField, Typography} from '@mui/material';
import { useState } from 'react';

export default function AutoComplete()
{
    const option = ['Apple','Banana','Cherry','Durian','Elderberry'];
    const [form,setForm] = useState({name:null,fruit:null});
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const fruit = event.target[1].value;
        setForm({name,fruit});
    }
    return (
      <>
        <Typography variant="h3">Enter your name favourite fruit:</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            data-testid="name"
            id="IdName"
            variant="standard"
            label="Name"
          />
          <Autocomplete
            style={{ marginTop: '50px' }}
            data-testid="autocomplete"
            disablePortal
            options={option}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Choose a fruit" />
            )}
          />
          <Button
            style={{ marginTop: '50px' }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          {form.name && (
            <Typography variant='h4' style={{marginTop:'30px'}}>
              Hello, {form.name}! Your favorite fruit is {form.fruit}.
            </Typography>
          )}
        </form>
      </>
    )
}