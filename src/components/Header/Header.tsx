import Link from 'next/link';

import { AiOutlineGithub } from 'react-icons/ai';

export const Header = () => {
	return (
		<header className='flex justify-between items-center mt-8 flex-wrap'>
			<h1 className='mb-2 font-sans pl-3 md:pl-0 text-3xl font-bold lg:text-4xl md:mb-0'>
				Simple Shields-Icons
			</h1>

			<div className='flex gap-4 flex-col'>
				<p className='text-gray-400 pl-3'>
					2419 Free{' '}
					<Link
						href='https://shields.io/'
						className='font-bold text-white hover:text-gray-500 transition-all duration-300'
						target='_blank'
						aria-label='Read more about Shields.io'
					>
						Shields
					</Link>{' '}
					Icons for popular brands
				</p>

				<Link
					href='https://github.com/NastykSwED/simple-shields-icons'
					className='hover:bg-zinc-800 transition-all duration-300 flex items-center gap-2 p-3 max-w-[10rem] rounded-lg'
					target='_blank'
					aria-label='Read more about Simple Shields-Icons'
				>
					<AiOutlineGithub fontSize={'1.5rem'} />
					Repository
				</Link>
			</div>
		</header>
	);
};
