import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import Button from '@mui/material/Button';

import * as React from 'react';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

export const SearchProjectForm = () =>{

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
      const [value, setValue] = React.useState([null, null]);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return(
        <form style={{
            padding:10,
            display:"block",
            width: "100%"
        }}>
            <div>
            <TextField id="standard-basic" label="Nazwa projektu" variant="standard"/>
            </div>
            <br></br>
            <div>
            <TextField id="standard-basic" label="Klient" variant="standard" />
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


        <br></br>
        <br></br>
        <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Data od"
        endText="Data do"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
    </div>
        {/* https://mui.com/components/date-range-picker/ -> kalendarz zakresu */}
            </div>
            <br></br>
            <Button key="search" variant="contained" aria-label="outlined primary button">
              Wyszukaj
            </Button>
        </form>
    );
}