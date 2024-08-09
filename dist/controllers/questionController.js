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
exports.deleteQuestion = exports.updateQuestion = exports.getQuestions = exports.createQuestion = void 0;
const question_1 = __importDefault(require("../models/question"));
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = new question_1.default(req.body);
        yield question.save();
        res.status(201).send(question);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createQuestion = createQuestion;
const getQuestions = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield question_1.default.find();
        res.send(questions);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getQuestions = getQuestions;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield question_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!question) {
            return res.status(404).send('Question not found');
        }
        res.send(question);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield question_1.default.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).send('Question not found');
        }
        res.send(question);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteQuestion = deleteQuestion;
