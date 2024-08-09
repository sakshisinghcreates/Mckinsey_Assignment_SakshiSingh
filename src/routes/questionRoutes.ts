import { Router } from 'express';
import { createQuestion, getQuestions, updateQuestion, deleteQuestion } from '../controllers/questionController';

const router = Router();

router.post('/', createQuestion);
router.get('/', getQuestions);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

export default router;