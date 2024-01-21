import mongoose, { Document, Schema } from 'mongoose'

interface Warehouse {
	warehouseId: mongoose.Types.ObjectId
	product: {
		productId: mongoose.Types.ObjectId
		name: string
	}
	supplier: { supplierId: mongoose.Types.ObjectId; name: string }
	stock: { totalQuantityReceived: number; totalQuantityShipped: number }
	imports?: Array<{ date: Date; quantityReceived: number }>
	exports?: Array<{
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
	},
	supplier: {
		supplierId: { type: mongoose.Types.ObjectId, required: true },
		name: { type: String, required: true },
	},
	stock: {
		totalQuantityReceived: { type: Number, required: true },
		totalQuantityShipped: { type: Number, required: true },
	},
	imports: {
		type: [
			{
				date: { type: Date },
				quantityReceived: { type: Number },
			},
		],

		default: [],
	},
	exports: {
		type: [
			{
				orderId: { type: mongoose.Types.ObjectId },
				date: { type: Date },
				quantityShipped: { type: Number },
			},
		],
		default: [],
	},
})

const WarehouseModel =
	mongoose.models.Warehouse ||
	mongoose.model<WarehouseDocument>('Warehouse', warehouseSchema)

export default WarehouseModel
