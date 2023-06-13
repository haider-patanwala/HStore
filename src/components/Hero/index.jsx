import heroImg from "../../assets/heroImg.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
	return (
		<section className='text-gray-600 body-font mt-20'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row -mb-20 md:mb-0 md:justify-center flex-col items-center'>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-1 -mt-20 mb-3 md:m-0'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src={heroImg}
					/>
				</div>
				<div className='md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Get the product now before
						<br className='hidden lg:inline-block' />
						they get sold
					</h1>
					<p className='mb-8 leading-relaxed'>
						Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
						plant cold-pressed tacos poke beard tote bag. Heirloom echo park
						mlkshk tote bag selvage hot chicken authentic tumeric truffaut
						hexagon try-hard chambray.
					</p>
					<div className='flex justify-center'>
						<Link
							to={"/products"}
							className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
						>
							Show All Products
						</Link>
						<Link
							to={"/contact"}
							className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
