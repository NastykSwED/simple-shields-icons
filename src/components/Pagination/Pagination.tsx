type PaginationProps = {
	totalPages: number;
	currentPage: number;
	goToNextPage: () => void;
	goToPrevPage: () => void;
	filteredData: IData[];
	showPagination: boolean;
};

export const Pagination = ({
	currentPage,
	goToNextPage,
	goToPrevPage,
	totalPages,
	filteredData,
	showPagination,
}: PaginationProps) => {
	return (
		<div className='flex flex-col items-center mt-6'>
			<span className='text-sm text-gray-400'>
				Showing
				<span className='font-semibold text-white'>{` ${currentPage} `}</span>to
				<span className='font-semibold text-white'>{` ${totalPages} `}</span>of
				<span className='font-semibold text-white'>{` ${filteredData?.length} `}</span>
				Entries
			</span>
			<div className='grid grid-cols-2 mt-2 overflow-hidden'>
				{showPagination && (
					<>
						<button
							onClick={goToPrevPage}
							className='basis-0 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#121212] hover:bg-[#161616] border-r border-white pr-4 duration-300 transition-all rounded-tl-lg rounded-bl-lg'
						>
							<svg
								aria-hidden='true'
								className='w-5 h-5 mr-2'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
									clipRule='evenodd'
								/>
							</svg>
							Prev
						</button>

						<button
							onClick={goToNextPage}
							className='basis-0 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#121212]  hover:bg-[#161616] border-l border-white duration-300 transition-all rounded-tr-lg rounded-br-lg'
						>
							Next
							<svg
								aria-hidden='true'
								className='w-5 h-5 ml-2'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</>
				)}
			</div>
		</div>
	);
};
