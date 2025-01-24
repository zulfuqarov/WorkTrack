import mongoose from "mongoose";

const WorkTrackSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        // required: true
    },
    photoId: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    homeCountryAddress: {
        type: Number,
        required: true
    },
    homeCountryPhone: {
        type: String,
        required: true
    },
    emergencyContactName: {
        type: String,
        required: true
    },
    emergencyContactPhone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passportNo: {
        type: String,
        required: true
    },
    passportExpiryDate: {
        type: String,
        required: true
    },
    passportIssuingCountry: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    joiningDate: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    basicSalary: {
        type: Number,
        required: true
    },
    accommodationAllowance: {
        type: Number,
        required: true
    },
    travellingAllowance: {
        type: Number,
        required: true
    },
    others: {
        type: Number,
        required: true
    },
    currentGrossSalary: {
        type: Number,
        required: true
    },
    eligibilityForOvertime: {
        type: String,
        required: true
    },
    ministryDesignation: {
        type: String,
        required: true
    },
    ministryBasicSalary: {
        type: Number,
        required: true
    },
    ministryGrossSalary: {
        type: Number,
        required: true
    },
    laborCardNo: {
        type: String,
        required: true
    },
    laborCardIssuanceDate: {
        type: String,
        required: true
    },
    laborCardExpiry: {
        type: String,
        required: true
    },
    visaNo: {
        type: String,
        required: true
    },
    visaIssuanceDate: {
        type: String,
        required: true
    },
    visaExpiry: {
        type: String,
        required: true
    },
    emiratesIDNo: {
        type: String,
        required: true
    },
    emiratesIDIssuanceDate: {
        type: String,
        required: true
    },
    emiratesIDExpiry: {
        type: String,
        required: true
    },
    salaryPaymentMode: {
        type: String,
        required: true
    },
    bankAccountDetails: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

export default mongoose.model("WorkTrack", WorkTrackSchema);