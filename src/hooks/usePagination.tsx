import jsonData from '../../json/shieldsIcons.json';
import { useState, useEffect } from 'react';

export const usePagination = () => {
	const data = jsonData.data as IData[];

	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(50);
	const [searchTerm, setSearchTerm] = useState('');

	const filteredData = data.filter(item =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const totalPages = Math.ceil(filteredData.length / pageSize);
	const [showPagination, setShowPagination] = useState(totalPages > 1);

	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentPageData = filteredData.slice(startIndex, endIndex);

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const goToPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		setShowPagination(totalPages > 1);
	}, [totalPages]);

	return {
		currentPageData,
		goToNextPage,
		goToPrevPage,
		showPagination,
		searchTerm,
		totalPages,
		currentPage,
		pageSize,
		filteredData,
		handleSearchChange,
	};
};
