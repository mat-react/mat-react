import React from 'react';

import CodeDisplay from '../../../Components/Code/CodeDisplay';

import { DefaultCard, DefaultCardFooter } from '../../../Components/UI/Cards/Default';
import Button from '../../../Components/UI/Button';
import Dropdown from '../../../Components/UI/Dropdown';

function DropdownPage(props) {


    const buttons_shape_codes = `import Button from './Components/UI/Button';

function ButtonsShape() {
    <div className="p-4 py-7 flex gap-2 flex-wrap">
                        
        <Button>Default</Button>
        <Button shape="none">No Round</Button>
        <Button shape="curved">Curved</Button>
        <Button shape="full">Fully Rounded</Button>

    </div>
}

export default ButtonsShape;`


const solid_button_codes = `import Button from './Components/UI/Button';

function SolidButtons() {
    <div className="p-4 py-7 flex gap-2 flex-wrap">
                        
        <Button> Default </Button>
        <Button color="primary"> Primary </Button>
        <Button color="info"> Info </Button>
        <Button color="success"> Success </Button>
        <Button color="warning"> Warning </Button>
        <Button color="danger"> Danger </Button>
        <Button color="muted"> Muted </Button>

    </div>
}

export default SolidButtons;`


const link_button_codes = `import Button from './Components/UI/Button';

function SolidButtons() {
    <div className="p-4 py-7 flex gap-2 flex-wrap">
                        
        <Button to="#">Button Link</Button>
        <Button to="#" target="_blank" shape='curved'>Link Target</Button>
        <Button to="#" color="primary">Link Button</Button>
        <Button to="https://google.com" rel="" target="_blank" shape='curved'>Button</Button>

    </div>
}

export default SolidButtons;`

    return (
        <div>
            
            <div className='mb-10'>
                <h1 className="text-dark dark:text-white font-bold text-4xl">
                    Dropdown
                </h1>
                <div className='text-muted-400'>
                    <span>Buttons allow users to take actions, and make choices, with a single tap.</span>
                </div>
            </div>



            <div className='mb-10' id='buttons_shape'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Basic Dropdown
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4 py-7 flex gap-2 flex-wrap">
                        
                        <Dropdown />

                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{buttons_shape_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>

                

        </div>
    );
}

export default DropdownPage;