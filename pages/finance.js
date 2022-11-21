import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image'


export class finance extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <div className='bg-cyan-900  text-white'>
            <div className='flex  text-white'>
                <div>
            <h1 className='mt-28 ml-36 font-bold text-3xl'>Learn, transact and grow <br></br>financially in Africa</h1>
        <h5 className=" ml-36 pt-3 text-sm ... w-80">We build financial service applications, tool and infrastructure
        and provide financial technology consulting services for the African Market </h5>
      <br></br>
                <div className='p-2 text-center bg-blue-400 w-44 h-10  ml-36 text-white'>
                <Link  href="/">Connect with us</Link>
               </div>
               </div>
               <div className='ml-auto mr-20 mt-10 '>
               <Image src="/../public/16.png" width='240px' height='500px'/>
               <Image src="/../public/18.png" width='240px' height='500px'/>
               <Image src="/../public/19.png" width='240px' height='500px'/>
               </div>
               </div>
               <p className='text-center   mt-14'> We have a mission of offering seamless and intuitive platform
                that help<br></br> people and business to learn,transact and grow financially in Africa
               </p>
               <div className='flex'>
               <div className='mt-28 ml-36'>
               <h5 className='text-green-600'>BETHNIEL FINANCE</h5>
               <h1>STAY AHEAD FINANCIALLY</h1><br></br>
               <p className='text-sm'> A platform that offers a seamless way of improving financial literacy<br></br>
               managing personal finance and accessing financial services<br></br>
               <br></br><a href='/'>Visit the website to learn more</a></p><br></br>
               <p className='text-sm'>You can also get the app:</p>
               <div className='mt-2'>
                <Image src="/../public/ig 1.png" width="70px" height="40px"/>
                <Image src="/../public/ig 3.png" width="70px" height="40px"/>
               </div>
               </div>
              <div className="mt-20 ml-auto mr-80" >
               <Image  src="/../public/Gp 101.png" width="340px" height="300px" />
               </div>
               </div>
               </div>
            </div>
       
       
      
    )
    
  }
}

export default finance