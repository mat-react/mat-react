import * as React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    hoverItem: {
      color: (theme) => theme.palette?.text?.gray[700],
      '&:hover': {
        color: (theme) => theme.palette?.primary,
        backgroundColor: (theme) => theme.palette?.secondary?.light
      }
    },
  
})

export default useStyles