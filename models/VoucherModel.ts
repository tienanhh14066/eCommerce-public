import mongoose, { Document, Schema } from 'mongoose';

interface Voucher {
    name: string;
    type: string;
    value: number;
  }
  
  interface VoucherDocument extends Voucher, Document {}
  
  const voucherSchema = new Schema<VoucherDocument>({
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
  });
  
  const VoucherModel = mongoose.model<VoucherDocument>('Voucher', voucherSchema);

export default VoucherModel;