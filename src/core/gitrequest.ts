// This class deals with making requests to the GitHub API

import {GIT_REQUEST_CONFIG} from "../types/interfaces"


class GitRequest {

	static execute(config: GIT_REQUEST_CONFIG) {
		// exectue a git request
		console.log(`Executing query of type ${config.RESPONSE_TYPE}`)
	} 


	static parseResponseType(config: GIT_REQUEST_CONFIG) {
		switch(config.RESPONSE_TYPE) {
			case 'RAW': {
				return 'application/vnd.github.VERSION.raw'
			}
			case 'JSON': {
				return 'application/vnd.github+json'
			}
			default: {
				console.log('Not a valid response type')
			}
		}
	}


}

export {GitRequest}

