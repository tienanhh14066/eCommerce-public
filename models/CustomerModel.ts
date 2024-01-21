import mongoose, { Document, Schema } from 'mongoose'

interface Customer {
	name: string
	email: string
	purchases: Array<{
		productId: mongoose.Types.ObjectId
		quantity: number
		totalPrice: number
		purchaseDate: Date
	}>
	totalSpending: number
}

interface CustomerDocument extends Customer, Document {}

const customerSchema = new Schema<CustomerDocument>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	purchases: [
		{
			productId: { type: mongoose.Types.ObjectId, required: true },
			quantity: { type: Number, required: true },
			totalPrice: { type: Number, required: true },
			purchaseDate: { type: Date, required: true },
		},
	],
	totalSpending: { type: Number, required: true },
})

const CustomerModel =
	mongoose.models.Customer ||
	mongoose.model<CustomerDocument>('Customer', customerSchema)

export default CustomerModel
