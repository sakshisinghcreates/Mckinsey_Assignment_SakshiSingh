import { Request, Response } from 'express';
import Question from '../models/question';

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!question) {
      return res.status(404).send('Question not found');
    }
    res.send(question);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).send('Question not found');
    }
    res.send(question);
  } catch (error) {
    res.status(500).send(error);
  }
};
 