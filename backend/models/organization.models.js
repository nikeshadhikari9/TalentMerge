// src/models/Organization.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  logo: {
    type: String
  },
  postedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});
organizationSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
    this.salt = salt;
    next();
  } catch (error) {
    next(error);
  }
});


const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;