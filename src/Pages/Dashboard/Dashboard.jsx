import React from 'react';

<<<<<<< HEAD
function Dashboard(props) {
    return (
        <div>
            Main Dashboard
=======
import BreadCumb from '../../Components/UI/BreadCumb/BreadCumb';

import user01 from '../../assets/images/avatar/user-01.svg'
import user02 from '../../assets/images/avatar/user-02.svg'
import n01 from '../../assets/images/nature/n-01.svg'

function Dashboard(props) {
    return (
        <div>

            <div>
                <h1 className="text-dark dark:text-white font-bold text-xl">
                    Dashboard
                </h1>
                <BreadCumb links={[{title: "Dashboard", to: "/"}, {title: "Main"}]} current={"Main"} />
            </div>
                

            <div className='mt-10'>
                Main Dashboard
            </div>

            <div className='mt-10 container'>
                <div className="grid grid-cols-5 gap-6">

                    <div className='border-muted-200 col-span-2 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl p-6'>
                        <div className='mb-8 flex items-center justify-between'>
                            <h3 className='font-heading text-base font-semibold leading-tight text-muted-800 dark:text-white'>
                                <span>Trending Languages</span>
                            </h3>
                            <button className='bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-primary bg:text-primary-400 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300'>
                                View all
                            </button>
                        </div>
                        <div className='mb-2 space-y-5'>
                            <div className='flex items-center gap-3'>
                                <div className='border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 221">
                                        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
                                        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
                                        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className='font-heading text-sm font-light leading-tight text-muted-800 dark:text-white'>
                                        <span>Vue JS</span>
                                    </h4>
                                    <p className="font-alt tet-xs font-normal leading-normal">
                                        Used by 149 candidates
                                    </p>
                                </div>
                                <div className='ms-auto flex items-center'>
                                    <button className='disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5 rtl:rotate-180" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 221">
                                        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
                                        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
                                        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className='font-heading text-sm font-light leading-tight text-muted-800 dark:text-white'>
                                        <span>Vue JS</span>
                                    </h4>
                                    <p className="font-alt tet-xs font-normal leading-normal">
                                        Used by 149 candidates
                                    </p>
                                </div>
                                <div className='ms-auto flex items-center'>
                                    <button className='disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5 rtl:rotate-180" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 221">
                                        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
                                        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
                                        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className='font-heading text-sm font-light leading-tight text-muted-800 dark:text-white'>
                                        <span>Vue JS</span>
                                    </h4>
                                    <p className="font-alt tet-xs font-normal leading-normal">
                                        Used by 149 candidates
                                    </p>
                                </div>
                                <div className='ms-auto flex items-center'>
                                    <button className='disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5 rtl:rotate-180" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 221">
                                        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
                                        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
                                        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className='font-heading text-sm font-light leading-tight text-muted-800 dark:text-white'>
                                        <span>Vue JS</span>
                                    </h4>
                                    <p className="font-alt tet-xs font-normal leading-normal">
                                        Used by 149 candidates
                                    </p>
                                </div>
                                <div className='ms-auto flex items-center'>
                                    <button className='disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5 rtl:rotate-180" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 221">
                                        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
                                        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
                                        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className='font-heading text-sm font-light leading-tight text-muted-800 dark:text-white'>
                                        <span>Vue JS</span>
                                    </h4>
                                    <p className="font-alt tet-xs font-normal leading-normal">
                                        Used by 149 candidates
                                    </p>
                                </div>
                                <div className='ms-auto flex items-center'>
                                    <button className='disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5 rtl:rotate-180" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 col-span-2 gap-4">
                        <div className='border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex items-center gap-2 p-3'>
                            <div className='relative inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 256">
                                    <g fill="currentColor">
                                        <path d="M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88Z" opacity=".2"></path>
                                        <path d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96Zm0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80Zm45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0ZM96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-heading text-sm font-semibold leading-tight text-muted-800 dark:text-white">62K</h2>
                                <p className="font-alt text-xs font-normal leading-normal">
                                    <span className="text-muted-500 dark:text-muted-400">Users</span>
                                </p>
                            </div>
                        </div>
                        <div className='border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex items-center gap-2 p-3'>
                            <div className='relative inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-purple-100 text-purple-500 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500 dark:border-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M160 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z" opacity=".2"></path><path d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm73.71 7.14a80 80 0 0 1-14.08 22.2a8 8 0 0 1-11.92-10.67a63.95 63.95 0 0 0 0-85.33a8 8 0 1 1 11.92-10.67a80.08 80.08 0 0 1 14.08 84.47ZM69 103.09a64 64 0 0 0 11.26 67.58a8 8 0 0 1-11.92 10.67a79.93 79.93 0 0 1 0-106.67a8 8 0 1 1 11.95 10.67A63.77 63.77 0 0 0 69 103.09ZM248 128a119.58 119.58 0 0 1-34.29 84a8 8 0 1 1-11.42-11.2a103.9 103.9 0 0 0 0-145.56A8 8 0 1 1 213.71 44A119.58 119.58 0 0 1 248 128ZM53.71 200.78A8 8 0 1 1 42.29 212a119.87 119.87 0 0 1 0-168a8 8 0 1 1 11.42 11.2a103.9 103.9 0 0 0 0 145.56Z"></path></g></svg>
                            </div>
                            <div>
                                <h2 className="font-heading text-sm font-semibold leading-tight text-muted-800 dark:text-white">62K</h2>
                                <p className="font-alt text-xs font-normal leading-normal">
                                    <span className="text-muted-500 dark:text-muted-400">Users</span>
                                </p>
                            </div>
                        </div>
                        <div className='border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex items-center gap-2 p-3'>
                            <div className='relative inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60Z" opacity=".2"></path><path d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8Zm-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17ZM108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52Z"></path></g></svg>
                            </div>
                            <div>
                                <h2 className="font-heading text-sm font-semibold leading-tight text-muted-800 dark:text-white">62K</h2>
                                <p className="font-alt text-xs font-normal leading-normal">
                                    <span className="text-muted-500 dark:text-muted-400">Users</span>
                                </p>
                            </div>
                        </div>
                        <div className='border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex items-center gap-2 p-3'>
                            <div className='relative inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M200 40v184H56V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8Z" opacity=".2"></path><path d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16ZM64 40h128v176H64Zm104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"></path></g></svg>
                            </div>
                            <div>
                                <h2 className="font-heading text-sm font-semibold leading-tight text-muted-800 dark:text-white">62K</h2>
                                <p className="font-alt text-xs font-normal leading-normal">
                                    <span className="text-muted-500 dark:text-muted-400">Users</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="mt-auto flex h-full items-end justify-between pb-4">
                                <div>
                                    <h2 className="font-heading text-base font-semibold leading-tight text-muted-800 dark:text-white">
                                        <span>Total Contributors</span>
                                    </h2>
                                    <p className="font-alt text-xs font-normal leading-normal">
                                        <span className="text-muted-400"> 23 contributors this month </span>
                                    </p>
                                </div>
                                <div>
                                    <div className="flex">
                                        <div className="dark:bg-muted-800 relative flex shrink-0 items-center justify-center rounded-full bg-white transition-all duration-100 ease-in hover:-ms-2 hover:me-2 focus:me-2">
                                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full bg-purple-500/20 text-purple-500 !scale-90">
                                                <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                                    <img src={user01} className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-10 w-10" alt="avatar" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dark:bg-muted-800 relative flex shrink-0 items-center justify-center rounded-full bg-white transition-all duration-100 ease-in hover:-ms-2 hover:me-2 focus:me-2 -ms-3 h-10 w-10 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2">
                                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full bg-purple-500/20 text-purple-500 !scale-90">
                                                <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                                    <img src={user02} className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-10 w-10" alt="avatar" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dark:bg-muted-800 shrink-0 rounded-full bg-white transition-all duration-100 ease-in -ms-3 h-10 w-10">
                                            <div className="bg-muted-200 dark:border-muted-800 dark:bg-muted-700 relative inline-flex h-full w-full scale-90 items-center justify-center rounded-full border-white">
                                                <span className="text-muted-500 dark:text-muted-300 -ms-1 font-sans font-normal uppercase text-sm">+2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=' router-link-active router-link-exact-active group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-[400px] w-full object-cover object-center" src={n01} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
>>>>>>> new_theme
        </div>
    );
}

export default Dashboard;