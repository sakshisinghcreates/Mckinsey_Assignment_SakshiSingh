import { Request, Response } from 'express';
import Account from '../models/account';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;
    const account = new Account({ username, password, role });
    await account.save();
    res.status(201).send(account);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const account = await Account.findOne({ username });
    if (!account || !(await account.comparePassword(password))) {
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ _id: account._id, role: account.role }, 'YOUR_JWT_SECRET');
    res.send({ account, token });
  } catch (error) {
    res.status(500).send(error);
  }
};