import express from 'express';
import { getStudents, getSpecStudent, createStudent, updateStudent, deleteStudent } from '../Controllers/students.js';
const router = express.Router();


router.get('/', getStudents);
router.get('/:roll', getSpecStudent);
router.post('/', createStudent);
router.patch('/:roll', updateStudent);
router.delete('/:roll', deleteStudent);

export default router;