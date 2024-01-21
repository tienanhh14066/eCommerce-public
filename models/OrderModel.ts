import mongoose, { Document, Schema, Types } from 'mongoose'

interface Order {
	orderId: mongoose.Types.ObjectId
	customer: {
		customerId: mongoose.Types.ObjectId
		name: string
		email: string
	}
	orderDate: Date
	voucher: {
		voucherId: mongoose.Types.ObjectId
		name: string
		type: string
		value: number
	}
	totalPriceWithoutDiscount: number
	totalPriceWithDiscount: number
	products: Array<{
		productId: mongoose.Types.ObjectId
		quantity: number
		pricePerDevice: number
		totalPrice: number
	}>
}

interface OrderDocument extends Order, Document {}

const orderSchema = new Schema<OrderDocument>({
	orderId: { type: mongoose.Schema.Types.ObjectId },
	customer: {
		customerId: { type: mongoose.Types.ObjectId, required: true },
		name: { type: String, required: true },
		email: { type: String, required: true },
	},
	orderDate: { type: Date, required: true },
	voucher: {
		voucherId: { type: mongoose.Types.ObjectId, required: true },
		name: { type: String, required: true },
		type: { type: String, required: true },
		value: { type: Number, required: true },
	},
	totalPriceWithoutDiscount: { type: Number, required: true },
	totalPriceWithDiscount: { type: Number, required: true },
	products: [
		{
			productId: { type: mongoose.Types.ObjectId, required: true },
			quantity: { type: Number, required: true },
			pricePerDevice: { type: Number, required: true },
			totalPrice: { type: Number, required: true },
		},
	],
})

const OrderModel =
	mongoose.models.Order || mongoose.model<OrderDocument>('Order', orderSchema)

export default OrderModel
