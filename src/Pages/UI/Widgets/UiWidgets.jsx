import React from 'react';

import { BarChart, Window, Message, AccountBalance, ChatBubbleOutline, NotificationsNone, Replay } from '@mui/icons-material';

import {DefaultCard, DefaultCardHeader, DefaultCardText} from '../../../Components/UI/Cards/Default';
import { Heading } from '../../../Components/Typography';
import NotifcationHighlighter from '../../../Components/Animations/NotifcationHighlighter';

import widget_1 from '../../../assets/images/widgets/1.svg'
import under_construction from '../../../assets/images/widgets/under-construction.gif'
import shopping_cart from '../../../assets/images/widgets/empty-shopping-bag.gif'
import gold_level from '../../../assets/images/widgets/gold.png'

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

                <DefaultCard>
                    <div className='px-4 mb-3'>
                        <img src={shopping_cart} className='w-full object-cover rounded-xl' alt='widget'/>
                    </div>
                    <DefaultCardText 
                        className="text-center"
                        title="Your cart is empty!"
                        text="Get back to shopping and get rewards from it." 
                    />

                    <div className='text-center mt-2'>
                        <button className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500">
                            <span>Go for shopping</span>
                        </button>
                    </div>

                </DefaultCard>
            </div>


            <div className="relative flex flex-col gap-4">
                <DefaultCard>
                    <div className='px-4 mb-3'>
                        <img src={under_construction} className='w-full object-cover rounded-xl' alt='widget'/>
                    </div>
                    <DefaultCardText 
                        className="text-center"
                        title="Oops something went wrong!"
                        text="Trying again to bypasses these temporary error." 
                    />

                    <div className='text-center mt-2'>
                        <button className="transition-all hover:bg-red-400 dark:hover:bg-red-500 border-red-400 dark:border-red-500 border dark:text-red-500 hover:!text-white text-red-400 font-bold py-2 px-4 rounded inline-flex items-center">
                            <span>Retry</span>
                            <Replay className="fill-current w-4 h-4 ml-2" />
                        </button>
                    </div>

                </DefaultCard>
            </div>
            

            <div className="relative flex flex-col gap-4">
                <DefaultCard>
                    <div className='mb-3'>
                        <p className='text-muted text-center pb-1'>LEVEL UP</p>
                        <div className='px-4 max-w-[80%] mx-auto'>
                            <img src={gold_level} className='w-full object-cover rounded-xl' alt='widget'/>
                        </div>
                    </div>
                    <DefaultCardText 
                        className="text-center"
                        title="You reached tol Gold Level!"
                        text="Congratulations, Tap to continue next task." 
                    />
                    <div className='text-center mt-2'>
                        <button className="bg-primary-500 bg-opacity-16 border-primary-200 dark:border-primary-700 border hover:bg-opacity-8 text-primary font-bold py-2 px-6 rounded-md">
                            <span>Next</span>
                        </button>
                    </div>

                </DefaultCard>
            </div>


            
        </div>
    );
}

export default UiWidgets;