


const PagePlanes = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 overflow-auto">
                <div className="container mx-auto max-w-4xl">
                    <div className="mt-10 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">Pricing plans</h1>
                        <p className="text-lg mt-3 font-semibold">Every plan includes 30 day free trial</p>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm text-gray-600">For more details on all our pricing visit <span className="underline cursor-pointer text-blue-600">here</span></p>
                            </div>
                            <div className="flex space-x-16">
                                <div className="flex">
                                    <span className="font-semibold inline mr-4">Plan</span>
                                    <span className="px-4 py-1 rounded-md text-sm bg-gray-300 flex items-center cursor-pointer"
                                    >Monthly
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold inline mr-4 ">Select currency</span>
                                    <span className="px-4 py-1 rounded-md text-sm bg-gray-300 flex items-center cursor-pointer">$ USD
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <hr className="mt-10" />
                    <div className="flex space-x-10 pt-10">
                        <div className="py-12">
                            <div className="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                                <div className="px-8 flex justify-between items-center">
                                    <h4 className="text-xl font-bold text-gray-800">Hobby</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h1 className="text-4xl text-center font-bold">$10.00</h1>
                                <p className="px-4 text-center text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                <ul className="text-center">
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                </ul>
                                <div className="text-center bg-gray-200 ">
                                    <button className="inline-block my-6 font-bold text-gray-800">Get started today</button>
                                </div>
                            </div>
                        </div>
                        <div className="py-12">
                            <div className="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                                <div className="px-8 flex justify-between items-center">
                                    <h4 className="text-xl font-bold text-gray-800">Professional</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </div>
                                <h1 className="text-4xl text-center font-bold">$30.00</h1>
                                <p className="px-4 text-center text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                <ul className="text-center">
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                </ul>
                                <div className="text-center bg-pink-600 ">
                                    <button className="inline-block my-6 font-bold text-white">Get started today</button>
                                </div>
                            </div>
                        </div>
                        <div className="py-12">
                            <div className="bg-white pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                                <div className="px-8 flex justify-between items-center">
                                    <h4 className="text-xl font-bold text-gray-800">Business</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h1 className="text-4xl text-center font-bold">$45.00</h1>
                                <p className="px-4 text-center text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                <ul className="text-center">
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                    <li><a href="#" className="font-semibold">It is a long established</a></li>
                                </ul>
                                <div className="text-center bg-gray-200 ">
                                    <button className="inline-block my-6 font-bold text-gray-800">Get started today</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PagePlanes
