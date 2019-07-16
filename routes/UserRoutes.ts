import { UserController } from "../controllers/index";

class UserRoutes {
	public userController: UserController = new UserController();

	public routes(app): void {
		app.route("/user")
			.get(this.userController.getUsers)
			.post(this.userController.addNewUser);

		app.route("/user/:userId")
			.get(this.userController.getUserById)
			.patch(this.userController.updateUser)
			.delete(this.userController.deleteUser);
	}
}

export default UserRoutes;
