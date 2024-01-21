import dbConnect from '@/lib/monggodb'
import { SupplierModel } from '@/models'
import { Container } from './kit/Container'

export default async function Page() {
	await dbConnect()
  SupplierModel.find()
	return (
		<h1 className='s1-default'>
			<Container />
		</h1>
	)
}
