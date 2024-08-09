import { Router } from 'express';
import { createCandidate, getCandidates, updateCandidate, deleteCandidate } from '../controllers/candidateController';

const router = Router();

router.post('/', createCandidate);
router.get('/', getCandidates);
router.put('/:id', updateCandidate);
router.delete('/:id', deleteCandidate);

export default router;