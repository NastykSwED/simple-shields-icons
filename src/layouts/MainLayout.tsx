import { Footer, Header } from '../components/';

type MainLayoutProps = {
	children: JSX.Element[] | JSX.Element;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className='container py-2 px-4 mx-auto my-4'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
