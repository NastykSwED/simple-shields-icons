interface IPagination {
	current_page: number;
	total_pages: number;
	total_items: number;
}
interface IData {
	id: number;
	name: string;
	url: string;
	logo: string;
	logoColor: string;
	color: string;
}
interface IJsonData {
	pagination: IPagination;
	data: IData[];
}
