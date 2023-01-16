import { CardGrid, Pagination } from './';

import { usePagination } from '../hooks/';

export const Searcher = () => {
	const {
		currentPageData,
		goToNextPage,
		goToPrevPage,
		showPagination,
		searchTerm,
		currentPage,
		totalPages,
		filteredData,
		handleSearchChange,
	} = usePagination();

	return (
		<>
			<input
				value={searchTerm}
				onChange={handleSearchChange}
				type='text'
				placeholder='Search...'
				className='w-full px-5 py-3 mb-4 text-white border rounded-md border-neutral-800 bg-primary  focus:outline-none focus:border-gray-500'
			/>

			{currentPageData && <CardGrid shieldsIcons={currentPageData} />}

			<Pagination
				currentPage={currentPage}
				filteredData={filteredData}
				goToNextPage={goToNextPage}
				goToPrevPage={goToPrevPage}
				totalPages={totalPages}
				showPagination={showPagination}
			/>
		</>
	);
};
