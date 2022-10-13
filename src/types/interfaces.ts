

export interface GIT_REQUEST_CONFIG {
	token: string,
	requestType: 'GET' | 'PUT' | 'PATCH' | 'DELETE',
	responseType: 'RAW' | 'JSON',
	responseFormat?: string,
	endpoint: string
}



