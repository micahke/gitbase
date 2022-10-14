import {GitRequest} from "../core/gitrequest";
import {LOCAL_TOKEN} from "../util/secrets";

console.log("Initializing scratchpad...");

// Example to execute a git request
GitRequest.execute({
	endpoint: 'user/repos',
	token: LOCAL_TOKEN,
	requestType: 'GET',
	responseType: 'RAW'
}).then(response => {
	console.log(response)
})
