import React from 'react';
import { Pagination } from '@mui/material';
import { fontSize } from '@mui/system';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const Paginati0n = (setPage) => {

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
  const handleChange = (page) => {
    setPage(page)
  }
 
  return <div className='mt-10 flex items-center justify-center text-white'>
    <ThemeProvider>
     <Pagination 
     onChange={(event) => handleChange(event.target.textContent)}
     count={10}
     color="primary"
     style={{ color: 'white', fontSize: '18px' }}
      />
    </ThemeProvider>
  </div>;
};

export default Paginati0n;
