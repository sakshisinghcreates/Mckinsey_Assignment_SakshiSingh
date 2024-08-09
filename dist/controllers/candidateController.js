"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCandidate = exports.updateCandidate = exports.getCandidates = exports.createCandidate = void 0;
const candidate_1 = __importDefault(require("../models/candidate"));
const createCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = new candidate_1.default(req.body);
        yield candidate.save();
        res.status(201).send(candidate);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createCandidate = createCandidate;
const getCandidates = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidates = yield candidate_1.default.find();
        res.send(candidates);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getCandidates = getCandidates;
const updateCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield candidate_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!candidate) {
            return res.status(404).send('Candidate not found');
        }
        res.send(candidate);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.updateCandidate = updateCandidate;
const deleteCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield candidate_1.default.findByIdAndDelete(req.params.id);
        if (!candidate) {
            return res.status(404).send('Candidate not found');
        }
        res.send(candidate);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteCandidate = deleteCandidate;
