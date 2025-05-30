import React from 'react';

const Navbar = () => {
    return (
        <div className='p-3 bg-[rgba(255,229,186,1)] flex justify-between'>
            <div className='ml-9 flex gap-7'>
                <p>demo@gmail.com</p>
                <p>01791430459</p>
            </div>
            <div className='mr-9'>
                <button> Get Your Quote </button>
            </div>
        </div>
    );
};

export default Navbar;