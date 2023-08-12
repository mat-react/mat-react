import React from 'react';

import CodeDisplay from '../../../Components/Code/CodeDisplay';

import { DefaultCard, DefaultCardFooter } from '../../../Components/UI/Cards/Default';
import Avatar from '../../../Components/UI/Avatar';

import avatar_1 from '../../../assets/images/avatar/user-01.svg'
import avatar_2 from '../../../assets/images/avatar/user-10.svg'
import avatar_3 from '../../../assets/images/avatar/user-03.svg'
import avatar_4 from '../../../assets/images/avatar/user-07.svg'
import avatar_5 from '../../../assets/images/avatar/user-09.svg'
import avatar_6 from '../../../assets/images/avatar/user-06.svg'
import avatar_7 from '../../../assets/images/avatar/user-02.svg'
import avatar_8 from '../../../assets/images/avatar/user-04.svg'

import flag_es from '../../../assets/images/flags/es.svg'
import flag_pt from '../../../assets/images/flags/pt.svg'
import flag_bd from '../../../assets/images/flags/bd.svg'
import flag_ca from '../../../assets/images/flags/ca.svg'
import flag_sa from '../../../assets/images/flags/sa.svg'

function AvatarPage(props) {


    const rounded_avatars_codes = `import Avatar from './Components/UI/Avatar';

// import images
import avatar_1 from './assets/images/avatar/user-01.svg'
import avatar_2 from './assets/images/avatar/user-02.svg'
import avatar_3 from './assets/images/avatar/user-03.svg'
import avatar_4 from './assets/images/avatar/user-04.svg'
import avatar_5 from './assets/images/avatar/user-09.svg'
import avatar_6 from './assets/images/avatar/user-06.svg'
import avatar_7 from './assets/images/avatar/user-10.svg'
import avatar_8 from './assets/images/avatar/user-07.svg'

function RoundedAvatars() {
    <div className="p-4 py-7 flex gap-2 flex-wrap items-center">
                        
        <Avatar src={avatar_1} size='xs' rounded='full' />
        <Avatar src={avatar_2} size='sm' rounded='full' />
        <Avatar src={avatar_3} size='md' rounded='full' />
        <Avatar src={avatar_4} size='lg' rounded='full' />
        <Avatar src={avatar_5} size='xl' rounded='full' />
        <Avatar src={avatar_6} size='2xl' rounded='full' />
        <Avatar src={avatar_7} size='3xl' rounded='full' />
        <Avatar src={avatar_8} size='4xl' rounded='full' />

    </div>

}

export default RoundedAvatars;`


    return (
        <div>
            
            <div className='mb-10'>
                <h1 className="text-dark dark:text-white font-bold text-4xl">
                    Avatar
                </h1>
                <div className='text-muted-400'>
                    {/* <span>Buttons allow users to take actions, and make choices, with a single tap.</span> */}
                </div>
            </div>



            <div className='mb-10' id='buttons_shape'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Circled Avatars
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4 py-7 flex gap-4 flex-wrap items-center">
                        
                        <Avatar src={avatar_1} size='xs' rounded='full' />
                        <Avatar src={avatar_2} size='sm' rounded='full' />
                        <Avatar src={avatar_3} size='md' rounded='full' />
                        <Avatar src={avatar_4} size='lg' rounded='full' />
                        <Avatar src={avatar_5} size='xl' rounded='full' />
                        <Avatar src={avatar_6} size='2xl' rounded='full' />
                        <Avatar src={avatar_7} size='3xl' rounded='full' />
                        <Avatar src={avatar_8} size='4xl' rounded='full' />
                    
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{rounded_avatars_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>

            <div className='mb-10'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Semi Rounded Avatar
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>

                    <div className='rounded-3xl'></div>
                    
                    <div className="p-4 py-7 flex gap-4 flex-wrap items-center">
                        
                        <Avatar src={avatar_1} size='xs' rounded='curved' />
                        <Avatar src={avatar_2} size='sm' rounded='curved' />
                        <Avatar src={avatar_3} size='md' rounded='curved' />
                        <Avatar src={avatar_4} size='lg' rounded='curved' />
                        <Avatar src={avatar_5} size='xl' rounded='curved' />
                        <Avatar src={avatar_6} size='2xl' rounded='curved' />
                        <Avatar src={avatar_7} size='3xl' rounded='curved' />
                        <Avatar src={avatar_8} size='4xl' rounded='curved' />
                    
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{rounded_avatars_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>


            <div className='mb-10'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        Avatar Badge
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>

                    <div className='rounded-3xl h-6'></div>
                    
                    <div className="p-4 py-7 flex gap-4 flex-wrap items-center">
                        
                        <Avatar src={avatar_1} size='xs' badgeSrc={flag_ca} rounded='full' />
                        <Avatar src={avatar_2} size='sm' badgeSrc={flag_es} rounded='full' />
                        <Avatar src={avatar_3} size='md' badgeSrc={flag_bd} rounded='full' />
                        <Avatar src={avatar_4} size='lg' badgeSrc={flag_pt} rounded='full' />
                        <Avatar src={avatar_5} size='xl' badgeSrc={flag_sa} rounded='full' />
                        <Avatar src={avatar_6} size='2xl' badgeSrc={flag_ca} rounded='full' />
                        <Avatar src={avatar_7} size='3xl' badgeSrc={flag_es} rounded='full' />
                        <Avatar src={avatar_8} size='4xl' badgeSrc={flag_bd} rounded='full' />
                    
                    </div>
                    
                    <div className="p-4 py-7 flex gap-4 flex-wrap items-center">
                        
                    <Avatar src={avatar_8} size='4xl' badgeSrc={flag_bd} rounded='curved' />
                        <Avatar src={avatar_7} size='3xl' badgeSrc={flag_es} rounded='curved' />
                        <Avatar src={avatar_6} size='2xl' badgeSrc={flag_ca} rounded='curved' />
                        <Avatar src={avatar_5} size='xl' badgeSrc={flag_sa} rounded='curved' />
                        <Avatar src={avatar_4} size='lg' badgeSrc={flag_pt} rounded='curved' />
                        <Avatar src={avatar_3} size='md' badgeSrc={flag_bd} rounded='curved' />
                        <Avatar src={avatar_2} size='sm' badgeSrc={flag_es} rounded='curved' />
                        <Avatar src={avatar_1} size='xs' badgeSrc={flag_ca} rounded='curved' />
                    
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{rounded_avatars_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>


            <div className='mb-10'>

                <div className='mb-1'>
                    <h4 className='font-heading text-xl font-medium leading-normal text-muted-800 dark:text-white'>
                        SVG Masking
                    </h4>
                </div>

                <DefaultCard className='!p-0 overflow-hidden'>
                    
                    <div className="p-4 py-7 flex gap-4 flex-wrap items-center">
                        
                        <Avatar src={avatar_6} size='xl' mask="hex" />
                        <Avatar src={avatar_3} size='xl' mask="hexed" />
                        <Avatar src={avatar_7} size='xl' mask="deca" />
                        <Avatar src={avatar_4} size='xl' mask="blob" />
                        <Avatar src={avatar_8} size='xl' mask="diamond" />
                    
                    </div>

                    <DefaultCardFooter>
                        <CodeDisplay>{rounded_avatars_codes}</CodeDisplay>
                    </DefaultCardFooter>
                </DefaultCard>

            </div>


        </div>
    );
}

export default AvatarPage;