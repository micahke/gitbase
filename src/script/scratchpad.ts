import {GitRequest} from "../core/gitrequest";

console.log("Initializing scratchpad...");

// Example to execute a git request
GitRequest.execute({
	endpoint: 'user/repos',
	token: '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',
	requestType: 'GET',
	responseType: 'JSON'
})
