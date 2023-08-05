import React, {useState} from "react";

import CodeHLJS from "./CodeHLJS";

import { Collapse } from "@mui/material";
import { Code, ContentCopy } from "@mui/icons-material";

import { RoundedButton } from "../../@/Components/UI/Button";
import Toast from "../../@/Components/UI/Toast";


function CodeDisplay({ children }) {

  const [open, setOpen] = useState(false)
  const [toast, setToastOpen] = useState(false)


  const toastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastOpen(false);
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    setToastOpen(true);
  }

  return (
    <div>
        <div className='flex align-center justify-end'>
            <RoundedButton onClick={() => copyToClipboard(children)}><ContentCopy className="!w-4 !h-4" /></RoundedButton>
            <RoundedButton onClick={() => setOpen(!open)}><Code className="!w-5 !h-5" /></RoundedButton>
        </div>

        <Toast message="Code copied" open={toast} onClose={toastClose} />
          
        <Collapse in={open}>
            <CodeHLJS>{children}</CodeHLJS>
        </Collapse>

    </div>
  );
}

export default CodeDisplay;
