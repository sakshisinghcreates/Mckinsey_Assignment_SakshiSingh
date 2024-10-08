"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candidateController_1 = require("../controllers/candidateController");
const router = (0, express_1.Router)();
router.post('/', candidateController_1.createCandidate);
router.get('/', candidateController_1.getCandidates);
router.put('/:id', candidateController_1.updateCandidate);
router.delete('/:id', candidateController_1.deleteCandidate);
exports.default = router;
