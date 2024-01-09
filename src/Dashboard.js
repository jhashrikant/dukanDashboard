import React from 'react'
import NAV_ITEMS from './utils'
import headerimg from './images/headerimg.png'
import chevronDownimg from './images/Chevron Down.png'
import wallet from './images/wallet.png'
import menu from './images/Menu.png'
import menu2 from './images/menu2.png'
import questionmark from './images/questionmark.png'
import sort from './images/Sort@2x.png'
import downloadimg from './images/downloadimg.png'

const Dashboard = () => {
    return (
        <div className='MainContainer'>
            <div className='leftpanel'>
                <div className='mainNavCOntainer'>
                    <header className='header'>
                        <img className='headerImg' src={headerimg} alt='headerimg' />
                        <aside className='aside'>
                            <h1>Nishyan</h1>
                            <p className='visitStore'>visit store</p>
                        </aside>
                        <img className='chevrownimg' src={chevronDownimg} alt='chevronDownimg' />
                    </header>

                    <nav className='navLinks'>
                        <ul>
                            {NAV_ITEMS && NAV_ITEMS?.map((navItems) => {
                                return <li className='NavItems hover:cursor-pointer  space-x-3 '>
                                    <img className='homeImg' src={navItems?.imgPath} alt='homeimg' />
                                    <h1 className='item '>{navItems?.label}</h1>
                                </li>
                            })}
                        </ul>
                    </nav>
                </div>
                {/* footer */}
                <section className='footer'>
                    <aside style={{ padding: '0.375rem' }}>
                        <img src={wallet} alt='credits' />
                    </aside>
                    <aside style={{ padding: '0.375rem' }}>
                        <p style={{ fontSize: "13px" }}>Available credits</p>
                        <b style={{ fontWeight: '500' }}>222.10</b>
                    </aside>
                </section>
            </div>

            <div className='rightPanel'>
                <nav className='Nav'>
                    <div className='section1'>
                        <h2 className='payouts'>Payouts</h2>

                        <img src={questionmark} alt='questionmark' />
                        <p>how it works</p>

                    </div>

                    <div className='section2'>
                        <input className='inputbox' type='text' placeholder='Search features ,tutorials etc' />
                    </div>

                    <div className='section3'>
                        <img src={menu} alt='menuimg' />
                        <img src={menu2} alt='menuimg2' />
                    </div>


                </nav>

                <main className='mainContent'>
                    <section className='flex justify-between items-center'>
                        <h1 className='overview'>Overview</h1>
                        <aside className='selectcontainer'>
                            <select className='selectoption'>
                                <option>This Month</option>
                                <option>Last Month</option>
                            </select>
                        </aside>
                    </section>

                    <section className=' gap-5 flex justify-between items-start'>
                        <div className='bg2 card1'>
                            <aside className=' flex  items-center gap-2'>
                                <h2>Next payout</h2>
                                <img src={questionmark} alt='questionmark' />
                            </aside>

                            <div className=' flex justify-between items-center gap-2'>
                                <h1 className='font-medium text-3xl'>2312.23</h1>
                                <p>23 orders</p>
                            </div>
                            <aside className='bg flex justify-between items-center gap-2'>
                                <h2>Next payout date</h2>
                                <date>Today 4:pm</date>
                            </aside>
                        </div>

                        <div className='card2'>
                            <aside className='flex  items-center gap-2'>
                                <h2>Amount Pending</h2>
                                <img src={questionmark} alt='questionmark' />
                            </aside>

                            <div className='flex justify-between items-center gap-2'>
                                <h1 className='font-medium text-3xl'>92,312.23</h1>
                                <p>23 orders</p>
                            </div>

                        </div>

                        <div className='card3'>
                            <aside className='flex  items-center gap-2'>
                                <h2>Amount Processed</h2>
                                <img src={questionmark} alt='questionmark' />
                            </aside>

                            <div className='flex justify-between items-center gap-2'>
                                <h1 className='font-medium text-3xl'>92,312.23</h1>
                                <p>23 orders</p>
                            </div>
                        </div>
                    </section>

                    <div>
                        <h1 className='Transactions'>Transactions | This Month</h1>
                        <aside className=' space-x-3 mt-5'>
                            <span className='bgpayout  font-medium text-sm rounded-full py-1 px-4'>Payouts(22)</span>
                            <span className='bg text-white font-medium text-sm rounded-full py-1 px-4'>Refunds(6)</span>
                        </aside>

                        <div className='mt-4 flex justify-between items-center'>
                            <input className='border rounded py-2 px-4' type='text' placeholder='OrderId or transaction id' />
                            <div className='flex justify-between items-center'>
                                <span className='px-3 py-1 border rounded flex justify-between items-center'>sort
                                    <img src={sort} alt='sort' />
                                </span>
                                <span className='px-3 py-1'>
                                    <img src={downloadimg} alt='download' />
                                </span>
                            </div>
                        </div>

                        <table className='mt-4 w-full text-left border-collapse max-sm:table-fixed max-sm:w-full'>
                            <thead className='max-sm:w-screen'>
                                <tr className='bg-[#F2F2F2] '>
                                    <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:pl-1 max-sm:py-1.5 max-sm:w-10'>Order ID</th>
                                    <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:pl-1 max-sm:py-1.5 max-sm:w-10'>Status</th>
                                    <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:pl-1 max-sm:py-1.5 max-sm:w-10'>Transaction ID</th>
                                    <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:pl-1 max-sm:py-1.5 max-sm:w-10'>Refund date</th>
                                    <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:pl-1 max-sm:py-1.5 max-sm:w-10'>Order amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td className='text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] border-b border-background-light py-3.5 ml-3 max-sm:ml-1.5'>#281209</td>
                                    <td className='border-b w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]'>
                                        <aside className='w-2.5  h-2.5 bg-green-600 rounded-full max-sm:w-1.5 max-sm:h-1.5'></aside>
                                        <p className='text-text'>Successful</p>
                                    </td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>131634495747</td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>Today, 08:45 PM</td>
                                    <td className='text-text p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>₹1,125.00</td>
                                </tr>
                                <tr className=''>
                                    <td className='text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] border-b border-background-light py-3.5 ml-3 max-sm:ml-1.5'>#281209</td>
                                    <td className='border-b w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]'>
                                        <aside className='w-2.5 h-2.5 bg-gray-500 rounded-full max-sm:w-1.5 max-sm:h-1.5'></aside>
                                        <p className='text-text'>Processing</p>
                                    </td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>131634495747</td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>Yesterday, 3:00 PM</td>
                                    <td className='text-text p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>₹1,125.00</td>
                                </tr>
                                <tr className=''>
                                    <td className='text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] border-b border-background-light py-3.5 ml-3 max-sm:ml-1.5'>#281209</td>
                                    <td className='border-b w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]'>
                                        <aside className='w-2.5  h-2.5 bg-green-600 rounded-full max-sm:w-1.5 max-sm:h-1.5'></aside>
                                        <p className='text-text'>Successful</p>
                                    </td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>131634495747</td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>12 Jul 2023, 03:00 PM</td>
                                    <td className='text-text p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>₹1,125.00</td>
                                </tr>
                                <tr className=''>
                                    <td className='text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] border-b border-background-light py-3.5 ml-3 max-sm:ml-1.5'>#281209</td>
                                    <td className='border-b w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]'>
                                        <aside className='w-2.5  h-2.5 bg-green-600 rounded-full max-sm:w-1.5 max-sm:h-1.5'></aside>
                                        <p className='text-text'>Successful</p>
                                    </td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>131634495747</td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>12 Jul 2023, 03:00 PM</td>
                                    <td className='text-text p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>₹1,125.00</td>
                                </tr>
                                <tr className=''>
                                    <td className='text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] border-b border-background-light py-3.5 ml-3 max-sm:ml-1.5'>#281209</td>
                                    <td className='border-b w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]'>
                                        <aside className='w-2.5  h-2.5 bg-green-600 rounded-full max-sm:w-1.5 max-sm:h-1.5'></aside>
                                        <p className='text-text'>Successful</p>
                                    </td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>131634495747</td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>Today, 08:45 PM</td>
                                    <td className='text-text p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>₹1,125.00</td>
                                </tr>
                                <tr className=''>
                                    <td className='text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] border-b border-background-light py-3.5 ml-3 max-sm:ml-1.5'>#281209</td>
                                    <td className='border-b w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]'>
                                        <aside className='w-2.5  h-2.5 bg-green-600 rounded-full max-sm:w-1.5 max-sm:h-1.5'></aside>
                                        <p className='text-text'>Successful</p>
                                    </td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>131634495747</td>
                                    <td className='border-b border-background-light py-3.5 px-3 max-sm:px-0 text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>Today, 08:45 PM</td>
                                    <td className='text-text p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>₹1,125.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default Dashboard
