import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { UserSchema } from "../models/index";

const User = mongoose.model("User", UserSchema);

class UserController {
	public addNewUser = (req: Request, res: Response) => {};

	public getUsers = (req: Request, res: Response) => {};

	public getUserById = (req: Request, res: Response) => {};

	public updateUser = (req: Request, res: Response) => {};

	public deleteUser = (req: Request, res: Response) => {};
}

export default UserController;
