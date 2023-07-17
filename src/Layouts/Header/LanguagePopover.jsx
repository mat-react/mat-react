import { useState } from 'react';


// redux
import { useDispatch, useSelector } from 'react-redux';


// @mui
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';
import { languageChagner } from '../../Store/actions/appSettings';



const LANGS = [
  {
    value: 'en',
    dir: "ltr",
    label: 'English',
    icon: '/assets/flags/ic_flag_en.svg',
  },
  {
    value: 'bn',
    label: 'Bangla',
    dir: "ltr",
    icon: '/assets/flags/ic_flag_bn.svg',
  },
  {
    value: 'es',
    label: 'Espanol',
    dir: "ltr",
    icon: '/assets/flags/ic_flag_es.svg',
  },
  {
    value: 'ar',
    label: 'Arabic',
    dir: "rtl",
    icon: '/assets/flags/ic_flag_ar.svg',
  },
  {
    value: 'fr',
    label: 'French',
    dir: "ltr",
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


  const handleClose = (ln, dir) => {
    if(ln){
      dispatch(languageChagner({ln, dir}))
    }
    setOpen(null);
  };


  console.log(lang);
  


  return (
    <>
      <IconButton
        onClick={handleOpen}
        className='w-[40px] h-[40px]'
      >
        <img src={activeLang[0] ? activeLang[0].icon : LANGS[0].icon} alt={LANGS[0].label} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={() => handleClose(false)}
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
            <MenuItem className='text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark' key={option.value} selected={option.value === lang} onClick={() => handleClose(option.value, option.dir)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
