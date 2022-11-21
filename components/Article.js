import React, { Component } from 'react'
import Image from 'next/image'

export class Article extends Component {
  render() {
    return (
      <div className=" w-52">
<Image  src="/../public/b1.png" width="250px" height="250%" />
<p className='bg-yellow-400 text-white p-2' >Milestone and Recognition</p>
<p class="font-bold m-2">Lrem ipsum dolor sit amet.</p>
<p class="text-sm ...">“Success usually comes to those who are too 
        busy looking for it.” </p>
        <p className='text-sm mt-6 w-32'> AUGUST 28, 2022 <li>5 minutes read</li> </p>

      </div>
      
      
    )
  }
}

export default Article


