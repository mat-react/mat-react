import React from 'react';

import { Heading } from '../../Components/Typography';
import { BsXDiamondFill } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";
import { LuRocket } from "react-icons/lu";
import { GiCommercialAirplane } from "react-icons/gi";
import { SiFampay } from "react-icons/si";


const Analytics = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>


                <div className='col-span-12 md:col-span-3'>
                    <div className='mat-card mat-card-rounded mat-card-white p-4'>

                        <div className='mb-1 flex w-full items-center justify-between'>
                            <Heading as="h5">Transactions</Heading>
                            <div className='bg-success-100 dark:bg-success-500/20 dark:border-2 dark:border-success-600 dark:text-success-500 mat-box-full mat-box-xs mat-icon-box text-success-600'>
                                <BsXDiamondFill />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <Heading as="h4" className={"text-3xl"}><span>42,234</span></Heading>
                        </div>

                        <div className='text-success-500 flex items-center gap-1 font-sans text-sm'>
                            <span>+4.23%</span>
                            <TfiStatsUp />
                            <span className='text-muted-400 text-xs'>this month</span>
                        </div>

                    </div>
                </div>

                <div className='col-span-12 md:col-span-3'>
                    <div className='mat-card mat-card-rounded mat-card-white p-4'>

                        <div className='mb-1 flex w-full items-center justify-between'>
                            <Heading as="h5">Orders</Heading>
                            <div className='mat-icon-box mat-box-full mat-box-xs bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400'>
                                <LuRocket />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <Heading as="h4" className={"text-3xl"}><span>423</span></Heading>
                        </div>

                        <div className='text-danger-500 flex items-center gap-1 font-sans text-sm'>
                            <span>+4.23%</span>
                            <TfiStatsDown />
                            <span className='text-muted-400 text-xs'>this month</span>
                        </div>

                    </div>
                </div>
                

                <div className='col-span-12 md:col-span-3'>
                    <div className='mat-card mat-card-rounded mat-card-white p-4'>

                        <div className='mb-1 flex w-full items-center justify-between'>
                            <Heading as="h5">Referals</Heading>
                            <div className='mat-icon-box mat-box-full mat-box-xs bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2'>
                                <GiCommercialAirplane />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <Heading as="h4" className={"text-3xl"}><span>862</span></Heading>
                        </div>

                        <div className='text-success-500 flex items-center gap-1 font-sans text-sm'>
                            <span>+4.23%</span>
                            <TfiStatsUp />
                            <span className='text-muted-400 text-xs'>going up</span>
                        </div>

                    </div>
                </div>


                <div className='col-span-12 md:col-span-3'>
                    <div className='mat-card mat-card-rounded mat-card-white p-4'>

                        <div className='mb-1 flex w-full items-center justify-between'>
                            <Heading as="h5">Subscriptions</Heading>
                            <div className='mat-icon-box mat-box-full mat-box-xs bg-violet-100 text-violet-500 dark:bg-violet-500/20 dark:text-violet-400 dark:border-violet-500 dark:border-2'>
                                <SiFampay />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <Heading as="h4" className={"text-3xl"}><span>86,222</span></Heading>
                        </div>

                        <div className='text-success-500 flex items-center gap-1 font-sans text-sm'>
                            <span>+4.23%</span>
                            <TfiStatsUp />
                            <span className='text-muted-400 text-xs'>going up</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Analytics;
