// This class deals with making requests to the GitHub API

import {GIT_REQUEST_CONFIG} from "../types/interfaces"
import {API_PREFIX, RESPONSE_JSON, RESPONSE_RAW} from "../util/secrets"
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';


class GitRequest {

	static async execute(config: GIT_REQUEST_CONFIG) {

		const url: string = this.stitchURL(config.endpoint);
		const resType = this.parseResponseType(config) as string;
		const headers: AxiosRequestConfig =  this.generateHeaderPacket(config.token, resType)

		try {
			switch(config.requestType) {
				case('GET'): {
					const response:AxiosResponse = await axios.get(url, headers);
					return response.data;
				}
				case('PUT'): {
					const response: AxiosResponse = await axios.put(url, {}, headers);
					return response.data;
				}
				case('DELETE'): {
					const response: AxiosResponse = await axios.delete(url, headers);
					return response.data;
				}
				case('PATCH'): {
					const response: AxiosResponse = await axios.patch(url, {}, headers);
					return response.data;
				}
				default: {
					console.log('Incorrect request type');
				}
			}
		} catch(error: any) {
			console.log(error.message)
		} 
	}

	private static stitchURL(endpoint: string) {
		return `${API_PREFIX}/${endpoint}`;
	}

	private static generateHeaderPacket(token: string, responseType: string): AxiosRequestConfig {

		let packet: AxiosRequestConfig = {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: responseType
			}	
		}

		return packet;

	}


	static parseResponseType(config: GIT_REQUEST_CONFIG) {
		switch(config.responseType) {
			case 'RAW': {
				return RESPONSE_RAW;
			}
			case 'JSON': {
				return RESPONSE_JSON;
			}
			default: {
				console.log('Not a valid response type')
			}
		}
	}


}

export {GitRequest}

