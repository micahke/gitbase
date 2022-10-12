
console.log("Gitbase");

export abstract class Gitbase {

	private static token: string;


	static initialize(token: string) {
		this.token = token;
		return this;
	}


}


	
