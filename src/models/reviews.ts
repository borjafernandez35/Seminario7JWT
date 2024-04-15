const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  autorRef: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tittle: { type: String },
  coment: { type: Boolean, default: false },
  valoration:{type: Number, requiered:true}
});

export default mongoose.model("Todo", ReviewSchema);