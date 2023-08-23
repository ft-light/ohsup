import _ from 'lodash';
import bcrypt from 'bcrypt';
import express from 'express';
import User from '../models/user.js';

const router = express.Router();
const saltRounds = 10;

router.post('/register', async (req, res) => {
	const data = _.pick(req.body, ['username', 'password']);
	const isExist = await User.exists({ username: data.username });

	if (isExist) return res.status(400).send('Username already exists.');

	data.password = await bcrypt.hash(data.password, saltRounds);
	await User.create(data);

  res.status(201).end();
});

router.post('/auth', async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	if (!user) return res.status(400).send('Invalid credentials!');

	const isValid = await	bcrypt.compare(password, user.password); 
	if(!isValid) return res.status(400).send('Invalid credentials');

	const token = user.generateAuthToken();
	
	res.status(200).send({ token });
});

export default router;
