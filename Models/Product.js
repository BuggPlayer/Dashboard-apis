const mongoose = require(mongoose);

const productSchema = mongoose.schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rishDescription: {
    type: String,
    default: "",
  },
  mrp: {
    type: Number,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },

  category: {
    type: mongoose.schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  dateCreate: {
    type: Date,
    default: Date.now(),
  },
});

//name description richDescription mrp weight image images[] brand price
//count-in-stock rating numsofreviw isFeatured dateCreated

exports.Product = mongoose.model("Product", productSchema);
