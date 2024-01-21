import dbConnect from '@/lib/monggodb'
import { Container } from './kit/Container'

export default async function Page() {
	return (
		<h1 className='s1-default'>
			<Container />
		</h1>
	)
}
