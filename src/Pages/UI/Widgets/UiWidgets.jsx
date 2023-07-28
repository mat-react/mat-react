import React from 'react';

import { BarChart, Window, Message, AccountBalance, ChatBubbleOutline, NotificationsNone } from '@mui/icons-material';

import {DefaultCard, DefaultCardHeader, DefaultCardText} from '../../../Components/UI/Cards/Default';
import { Heading } from '../../../Components/Typography';
import NotifcationHighlighter from '../../../Components/Animations/NotifcationHighlighter';

import widget_1 from '../../../assets/images/widgets/1.svg'

function UiWidgets(props) {
    return (
        <div className="ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4">
            
            
            <div className="relative flex flex-col gap-4">

                <DefaultCard>
                    <div className="flex w-full items-center justify-between gap-3">
                        <button className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
                            <BarChart />
                        </button>
                        <button className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
                            <Window />
                        </button>
                        <button className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
                            <Message />
                        </button>
                        <button className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
                            <AccountBalance />
                        </button>
                    </div>
                </DefaultCard>

                <DefaultCard>
                    <DefaultCardHeader>
                        <Heading type={"h3"}>Messages</Heading>
                        <NotifcationHighlighter>
                            <ChatBubbleOutline className='text-muted-400' />
                        </NotifcationHighlighter>
                    </DefaultCardHeader>
                    <DefaultCardText 
                        text="You currently have more than 10 unread messages in your inbox. It could be a good time to check them out." 
                    />
                </DefaultCard>


                <DefaultCard>
                    <DefaultCardHeader>
                        <Heading type={"h3"}>Payment</Heading>
                        <NotificationsNone className='text-muted-400' />
                    </DefaultCardHeader>
                    <DefaultCardText 
                        text="You have an upcoming payment for your recurring subscription fee due on Sept 20, 2020. Check your billing details." 
                    />
                </DefaultCard>

            </div>

            <div className="relative flex flex-col gap-4">
                <DefaultCard>
                    <div className='relative mb-3'>
                        <img src={widget_1} className='w-full object-cover rounded-xl' alt='widget'/>
                    </div>
                    <DefaultCardText 
                        title="You've unlocked 2 new Achievements"
                        text="Congrats, your efforts have been rewarded. Keep up like this!" 
                    />
                </DefaultCard>
            </div>
            
        </div>
    );
}

export default UiWidgets;