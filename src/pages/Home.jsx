import React from 'react'
import FormInput from '../components/FormInput'

const Home = () => {
  return (
      <main className='min-h-[calc(100vh-80px)] py-10 lg:py-20'>
          <div className="container mx-auto px-4 lg:px-2 xl:px-1 h-full grid place-items-center" >
              <div className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 p-4 grid place-items-center'>
                  <FormInput />
              </div>
          </div>
    </main>
  )
}

export default Home