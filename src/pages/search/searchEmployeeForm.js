import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import Button from '@mui/material/Button';


export const SearchEmployeeForm = () =>{

    const languages = [
        {
          value: 'C++',
          label: 'C++',
        },
        {
          value: 'Java',
          label: 'Java',
        },
        {
          value: 'JS',
          label: 'JS',
        },
        {
          value: 'REACT',
          label: 'REACT',
        },
        {
            value: 'Python',
            label: 'Python',
        },
        {
            value: 'SQL',
            label: 'SQL',
        },
      ];



    const [language, setLanguage] = useState();

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return(
        <form style={{
            padding:10,
            display:"block"
        }}>
            <div>
            <TextField id="standard-basic" label="Imię" variant="standard"/>
            </div>
            <br></br>
            <div>
            <TextField id="standard-basic" label="Nazwisko" variant="standard" />
            </div>
            <br></br>

            <div>
            <TextField
                id="standard-select-currency"
                select
                label="Język"
                value={language}
                onChange={handleChange}
                helperText="Wybierz język programowania"
                variant="standard"
        >
          {languages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          
            </div>
            <br></br>
            <Button key="search" variant="contained" aria-label="outlined primary button">
              Wyszukaj
            </Button>
        </form>
    );
}