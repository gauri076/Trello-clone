import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#1d2125] w-100 h-12 p-3 border-b border-b[#9fadbc29] bordered-bpx flex flex-row justify-between'>
        <div class="left">
            <h3>Trello Clone</h3>
        </div>
        <div class="right">
            <span>Remote dev</span>
            <img src="https://placeholder.co/28x28/png" alt=""/>
        </div>
    </div>
  )
}

export default Header