import React from 'react'

const Education = () => {
  return (
    <>
      <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid'>
        <div className='flex md:contents flex-row-reverse'>
          <div className='relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-base font-semibold lg:text-lg '>
              Dr. A.P.J. Abdul Kalam University
            </h3>
            <p className='text-sm font-semibold'>
              Master's In Computer Application
            </p>
            <p className='text-xs font-semibold pt-3'>CGPA - 8.5</p>
            <p className='text-xs font-semibold'>
              2021-2023 | Indore Madhya Pradesh
            </p>
          </div>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
          </div>
        </div>

        <div className='flex md:contents '>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-indigo-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
          </div>
          <div className='relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-6 col-end-10 mr-auto'>
            <h3 className='text-base font-semibold lg:text-lg '>
              Motilal Vigyan Mahavidhyalaya
            </h3>
            <p className='text-sm font-semibold'>Bachelor of Science (BSC)</p>
            <p className='text-xs font-semibold pt-3'>Percent - 62.8</p>
            <p className='text-xs font-semibold'>
              2017-2020 | Bhopal Madhya Pradesh
            </p>
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-base font-semibold lg:text-lg '>
              Mont Fort Hr. Sec. School
            </h3>
            <p className='text-sm font-semibold'>
              Higher Secondary School (12th PCM)
            </p>
            <p className='text-xs font-semibold pt-3'>Percent - 75.8</p>
            <p className='text-xs font-semibold'>
              2016-2017 | Balaghat Madhya Pradesh
            </p>
          </div>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
          </div>
        </div>

        <div className='flex md:contents'>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-indigo-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
          </div>
          <div className='relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-6 col-end-10 mr-auto'>
            <h3 className='text-base font-semibold lg:text-lg '>
              Mont Fort Hr. Sec. School
            </h3>
            <p className='text-sm font-semibold'>High School (10th ALL)</p>
            <p className='text-xs font-semibold pt-3'>Percent - 87.33</p>
            <p className='text-xs font-semibold'>
              2014-2015 | Balaghat Madhya Pradesh
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
