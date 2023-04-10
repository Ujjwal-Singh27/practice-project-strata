import React from 'react'
import './index.css'
import { FaHome } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import img1 from './fulls/01.jpg';
import img2 from './fulls/02.jpg';
import img3 from'./fulls/03.jpg';
import img4 from'./fulls/04.jpg';
import img5 from'./fulls/05.jpg';
import img6 from'./fulls/06.jpg';

const Page = () => {

    const arrayofobjects=[
        {
            image:img1,
            title:'Magna sed consequat tempus'
        },
        {
            image:img2,
            title:'Ultricies lacinia interdum'
        },
        {
            image:img3,
            title:'Tortor metus commodo'
        },
        {
            image:img4,
            title:'Quam neque phasellus'
        },
        {
            image:img5,
            title:'Nunc enim commodo aliquet'
        },
        {
            image:img6,
            title:'Risus ornare lacinia'
        }
    ]

  return (
    <div className='flex'>
        <div className='w-1/3 '></div>
    <div className='px-16 py-24 w-2/3 '>

      <div>
        <h2 className='text-gray-500 text-3xl mb-8'>Ipsum lorem dolor aliquam ante commodo magna sed accumsan arcu neque.
        </h2>
        <p className='font-semibold text-gray-400 mb-8'>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.
        </p>
        <ul >
            <li>
                <a  href ='#' className='px-6 py-2 border-2 rounded bg-transparent rounded text-gray-400 hover:text-green-500 hover:border-green-500 '>Learn More</a>
            </li>
        </ul>
      </div>

      <div className='mt-16 pt-16 border-t-2 '>
        <h2 className='mb-6 text-slate-600 text-2xl'>Recent Work</h2>

        {/* <div className='flex flex-wrap justify-start'> */}
        <div className='grid grid-cols-2'>
            {arrayofobjects.map((elem)=>{
                const{image,title}=elem;
                return(
                    <>
                        {/* <div className='h-auto max-w-xs flex-wrap'> */}
                        <div className='mb-8 pr-8 1-1/2' >
                            <img src={image} alt='image' className='h-auto w-80 rounded-lg mb-6'/>
                            <h3 className='mb-2 text-gray-500'>{title}</h3>
                            <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet nisl sed nullam feugiat</p>
                        </div>
                    </>
                ) 
            })}
            
            
        </div>
        <ul className=''>
            <li>
                <a href='#' className='px-6 py-2 border-2 text-gray-500 hover:text-green-500 hover:border-green-500 rounded'>Full Portfolio</a>
            </li>
        </ul>
      </div>
      
      <div className='mt-16 pt-16 border-t-2'>
        <h2 className='mb-6 text-2xl text-gray-500'>Get Touch</h2>
        <p className='mb-8 text-gray-400'>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>

        <div className='flex'>
            <form>
                <div className='flex'>
                    <input type='text' placeholder='Name' className='bg-gray-100 mr-2 h-10 pl-2 rounded outline-1 outline-green-500'/>
                    <input type='email' placeholder='Email' className='bg-gray-100 h-10 pl-2 rounded outline-1 outline-green-500'/>
                </div>
                {/* <div className='w-full mt-4'> */}
                    <textarea placeholder='Message' className='w-full rounded p-2 pb-0 h-36 mt-4 bg-gray-100 mb-8 outline-1 outline-green-500'/>
                {/* </div> */}
                <input type='submit' value="Send Message" className='px-6 py-2 border-2 text-gray-500 hover:text-green-500 hover:border-green-500 rounded'/>
            </form>
            <div className='pl-4'>
                <ul>
                    <li className='flex'>
                        <FaHome className='w-8 fill-gray-500 pt-2 h-8 mr-1'/>
                        <div className='font-normal text-gray-500 leading-7'>1234 Somewhere Rd. Nashville, TN 00000 United States</div>
                    </li>
                    <li className='flex mt-6'>
                        <FaMobileAlt className='h-6 fill-gray-500 mr-4'/>
                        <div className='font-normal text-gray-500'>000-000-0000</div>
                    </li>
                    <li>
                        <div className='flex mt-6 items-center'>
                            <FaEnvelope className='fill-gray-500 mr-4'/>
                            <a href='#' className='text-gray-500 border-b border-dotted hover:text-green-500 hover:border-0'>hello@untitled.tld</a>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page
