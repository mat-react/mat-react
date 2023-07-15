import { useState } from 'react';


// redux
import { useDispatch, useSelector } from 'react-redux';


// @mui
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';
import { languageChagner } from '../../Store/actions/appSettings';



const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/flags/ic_flag_en.svg',
  },
  {
    value: 'bn',
    label: 'Bangla',
    icon: '/assets/flags/ic_flag_bn.svg',
  },
  {
    value: 'es',
    label: 'Espanol',
    icon: '/assets/flags/ic_flag_es.svg',
  },
  {
<<<<<<< HEAD
    value: 'de',
    label: 'German',
    icon: '/assets/flags/ic_flag_de.svg',
=======
    value: 'ar',
    label: 'Arabic',
    icon: '/assets/flags/ic_flag_ar.svg',
>>>>>>> new_theme
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/flags/ic_flag_fr.svg',
  },
];



export default function LanguagePopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };



  const lang = useSelector(state => state.app.lang)
  const dispatch = useDispatch();
  const activeLang = LANGS.filter(obj => {
                  return obj.value === lang;
                })


  const handleClose = (ln) => {
<<<<<<< HEAD
    dispatch(languageChagner(ln))
=======
    if(ln){
      dispatch(languageChagner(ln))
    }
>>>>>>> new_theme
    setOpen(null);
  };

  


  return (
    <>
      <IconButton
        onClick={handleOpen}
<<<<<<< HEAD
        sx={{
          width: 40,
          height: 40,
          bgcolor: (theme) => theme.palette.light,
          borderRadius: "0.475rem"
        }}
=======
        className='w-[40px] h-[40px]'
>>>>>>> new_theme
      >
        <img src={activeLang[0] ? activeLang[0].icon : LANGS[0].icon} alt={LANGS[0].label} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
<<<<<<< HEAD
        onClose={handleClose}
=======
        onClose={() => handleClose(false)}
>>>>>>> new_theme
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
<<<<<<< HEAD
            <MenuItem key={option.value} selected={option.value === lang} onClick={() => handleClose(option.value)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

=======
            <MenuItem className='text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark' key={option.value} selected={option.value === lang} onClick={() => handleClose(option.value)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
>>>>>>> new_theme
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
