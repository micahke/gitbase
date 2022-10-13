// The main class for handling application state


class Gitbase {

	private token: string; // the GitHub SSO token
	
	constructor(token: string) {
		this.token = token;
	}


	/* Returns the GitHub SSO token that the application was intitialized with */
	getToken(): string {
		return this.token;
	}

}

export {Gitbase}
