const { getAll, create, getUserId, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
		.get(getAll)
		.post(create);


usersRouter.route("/:id")
        .get(getUserId)
		.delete(remove)
		.put(update);		

module.exports = usersRouter;