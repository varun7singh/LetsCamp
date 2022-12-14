const mongoose = require("mongoose");
const slugify = require("slugify");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description can not be more than 500 characters"],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please use a valid URL with HTTP or HTTPS",
    ],
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than 20 characters"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  city: {
    type: String,
    required: [true, "Please add a city"],
    enum: [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Ahmedabad",
      "Chennai",
      "Varanasi",
      "Srinagar",
      "Aurangabad",
      "Jalandhar",
      "Bhubaneswar",
      "Salem",
      "Warangal",
      "Mira-Bhayandar",
      "Thiruvananthapuram",
      "Bhiwandi",
      "Saharanpur",
      "Gorakhpur",
      "Guntur",
      "Bikaner",
      "Amravati",
      "Noida",
      "Jamshedpur",
      "Bhilai Nagar",
      "Cuttack",
      "Firozabad",
      "Kochi",
      "Nellore",
      "Bhavnagar",
      "Dehradun",
      "Durgapur",
      "Asansol",
      "Raurkela",
      "Nanded",
      "Kolhapur",
      "Ajmer",
      "Akola",
      "Gulbarga",
      "Jamnagar",
      "Ujjain",
      "Loni",
      "Siliguri",
      "Jhansi",
      "Ulhasnagar",
      "Jammu",
      "Sangli",
      "Erode",
      "Tirun",
    ],
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other",
    ],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating must can not be more than 5"],
  },
  averageCost: Number,
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  photo: {
    type: String,
    default:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  }
});

// Create bootcamp slug from the name
BootcampSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
