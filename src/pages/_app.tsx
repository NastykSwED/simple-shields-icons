import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

import { Toaster } from 'react-hot-toast';

import { MainLayout } from '../layouts';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='Simple Shields-Icons is your go-to source for high-quality Shields.io badges for popular brands'
				/>
				<title>Simple Shields-Icons</title>
			</Head>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
			<Toaster position='bottom-center' reverseOrder={false} />
		</>
	);
}
