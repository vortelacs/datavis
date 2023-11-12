import React from 'react';

function Navbar(){

    return(
        <nav className='border-gray-200 bg-silver'>
            <div className='flex flex-wrap justify-between mx-auto p-4'>
            <span class="self-center text-purple text-2xl font-semibold whitespace-nowrap">Data Visualisation Project</span>
            </div>
        </nav>
    );
}

export default Navbar;