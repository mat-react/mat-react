import React, { useEffect, useRef } from 'react';

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml'; // This is the JSX language

import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/atom-one-dark-reasonable.css'; 

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

function CodeHLJS({ children }) {
  const codeRef = useRef();

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  const style = {
      backgroundColor: "#000f2c"
  }

  return (
    <pre className='rounded-md overflow-hidden mt-2'>
        <code ref={codeRef} className="language-jsx bg:primary-500" style={style}>
            {children}
        </code>
    </pre> 
  );
}

export default CodeHLJS;
