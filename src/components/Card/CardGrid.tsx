import { Card } from './Card';
import { CardError } from './CardError';

type CardGridProps = {
	shieldsIcons: IData[];
};

const CardGrid = ({ shieldsIcons }: CardGridProps) => {
	return (
		<>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
				{shieldsIcons?.map(icon => (
					<Card key={icon.id} {...icon} />
				))}
			</div>
			{shieldsIcons?.length === 0 && <CardError />}
		</>
	);
};

export default CardGrid;
