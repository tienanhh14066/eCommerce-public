import mongoose, { Document, Schema } from 'mongoose'

interface Warehouse {
	warehouseId: mongoose.Types.ObjectId
	product: {
		productId: mongoose.Types.ObjectId
		name: string
		category: string
		brand: string
	}
	supplier: { supplierId: mongoose.Types.ObjectId; name: string }
	stock: { totalQuantityReceived: number; totalQuantityShipped: number }
	imports: Array<{ date: Date; quantityReceived: number }>
	exports: Array<{
		orderId: mongoose.Types.ObjectId
		date: Date
		quantityShipped: number
	}>
}

interface WarehouseDocument extends Warehouse, Document {}

const warehouseSchema = new Schema<WarehouseDocument>({
	warehouseId: { type: mongoose.Schema.Types.ObjectId, required: true },
	product: {
		productId: { type: mongoose.Types.ObjectId, required: true },
		name: { type: String, required: true },
		category: { type: String, required: true },
		brand: { type: String, required: true },
	},
	supplier: {
		supplierId: { type: mongoose.Types.ObjectId, required: true },
		name: { type: String, required: true },
	},
	stock: {
		totalQuantityReceived: { type: Number, required: true },
		totalQuantityShipped: { type: Number, required: true },
	},
	imports: [
		{
			date: { type: Date, required: true },
			quantityReceived: { type: Number, required: true },
		},
	],
	exports: [
		{
			orderId: { type: mongoose.Types.ObjectId, required: true },
			date: { type: Date, required: true },
			quantityShipped: { type: Number, required: true },
		},
	],
})

const WarehouseModel = mongoose.model<WarehouseDocument>(
	'Warehouse',
	warehouseSchema,
)

export default WarehouseModel
