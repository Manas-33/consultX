import React from 'react'
import Header from '../partials/Header'

const BrowseClientList = () => {
  return (
    <section className='min-h-screen overflow-hidden'>
        {/*  Site header */}
        <div>
            <Header /> 
        </div>

        <div className='flex justify-center items-center mt-24'>
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4'>Explore your network</h1>
        </div> 
        <div className='mx-80'>
           <div className='flex border border-gray-500 rounded-md'>
                <div>
                    <img className="h-24 w-24 m-2 flex-none rounded-md bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <div className='grow flex justify-between items-center p-5'>
                    <div className=''>
                        <p class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
                    </div>
                    <div>
                        <p class="text-sm leading-6 text-gray-900">Ratings</p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">7.5</p>
                    </div>
                </div>
            </div> 
            
        </div>
    </section>
  )
}

export default BrowseClientList