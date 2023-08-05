import React from 'react';
import { Link } from 'react-router-dom';

import { BarChart, Window, Message, AccountBalance, ChatBubbleOutline, NotificationsNone, Replay, PlayArrow, Visibility } from
'@mui/icons-material';

import {DefaultCard, DefaultCardHeader, DefaultCardText} from '../../../Components/UI/Cards/Default';
import { Heading } from '../../../Components/Typography';
import NotifcationHighlighter from '../../../Components/Animations/NotifcationHighlighter';

import widget_1 from '../../../assets/images/widgets/1.svg'
import under_construction from '../../../assets/images/widgets/under-construction.gif'
import shopping_cart from '../../../assets/images/widgets/empty-shopping-bag.gif'
import gold_level from '../../../assets/images/widgets/gold.png'

import avatar_1 from '../../../assets/images/avatar/user-01.svg'
import avatar_2 from '../../../assets/images/avatar/user-02.svg'
import avatar_3 from '../../../assets/images/avatar/user-03.svg'

import nature_1 from '../../../assets/images/nature/n-02.svg'


function UiWidgets(props) {
return (
<div className="ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4">


    <div className="relative flex flex-col gap-4">

        <DefaultCard>
            <div className="flex w-full items-center justify-between gap-3">
                <button
                    className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
                    <BarChart />
                </button>
                <button
                    className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
                    <Window />
                </button>
                <button
                    className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
                    <Message />
                </button>
                <button
                    className='text-muted-400 hover:bg-primary-500/20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-primary'>
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
                text="You currently have more than 10 unread messages in your inbox. It could be a good time to check them out." />
        </DefaultCard>

        <DefaultCard>
            <div className='px-4 mb-3'>
                <img src={shopping_cart} className='w-full object-cover rounded-xl' alt='widget' />
            </div>
            <DefaultCardText className="text-center" title="Your cart is empty!"
                text="Get back to shopping and get rewards from it." />

            <div className='text-center mt-2'>
                <button
                    className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500">
                    <span>Go for shopping</span>
                </button>
            </div>

        </DefaultCard>

    </div>

    <div className="relative flex flex-col gap-4">
        <DefaultCard>
            <div className='relative mb-3'>
                <img src={widget_1} className='w-full object-cover rounded-xl' alt='widget' />
            </div>
            <DefaultCardText title="You've unlocked 2 new Achievements"
                text="Congrats, your efforts have been rewarded. Keep up like this!" />
        </DefaultCard>


        <DefaultCard>
            <DefaultCardHeader>
                <Heading type={"h3"}>Payment</Heading>
                <NotificationsNone className='text-muted-400' />
            </DefaultCardHeader>
            <DefaultCardText
                text="You have an upcoming payment for your recurring subscription fee due on Sept 20, 2020. Check your billing details." />
        </DefaultCard>

        <DefaultCard>
            <Link className="router-link-active router-link-exact-active group flex w-full gap-4">
                <div className="relative shrink-0">
                    <img src={nature_1} alt="Nature" className="h-24 w-20 object-cover object-top rounded-lg" />
                    <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button className="border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white">
                            <PlayArrow className='icon group-hover:text-primary-500 h-5 w-5 text-white' />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-primary-500 my-1 font-sans text-xs uppercase"> Best Movies </p>
                    <h3 className="font-heading text-sm font-medium leading-tight">
                        <span>The man who didn't want to talk to horses</span>
                    </h3>
                    <div className="text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs">
                        <Visibility className='icon !h-4 !w-4' />
                        <span>9.8K views</span>
                    </div>
                </div>
            </Link>
        </DefaultCard>

    </div>


    <div className="relative flex flex-col gap-4">

        <DefaultCard>
            <DefaultCardHeader>
                <Heading type={"h3"}>Followers</Heading>
                <div className="flex">
                    <div className="-ms-2 bg-white dark:bg-muted-800 duration-100 ease-in flex focus:-ms-2 focus:-ms-4 focus:me-2 h-8 hover:-ms-2 hover:-ms-4 hover:me-2 items-center justify-center relative rounded-full shrink-0 transition-all w-8">
                        <div className='!scale-90 w-8'>
                            <div className="overflow-hidden rounded-full w-full">
                                <img src={avatar_1} alt='avatar' />
                            </div>
                        </div>
                    </div>
                    <div className="-ms-2 bg-white dark:bg-muted-800 duration-100 ease-in flex focus:-ms-2 focus:-ms-4 focus:me-2 h-8 hover:-ms-2 hover:-ms-4 hover:me-2 items-center justify-center relative rounded-full shrink-0 transition-all w-8">
                        <div className='!scale-90 w-8'>
                            <div className="overflow-hidden rounded-full w-full">
                                <img src={avatar_2} alt='avatar' />
                            </div>
                        </div>
                    </div>
                    <div className="-ms-2 bg-white dark:bg-muted-800 duration-100 ease-in flex focus:-ms-2 focus:-ms-4 focus:me-2 h-8 hover:-ms-2 hover:-ms-4 hover:me-2 items-center justify-center relative rounded-full shrink-0 transition-all w-8">
                        <div className='!scale-90 w-8'>
                            <div className="overflow-hidden rounded-full w-full">
                                <img src={avatar_3} alt='avatar' />
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultCardHeader> 

            <div>
                <p className="font-alt text-xs font-normal leading-normal">
                    <span class="text-muted-400"> Great News! <a href="/#" class="router-link-active router-link-exact-active text-primary-500 underline-offset-2 hover:underline">Clarke</a> , <a href="/#" class="router-link-active router-link-exact-active text-primary-500 underline-offset-2 hover:underline">John</a> and <a href="/#" class="router-link-active router-link-exact-active text-primary-500 underline-offset-2 hover:underline">Maggie</a> are now following you. Take some time to look at their profile. </span>
                </p>
            </div>
        </DefaultCard>

        <DefaultCard>
            <div className='px-4 mb-3'>
                <img src={under_construction} className='w-full object-cover rounded-xl' alt='widget' />
            </div>
            <DefaultCardText className="text-center" title="Oops something went wrong!"
                text="Trying again to bypasses these temporary error." />

            <div className='text-center mt-2'>
                <button
                    className="transition-all hover:bg-red-400 dark:hover:bg-red-500 border-red-400 dark:border-red-500 border dark:text-red-500 hover:!text-white text-red-400 font-bold py-2 px-4 rounded inline-flex items-center">
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
                    <img src={gold_level} className='w-full object-cover rounded-xl' alt='widget' />
                </div>
            </div>
            <DefaultCardText className="text-center" title="You reached tol Gold Level!"
                text="Congratulations, Tap to continue next task." />
            <div className='text-center mt-2'>
                <button
                    className="bg-primary-500 bg-opacity-16 border-primary-200 dark:border-primary-700 border hover:bg-opacity-8 text-primary font-bold py-2 px-6 rounded-md">
                    <span>Next</span>
                </button>
            </div>

        </DefaultCard>


        <DefaultCard>
            <div className='grid grid-cols-2 gap-4'>
                <a href="/#"
                    className="dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl rounded-xl">
                    <div className="text-center">
                        <span
                            className="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300">22</span>
                        <p className="text-muted-400 font-sans text-xs font-medium uppercase">Saturday</p>
                    </div>
                </a>
                <a href="/#"
                    className="dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl rounded-xl">
                    <div className="text-center">
                        <span
                            className="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300">23</span>
                        <p className="text-muted-400 font-sans text-xs font-medium uppercase">Sunday</p>
                    </div>
                </a>
                <a href="/#"
                    className="dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl rounded-xl">
                    <div className="text-center">
                        <span
                            className="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300">24</span>
                        <p className="text-muted-400 font-sans text-xs font-medium uppercase">Monday</p>
                    </div>
                </a>
                <a href="/#"
                    className="dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl rounded-xl">
                    <div className="text-center">
                        <span
                            className="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300">25</span>
                        <p className="text-muted-400 font-sans text-xs font-medium uppercase">Tuesday</p>
                    </div>
                </a>
            </div>
        </DefaultCard>

    </div>



</div>
);
}

export default UiWidgets;
