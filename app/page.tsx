import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main className='mx-auto px-[10%] py-0'>
        <section className="text-green-600 max-lg:h-[140vw] h-screen max-lg:flex-col-reverse flex justify-between items-center max-lg: mt-[2rem]">
          {/* Left side of Flex */}
          <div>
            <h1 className="max-lg:text-3xl text-6xl font-bold mb-2">Welcome to our website</h1>
            <p className="max-lg:text-[.9rem] text-[1.7rem] my:0 my-1">Explore our website. Get started below</p>
            <a href="#" className="my-2 bg-green-600 hover:bg-transparent border border-green-600 text-white hover:text-green-600  inline-block font-semibold max-lg:py-1 py-2 max-lg:px-2 px-4 rounded-lg">Get Started</a>
          </div>
          {/* Right side of Flex */}
          <img src="assets/images/image4.png"/>
        </section>

        <section className='grid max-lg:grid-cols-1 grid-cols-3 gap-4 my-10'>
          <div className='px-4 py-2 border border-slate-300 rounded-[5px]'>
            <img className='rounded-lg' src="assets/images/image1.png" alt="" />
            <p className='mt-4 mb-2 text-md tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam natus velit laboriosam dolore repellendus esse aliquam? Nam, nostrum dolor?</p>
            <a href="#" className="my-2 w-full text-center bg-green-600 hover:bg-transparent border border-green-600 text-white hover:text-green-600  inline-block font-semibold py-1 px-2 rounded-[3px]">view</a>
          </div>
          <div className='px-4 py-2 border border-slate-300 rounded-[5px]'>
            <img className='rounded-lg' src="assets/images/image2.png" alt="" />
            <p className='mt-4 mb-2 text-md tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam natus velit laboriosam dolore repellendus esse aliquam? Nam, nostrum dolor?</p>
            <a href="#" className="my-2 w-full text-center bg-green-600 hover:bg-transparent border border-green-600 text-white hover:text-green-600  inline-block font-semibold py-1 px-2 rounded-[3px]">view</a>
          </div>
          <div className='px-4 py-2 border border-slate-300 rounded-[5px]'>
            <img className='rounded-lg' src="assets/images/image3.png" alt="" />
            <p className='mt-4 mb-2 text-md tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam natus velit laboriosam dolore repellendus esse aliquam? Nam, nostrum dolor?</p>
            <a href="#" className="my-2 w-full text-center bg-green-600 hover:bg-transparent border border-green-600 text-white hover:text-green-600  inline-block font-semibold py-1 px-2 rounded-[3px]">view</a>
          </div>

        </section>
      </main>
      <footer className='bg-green-600'>
          <p className='text-center text-white py-6'>Copyright 2023</p>
      </footer>
    </div>
  )
}
