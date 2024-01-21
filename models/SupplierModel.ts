import mongoose, { Document, Schema } from 'mongoose'

interface Supplier {
	name: string
	contact: string
}

interface SupplierDocument extends Supplier, Document {}

const supplierSchema = new Schema<SupplierDocument>({
	name: { type: String, required: true },
	contact: { type: String, required: true },
})

const SupplierModel =
	mongoose.models.Supplier ||
	mongoose.model<SupplierDocument>('Supplier', supplierSchema)

export default SupplierModel
