import mongoose, { Document, Schema } from 'mongoose'

interface Product {
	name: string
	price: number
	category: string
	description: string
	brand: string
}

interface ProductDocument extends Product, Document {}

const productSchema = new Schema<ProductDocument>({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	description: { type: String, required: true },
	brand: { type: String, required: true },
})

const ProductModel =
	mongoose.models.Product ||
	mongoose.model<ProductDocument>('Product', productSchema)

export default ProductModel
