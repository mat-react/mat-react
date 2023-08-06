import React from 'react';

import CodeDisplay from '../../../Components/Code/CodeDisplay';

import { DefaultCard, DefaultCardFooter } from '../../../Components/UI/Cards/Default';
import Button from '../../../Components/UI/Button';

function ButtonPage(props) {


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
                    Button
                </h1>
                <div className='text-muted-400'>
                    <span>Buttons allow users to take actions, and make choices, with a single tap.</span>
                </div>
            </div>



            <div className='mb-10' id='buttons_shape'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Button's shapes
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4 py-7 flex gap-2 flex-wrap">
                        
                        <Button>Default</Button>
                        <Button shape="straight">No Round</Button>
                        <Button shape="curved">Curved</Button>
                        <Button shape="full">Fully Rounded</Button>
                    
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{buttons_shape_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>


            <div className='mb-8' id='color_buttons'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Solid Buttons
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4 py-7 flex gap-2 flex-wrap">
                        
                        <Button>Default</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="info">Info</Button>
                        <Button color="success">Success</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="danger">Danger</Button>
                        <Button color="muted">Muted</Button>
                    
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{solid_button_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>


            <div className='mb-8' id='color_buttons'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Button Links
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4 py-7 flex gap-2 flex-wrap">
                        
                        <Button to="#">Button Link</Button>
                        <Button to="#" target="_blank" shape='curved'>Link Target</Button>
                        <Button to="#" color="primary">Link Button</Button>
                        <Button to="https://google.com" rel="" target="_blank" shape='curved'>Button</Button>
                    
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{link_button_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>

            <div className='mb-8' id='color_buttons'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Buttons Size
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className='p-4 py-2 pt-6 '>
                        <h4 className='text-md text-muted-800 dark:text-white mb-1'>
                            Small Button
                        </h4>
                        <div className="flex gap-2 flex-wrap">
                            <Button size="sm">Button</Button>
                            <Button size="sm" color="primary">Button</Button>
                        </div>
                    </div>
                    
                    <div className='p-4 py-2'>
                        <h4 className='text-md text-muted-800 dark:text-white mb-1'>
                            Medium Button
                        </h4>
                        <div className="flex gap-2 flex-wrap">
                            <Button>Button</Button>
                            <Button color="primary">Button</Button>
                        </div>
                    </div>
                    
                    <div className='p-4 py-2'>
                        <h4 className='text-md text-muted-800 dark:text-white mb-1'>
                            Large Button
                        </h4>
                        <div className="flex gap-2 flex-wrap">
                            <Button size="xl">Button</Button>
                            <Button size="xl" color="primary">Button</Button>
                        </div>
                    </div>

                    
                    <div className='p-4 py-2 pb-6'>
                        <h4 className='text-md text-muted-800 dark:text-white mb-1'>
                            Extra Large Button
                        </h4>
                        <div className="flex gap-2 flex-wrap">
                            <Button size="xxl">Button</Button>
                            <Button size="xxl" color="primary">Button</Button>
                        </div>
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{link_button_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>
                

        </div>
    );
}

export default ButtonPage;