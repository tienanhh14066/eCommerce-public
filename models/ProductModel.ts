import mongoose, { Document, Schema } from 'mongoose'

interface Product {
	name: string
	price: number
	category: string
	description: string
	brand: string
	supplier: { id: mongoose.Types.ObjectId; name: string }
	sales: Array<{ date: Date; quantity: number; totalPrice: number }>
	stock: number
}

interface ProductDocument extends Product, Document {}

const productSchema = new Schema<ProductDocument>({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	description: { type: String, required: true },
	brand: { type: String, required: true },
	supplier: {
		id: { type: mongoose.Types.ObjectId, required: true },
		name: { type: String, required: true },
	},
	sales: [
		{
			date: { type: Date, required: true },
			quantity: { type: Number, required: true },
			totalPrice: { type: Number, required: true },
		},
	],
	stock: { type: Number, required: true },
})

const ProductModel = mongoose.model<ProductDocument>('Product', productSchema)

export default ProductModel
