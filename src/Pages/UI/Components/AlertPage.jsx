import React from 'react';

import { DefaultCard, DefaultCardFooter } from '../../../Components/UI/Cards/Default';
import CodeDisplay from '../../../Components/Code/CodeDisplay';

import Alert from '../../../Components/UI/Alert';
import { KeyOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';


function AlertPage(props) {

    const basic_alert_code = `import Alert from './Components/UI/Alert';

function Basic() {
    return <> 
        <Alert className="mb-2" type="info">
            This is a info alert — check it out!
        </Alert>
        <Alert className="mb-2" type="success">
            This is a success alert — check it out!
        </Alert>
        <Alert className="mb-2" type="warning">
            This is a warning alert — check it out!
        </Alert>
        <Alert className="mb-2" type="danger">
            This is a danger alert — check it out!
        </Alert>
    </>;
}

export default Basic;`

const icon_alert_code = `import Alert from './Components/UI/Alert';
import { KeyOutlined } from '@mui/icons-material';

function AlertIcon() {
    return <> 
        <Alert className="mb-2" type="info">
            Default alert with icon
        </Alert>
        <Alert className="mb-2" showIcon={false} type="success">
            Alert with no icon
        </Alert>
        <Alert className="mb-2" Icon={KeyOutlined} type="danger">
            Alert with custom icon
        </Alert>
    </>;
}

export default Basic;`

const custom_closable_code = `import Alert from './Components/UI/Alert';

function closable() {
    return <> 
        <Alert className="mb-2" closable type="info">
            closable alert, check it out!
        </Alert>
        <Alert className="mb-2" closable action={<button onClick={() => console.log("alert closed")}>Undo</button>} type="success">
            Custom action alert, check it out!
        </Alert>
    </>;
}

export default Basic;`


const title_and_des = `import Alert from './Components/UI/Alert';

function TitleDes() {
    return <> 
        <Alert className="mb-2" title="Information" type="info">
            <div>Additional description and information about anything...</div>
        </Alert>
    </>;
}

export default Basic;`

    return (
        <div>

            <div className='mb-10'>
                <h1 className="text-dark dark:text-white font-bold text-4xl">
                    Alert
                </h1>
                <div className='text-muted-400'>
                    <span>Alerts are used to feedback to the user action or system activity.</span>
                </div>
                {/* <BreadCumb links={[{title: "Dashboard", to: "/"},{title: "UI"}, {title: "Alert"}]} current={"Alert"} /> */}
            </div>
                
            
            <div className='' id='basic_alert'>

                <div className='mb-3'>
                    <h4 className='text-dark dark:text-white text-xl'>
                        Basic Alert
                    </h4>
                    <div className='text-muted-400'><span>Basic usage of alert.</span></div>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4">
                        <Alert className="mb-2" type="info">
                            This is a info alert — check it out!
                        </Alert>
                        <Alert className="mb-2" type="success">
                            This is a success alert — check it out!
                        </Alert>
                        <Alert className="mb-2" type="warning">
                            This is a warning alert — check it out!
                        </Alert>
                        <Alert className="mb-2" type="danger">
                            This is a danger alert — check it out!
                        </Alert>
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{basic_alert_code}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>

            
            <div className='mt-6' id='custom_icon'>

                <div className='mb-3'>
                    <h4 className='text-dark dark:text-white text-xl'>
                        Icon
                    </h4>
                    <div className='text-muted-400'><span>Display icon within alert..</span></div>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4">
                        <Alert className="mb-2" type="info">
                            Default alert with icon
                        </Alert>
                        <Alert className="mb-2" showIcon={false} type="success">
                            Alert with no icon
                        </Alert>
                        <Alert className="mb-2" Icon={KeyOutlined} type="danger">
                            Alert with custom icon
                        </Alert>
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{icon_alert_code}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>

            
            <div className='mt-6' id='closable'>

                <div className='mb-3'>
                    <h4 className='text-dark dark:text-white text-xl'>
                        closable
                    </h4>
                    <div className='text-muted-400'><span>Display icon within alert..</span></div>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4">
                        <Alert className="mb-2" closable type="info">
                            closable alert, check it out!
                        </Alert>
                        <Alert className="mb-2 py-2" closable action={<Button onClick={() => console.log("alert closed")}>Undo</Button>} type="success">
                            Custom action alert, check it out!
                        </Alert>
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{custom_closable_code}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>


            <div className='mt-6' id='title_and_des'>

                <div className='mb-3'>
                    <h4 className='text-dark dark:text-white text-xl'>
                        Title And Description
                    </h4>
                    <div className='text-muted-400'><span>Display icon within alert..</span></div>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4">
                        <Alert className="mb-2" title="Information" type="info">
                            <div>Additional description and information about anything...</div>
                        </Alert>
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{title_and_des}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>

            <div className='mt-10 mb-10' id='alert_api'>

                <div className='mb-3'>
                    <h4 className='text-dark dark:text-white text-xl'>
                        Api
                    </h4>
                </div>


                <div className="relative overflow-x-auto">

                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className="text-xs border-b dark:border-gray-700 text-gray-700 dark:text-white uppercase bg-muted-100 dark:bg-muted-700">
                            <tr className="">
                                <th scope="col" className="px-6 py-4">Prop</th>
                                <th scope="col" className="px-6 py-4">Description</th>
                                <th scope="col" className="px-6 py-4">Type</th>
                                <th scope="col" className="px-6 py-4">Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">title</td>
                                <td className="px-6 py-4">Alert title</td>
                                <td className="px-6 py-4"><code>ReactNode</code> | <code>String</code></td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">showIcon</td>
                                <td className="px-6 py-4">Display icon based on type</td>
                                <td className="px-6 py-4"><code>boolean</code></td>
                                <td className="px-6 py-4"><code>true</code></td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">icon</td>
                                <td className="px-6 py-4">Replace default icon to custom icon</td>
                                <td className="px-6 py-4"><code>ReactNode</code></td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">type</td>
                                <td className="px-6 py-4">The status of the alert</td>
                                <td className="px-6 py-4"><code>'info'</code> | <code>'warning'</code> | <code>'success'</code> | <code>'danger'</code></td>
                                <td className="px-6 py-4"><code>'warning'</code></td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">closable</td>
                                <td className="px-6 py-4">Display close button</td>
                                <td className="px-6 py-4"><code>boolean</code></td>
                                <td className="px-6 py-4"><code>false</code></td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">action</td>
                                <td className="px-6 py-4">Replace default close with custom action node</td>
                                <td className="px-6 py-4"><code>ReactNode</code> | <code>String</code></td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">rounded</td>
                                <td className="px-6 py-4">Whether the Alert have round border radius</td>
                                <td className="px-6 py-4"><code>boolean</code></td>
                                <td className="px-6 py-4"><code>true</code></td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">onClose</td>
                                <td className="px-6 py-4">Callback when Alert is closed</td>
                                <td className="px-6 py-4"><code>function</code></td>
                                <td className="px-6 py-4"><code>true</code></td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">autoHide</td>
                                <td className="px-6 py-4">Interval of dismiss after specific time</td>
                                <td className="px-6 py-4"><code>number</code></td>
                                <td className="px-6 py-4"><code>2000</code></td>
                            </tr>
                            <tr className='bg-transparent border-b dark:border-gray-700 hover:bg-muted-100 dark:hover:bg-gray-500/20'>
                                <td className="px-6 py-4">className</td>
                                <td className="px-6 py-4">css classes to override the styling</td>
                                <td className="px-6 py-4"><code>css class</code></td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

            </div>

        </div>
    );
}

export default AlertPage;
