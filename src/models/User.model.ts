import * as mongoose from 'mongoose'

import { IUserModel } from '../interfaces/User.interfaces'

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

export default mongoose.model<IUserModel>('User', UserSchema)
