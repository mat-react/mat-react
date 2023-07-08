import { useState } from 'react';


// redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../Store/actions/appSettings';


// @mui
import { MenuItem, Stack, IconButton, Popover } from '@mui/material';
import {WbSunny, DarkMode, Monitor} from '@mui/icons-material/';
import { IconDeviceDesktop, IconMoon, IconSunHigh } from '@tabler/icons-react';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';


export default function ModeToggler() { 
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const dispatch = useDispatch();
    const handleClose = (ln) => {
        setOpen(null);
    };

  
    // dark mode enabling / getting by from redux store
    const darkMode = useSelector(state => state.app.darkMode);
    const appMode = useSelector(state => state.app.appMode);

    const theme = useTheme()

    const StackItem = styled(MenuItem)({
        color: theme.palette.text.gray[700],
        "&:hover": {
            color: theme.palette.primary,
            background: theme.palette.secondary.primary
        }
    })

    return (
        <>
        <IconButton
            onClick={handleOpen}
            sx={{
                width: 40,
                height: 40,
                bgcolor: (theme) => theme.palette.light,
                borderRadius: "0.475rem",
                color:(theme) => theme.palette.text.primary
            }}
        >
            {
                darkMode ? <DarkMode /> : <WbSunny />
            }
        </IconButton>

        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
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
                <StackItem
                    onClick={() => dispatch(toggleDarkMode('l'))} 
                    selected={appMode === "l"}
                >
                    <Stack 
                        direction={"row"} 
                        spacing={0.75} alignItems={"center"} 
                    >
                        <IconSunHigh />
                        <span> Light</span>
                    </Stack>
                </StackItem>
                <StackItem onClick={() => dispatch(toggleDarkMode('d'))} selected={appMode === "d"}>
                    <Stack direction={"row"} spacing={0.75} alignItems={"center"} >
                        <IconMoon />
                        <span> Dark</span>
                    </Stack>
                </StackItem>
                <StackItem onClick={() => dispatch(toggleDarkMode('df'))} selected={appMode === "df"}>
                    <Stack direction={"row"} spacing={0.75} alignItems={"center"} >
                        <IconDeviceDesktop />
                        <span> System</span>
                    </Stack>
                </StackItem>
            </Stack>
        </Popover>
        </>
    );
}
