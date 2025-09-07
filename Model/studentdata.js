import mongoose from 'mongoose';


// Define the schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: () => new Date(),  // Use a function to ensure the date is set when the document is created
    },
});

// Create the model
const StudentData = mongoose.model('studentdata', studentSchema);

// Export the model
export default StudentData;
