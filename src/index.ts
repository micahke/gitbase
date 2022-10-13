import
import {Gitbase} from "./core/gitbase";

export function initializeGitbase(token: string): Gitbase {
	return new Gitbase(token);
}


