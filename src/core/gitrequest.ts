// This class deals with making requests to the GitHub API

import {GIT_REQUEST_CONFIG} from "../types/interfaces"
import {API_PREFIX, RESPONSE_JSON, RESPONSE_RAW} from "../util/secrets"
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';


class GitRequest {

	static async execute(config: GIT_REQUEST_CONFIG) {

		const url: string = this.stitchURL(config.endpoint);
		const headers: AxiosRequestConfig =  this.generateHeaderPacket(config.token, config.responseType)

		const response: AxiosResponse = await axios.get(url, headers)
		console.log(response.data)

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

