import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: Object,
      required: true,
    },
    desc: {
      type: Object,
      required: false,
    },
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skills',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Categories', CategoriesSchema);
