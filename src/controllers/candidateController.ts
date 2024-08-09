import { Request, Response } from 'express';
import Candidate from '../models/candidate';

export const createCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).send(candidate);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getCandidates = async (_req: Request, res: Response) => {
  try {
    const candidates = await Candidate.find();
    res.send(candidates);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!candidate) {
      return res.status(404).send('Candidate not found');
    }
    res.send(candidate);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!candidate) {
      return res.status(404).send('Candidate not found');
    }
    res.send(candidate);
  } catch (error) {
    res.status(500).send(error);
  }
};
