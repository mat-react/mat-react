import React from 'react';
import Chart from "react-apexcharts";
import { MdShoppingCart } from "react-icons/md";

import { DefaultCard } from '../../Components/UI/Cards/Default';
import { Heading } from '../../Components/Typography';

function Ecommerce(props) {

    const DashChart = ({data, color}) => {
        return <Chart
            width={"100%"}
            height={"80px"}
            options = {{
                chart: {
                    id: "basic-bar",
                    toolbar: {
                        show: false
                    }
                },
                yaxis: {
                    show: false
                },
                xaxis: {
                    labels: {
                    show: false,
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                stroke: {
                    show: true,
                    curve: 'monotoneCubic',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2,
                    dashArray: 0,
                },
                legend: {
                    show: false
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                colors: [color]
            }}
            type='line'
            series= {[
                {
                    data: data
                }
            ]}
        />
    }

    return (
        <div className="grid grid-cols-12 gap-6">

            <div className='ptablet:col-span-6 col-span-12 sm:col-span-3'>
                <DefaultCard className='p-6'>
                    <div className='flex items-center justify-between'>
                        <Heading as={"h6"} className='text-gray-400 mb-1'>Sales</Heading>
                        <MdShoppingCart className='text-primary h-7 w-7' />
                    </div>
                    <div className='flex items-center justify-between gap-6 pt-4'>
                        <div className="grow">
                            <span className="text-gray-800 text-xl font-semibold dark:text-gray-300"> 641.4k </span>
                        </div>
                        <div className="grow">
                            <DashChart color={"rgb(0, 178, 123)"} data={[101, 110, 123, 130, 125, 120, 130, 140, 150]}/>
                        </div>
                    </div>
                </DefaultCard>
            </div>

            <div className='ptablet:col-span-6 col-span-12 sm:col-span-3'>
                <DefaultCard className='p-6'>
                    <div className='flex items-center justify-between'>
                        <Heading as={"h6"} className='text-gray-400 mb-1'>Orders</Heading>
                        <MdShoppingCart className='text-purple-500 h-7 w-7' />
                    </div>
                    <div className='flex items-center justify-between gap-6 pt-4'>
                        <div className="grow">
                            <span className="text-gray-800 text-xl font-semibold dark:text-gray-300"> 641.4k </span>
                        </div>
                        <div className="grow">
                            <DashChart color={"rgb(68, 85, 247)"} data={[2342, 2252, 234, 6353, 12135, 2322, 13340, 23423, 12350]}/>
                        </div>
                    </div>
                </DefaultCard>
            </div>

            <div className='ptablet:col-span-6 col-span-12 sm:col-span-3'>
                <DefaultCard className='p-6'>
                    <div className='flex items-center justify-between'>
                        <Heading as={"h6"} className='text-gray-400 mb-1'>Sales</Heading>
                        <MdShoppingCart className='text-red-400 h-7 w-7' />
                    </div>
                    <div className='flex items-center justify-between gap-6 pt-4'>
                        <div className="grow">
                            <span className="text-gray-800 text-xl font-semibold dark:text-gray-300"> 641.4k </span>
                        </div>
                        <div className="grow">
                            <DashChart color={"rgb(248, 113, 113)"} data={[13201, 11230, 123223, 13023, 1252342, 122320, 1230, 23140, 123250]}/>
                        </div>
                    </div>
                </DefaultCard>
            </div>

            <div className='ptablet:col-span-6 col-span-12 sm:col-span-3'>
                <DefaultCard className='p-6'>
                    <div className='flex items-center justify-between'>
                        <Heading as={"h6"} className='text-gray-400 mb-1'>Orders</Heading>
                        <MdShoppingCart className='text-sky-400 h-7 w-7' />
                    </div>
                    <div className='flex items-center justify-between gap-6 pt-4'>
                        <div className="grow">
                            <span className="text-gray-800 text-xl font-semibold dark:text-gray-300"> 641.4k </span>
                        </div>
                        <div className="grow">
                            <DashChart color={"rgb(56, 189, 248)"} data={[13, 123, 312, 1231, 231, 132, 1323, 123, 1232]}/>
                        </div>
                    </div>
                </DefaultCard>
            </div>

        </div>
    );
}

export default Ecommerce;