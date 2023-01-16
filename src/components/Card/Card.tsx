import Image from 'next/image';
import Link from 'next/link';

import { BsMarkdown, BsClipboard } from 'react-icons/bs';

import { copyToClipboard } from '../../utilities/';

type CardProps = {
	name: string;
	url: string;
};

export const Card = ({ name, url }: CardProps) => {
	return (
		<div className='flex flex-col items-center justify-center py-4 px-4 transition duration-200 ease-in-out transform border-2 rounded-md  bg-primary border-neutral-800 hover:border-indigo-900'>
			<div className='wrapImgLink'>
				<Link href={url} target={'_blank'}>
					<Image
						unoptimized
						loading='lazy'
						className='h-12 w-auto'
						src={url}
						alt={`${name}Logo`}
						width={55}
						height={55}
					/>
				</Link>
			</div>
			<p className='mt-2 font-medium text-gray-300'>{name}</p>
			<div className='flex items-center justify-between gap-4 mt-2'>
				<button
					className='hover:scale-110 transition-all duration-400 hover:text-gray-500'
					aria-label='Copy the icon for use in Md'
					onClick={() => copyToClipboard(`![${name}](${url})`)}
				>
					<BsMarkdown fontSize={'1.6rem'} />
				</button>
				<button
					className='hover:scale-110 transition-all duration-400 hover:text-gray-500'
					aria-label='Copy the icon to use it'
					onClick={() => copyToClipboard(url)}
				>
					<BsClipboard fontSize={'1.3rem'} />
				</button>
			</div>
		</div>
	);
};
