import Student from "../Model/studentdata.js";

//Querying all student data:

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//Querying a specific student:

export const getSpecStudent = async (req, res) => {
    const { roll } = req.params;

    try {
        const student = await Student.findOne({ roll });
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


//Create a new Student Record:

export const createStudent = async (req, res) => {
    const student = new Student(req.body);

    try {
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



//Update a Student Record:

export const updateStudent = async (req, res) => {
    const { roll } = req.params;

    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { roll },
            req.body,
            { new: true }
        );

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



//Delete a Student Record:

export const deleteStudent = async (req, res) => {
    const { roll } = req.params;

    try {
        await Student.findOneAndDelete({ roll });
        res.status(204).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

