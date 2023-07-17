import React from 'react';

import BreadCumb from '../../Components/UI/BreadCumb/BreadCumb';

import n01 from '../../assets/images/nature/n-01.svg'
import n02 from '../../assets/images/nature/n-02.svg'
import n03 from '../../assets/images/nature/n-03.svg'
import n04 from '../../assets/images/nature/n-04.svg'

function Travel(props) {
    return (
        <div>

            <div>
                <h1 className="text-dark dark:text-white font-bold text-xl">
                    Dashboard
                </h1>
                <BreadCumb links={[{title: "Dashboard", to: "/"}, {title: "Travel"}]} current={"Travel"} />
            </div>
                

            <div className='mt-10 container'>
                <div className="grid grid-cols-7 gap-6">

                    <div className='cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-80 w-full object-cover object-center" src={n01} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className='cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-80 w-full object-cover object-center" src={n02} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>


                    <div className='cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-80 w-full object-cover object-center" src={n03} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>



                    <div className='cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-80 w-full object-cover object-center" src={n04} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>


                    <div className='cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-80 w-full object-cover object-center" src={n01} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>



                    <div className='cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-80 w-full object-cover object-center" src={n02} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>


                    <div className='cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-2xl'>
                        <img className="h-80 w-full object-cover object-center" src={n04} alt="nature 01" />
                        <div className="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        <div className='absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6'>
                            <div className='flex items-center justify-between'>
                                <h3 className='-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9Z"></path>
                                    <path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></path>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                                    Tracking
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>



                    


                </div>
            </div>
            
        </div>
    );
}

export default Travel;