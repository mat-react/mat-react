import React from 'react';

function Ecommerce(props) {
    return (
        <div>
            <div className="border-muted-200 col-span-2 shadow-sm dark:border-muted-700 dark:bg-muted-800 relative border bg-white transition-all duration-300 rounded-xl p-6 h-full w-full">
                <div className="mb-5 flex items-center justify-between">
                    <h5 className="text-lg font-semibold dark:text-white-light">Top Selling Product</h5>
                </div>
                <div className="table-responsive">
                    <table className='w-full'>
                        <thead>
                            <tr className="border-b-0">
                                <th className="ltr:rounded-l-md rtl:rounded-r-md">Product</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Sold</th>
                                <th className="ltr:rounded-r-md rtl:rounded-l-md">Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                <td className="min-w-[150px] text-black dark:text-white">
                                    <div className="flex">
                                        <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="assets/images/product-headphones.jpg" alt="avatar" />
                                        <p className="whitespace-nowrap">Headphone <span className="block text-xs text-primary">Digital</span></p>
                                    </div>
                                </td>
                                <td>$168.09</td>
                                <td>$60.09</td>
                                <td>170</td>
                                <td>
                                    <a className="flex items-center text-danger" href="/">
                                        <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path opacity="0.5" d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                        </svg>

                                        Direct
                                    </a>
                                </td>
                            </tr>
                            <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                <td className="text-black dark:text-white">
                                    <div className="flex">
                                        <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="assets/images/product-shoes.jpg" alt="avatar" />
                                        <p className="whitespace-nowrap">Shoes <span className="block text-xs text-warning">Faishon</span></p>
                                    </div>
                                </td>
                                <td>$126.04</td>
                                <td>$47.09</td>
                                <td>130</td>
                                <td>
                                    <a className="flex items-center text-success" href="/">
                                        <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path opacity="0.5" d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                        </svg>
                                        Google
                                    </a>
                                </td>
                            </tr>
                            <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                <td className="text-black dark:text-white">
                                    <div className="flex">
                                        <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="assets/images/product-watch.jpg" alt="avatar" />
                                        <p className="whitespace-nowrap">Watch <span className="block text-xs text-danger">Accessories</span></p>
                                    </div>
                                </td>
                                <td>$56.07</td>
                                <td>$20.00</td>
                                <td>66</td>
                                <td>
                                    <a className="flex items-center text-warning" href="/">
                                        <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path opacity="0.5" d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                        </svg>
                                        Ads
                                    </a>
                                </td>
                            </tr>
                            <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                <td className="text-black dark:text-white">
                                    <div className="flex">
                                        <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="assets/images/product-laptop.jpg" alt="avatar" />
                                        <p className="whitespace-nowrap">Laptop <span className="block text-xs text-primary">Digital</span></p>
                                    </div>
                                </td>
                                <td>$110.00</td>
                                <td>$33.00</td>
                                <td>35</td>
                                <td>
                                    <a className="flex items-center text-secondary" href="/">
                                        <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path opacity="0.5" d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                        </svg>
                                        Email
                                    </a>
                                </td>
                            </tr>
                            <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                <td className="text-black dark:text-white">
                                    <div className="flex">
                                        <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="assets/images/product-camera.jpg" alt="avatar" />
                                        <p className="whitespace-nowrap">Camera <span className="block text-xs text-primary">Digital</span></p>
                                    </div>
                                </td>
                                <td>$56.07</td>
                                <td>$26.04</td>
                                <td>30</td>
                                <td>
                                    <a className="flex items-center text-primary" href="/">
                                        <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path opacity="0.5" d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                        </svg>
                                        Referral
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Ecommerce;