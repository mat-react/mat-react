import { useState } from 'react';
import { Stack, IconButton, Popover } from '@mui/material';

export default function HeaderPopover(props) { 
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = (ln) => {
        setOpen(null);
    };

    return (
        <>
        <IconButton
            onClick={handleOpen}
            sx={{
                width: 40,
                height: 40,
                bgcolor: (theme) => theme.palette.light,
                borderRadius: "0.475rem"
            }}
        >
            {props.menuOpener}
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
                {props.children}
            </Stack>
        </Popover>
        </>
    );
}
