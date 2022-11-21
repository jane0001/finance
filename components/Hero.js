import React, { Component } from 'react'
import { AiFillSliders } from 'react-icons/ai'
import Image from 'next/image'
import Article  from "../components/Article"
import Notes1  from "../components/Notes1"


export class Hero extends  Component{
  render() {
    return (
      <div>
      <div className='  items-center justify-center h-full bg-black/90 bg-fixed bg-center bg-cover px-[258px]
      custom-img  '>
         
        
        <div className='p-5 text-white  '>
          
          <div className='w-36 h-10 flex items-center justify-between'>
        <Image  src="/../public/vector1.png" width="20px" height="20px" />
        <h1 className='text-green-500'>Go back</h1>
        </div>     
<p className='bg-yellow-400 text-white p-2 w-64 text-sm:'  >Milestone and Recognition</p>

          <p>That said, here are a few of our favorite motivational and inspiring quotes from a wide variety of sources</p>
        <div className='mr-0 
        '>
          <div className='mt-4'>
          <Image  src="/../public/b2.png" width="990px" height="350%" />
          </div>
</div>

<div className='flex justify-between 2-full'>
<p className='text-sm mt-6 w-70'>AUGUST 28, 2022<li>5 minutes read</li> </p>

<div className='w-36 h-10 flex items-center justify-between'>
<Image  src="/../public/Gp.png" width="20px" height="20px" />
        <h1 className='text-green-500'>Copy link</h1>
        <Image  src="/../public/in.png" width="20px" height="20px" />
         <Image  src="/../public/skype.png" width="20px" height="20px" />
       
        </div>
        </div>

<p className='mt-20'>fhriuah ;h aih; fhihs;f l nfojaojf;9og rea;dlgf;oih ofj a; jfoehsfhugier oijv hog;oh adkhg;rieah iah;g eoj;/g jodnvdih eojdlfne;oihr g;oh;igh ne; oh e;i;hehg;oh kah ;ohegogoeah fha;iohhfkshifhgihi fo i hihfs knfihwuhkbkjsdhuifhiuuuriaehhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhwoilhjdakefiugeowehuaeryijw lkhegdiolkwhjbkjcaiufiaerufehalhwiodhfkahlfih  oihfhfiwkl.hiw
What is it about motivational quotes that make them so endearing? Every driven person eventually figures out that there's a whole lot of feel-good time wasters out there that suck us because they feel like work, and browsing endless lists of motivational phrases are no exception. And yet, there's hidden value in finding a concise expression that perfectly distills our own beliefs.

Motivational quotes often feel like our own opinions making a return visit, just augmented by someone with writing talent. And the right quote at the right time can change things—words matter, and motivating phrases can encourage us to get up, overcome tough times, take action, stop procrastinating, escape our comfort zone, motivate a team, invest in personal growth, start a business, and do the hard work that needs doing.

Even genuinely successful people show some reverence to a favorite inspirational quote or two—to get through hard times, remember an important personal principle, or even get some inspiration to be more productive while working from home. In business and life, quotes are short bits of wit and wisdom that are easy to revisit when we need them.

That said, here are a few of our favorite motivational and inspiring quotes from a wide variety of sources. We hope you find a few you like and can revisit often to stay motivated.

200+ Motivational quotes to inspire y
</p>
<div className='w-full mt-3'>
  <div className='flex justify-between 2-full'>
        <h1 className='mt-2'>Similar Articles</h1>
        <div className='w-36 h-10 flex items-center justify-between'>
        <h1 className='text-green-500'>View all articles</h1>
        <Image  src="/../public/Vector.png" width="20px" height="20px" />
        </div>
        </div>
   <div className='grid grid-cols-3'>
   <Article/>
   <Article/>
   <Article/>
    </div>
   
   </div>
   
        </div>
      </div>
  <Notes1/>
      </div>
      
    )
    
  }
}

export default Hero
