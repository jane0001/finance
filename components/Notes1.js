import React, { Component } from 'react'
import Image from 'next/image'

export class Notes1 extends Component {
  render() {
    return (

      <div  className='bg-slate-900 w-full justify-center  items-center  ease-in duration-300  h-80 flex'>
      
         
          <div className=' flex flex-col items-center w-full justify-center'>
            <div className='mt-4'>
         <Image  src="/../public/logo.png" width="170px" height="100px" className='object-contain'   />
         </div>
         <div  className='grid grid-cols-3 gap-2 w-20 mb-6 ' >
         <Image  src="/../public/SKY.png" width="90px" height="70px" />
         <Image  src="/../public/skype.png" width="90px" height="70px" />
         <Image  src="/../public/utube.png" width="90px" height="70px" />
         </div>
        <p className='text-sm text-white'> Copyright 2022 , Bethniel Finance Technology. All rights preserved</p>
        </div>
        <div className=' text-white  flex flex-col items-center w-full justify-center' >
<p class="font-bold m-2 ">Stay up with us.</p>
<p class=" w-64 text-sm ...">Subscribe to receive Bethniel Fintech Monthly Wrap and
                        Bethniel Fintech Notes. We promise we won't spam you..</p>
                        <div className='bg-indigo-800 text-white p-2 w-52 mt-3 '>
                          <a href='/'> Subscribe</a> 
                        </div>
                        </div>
 </div>
 
      
    )
  }
}

export default  Notes1