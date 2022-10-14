require('dotenv-flow').config()

// The GitHub API url prefix
export const API_PREFIX = process.env.GITHUB_API_PREFIX as string;

// GitHub API response types
export const RESPONSE_RAW = process.env.RESPONSE_RAW as string;
export const RESPONSE_JSON = process.env.RESPONSE_JSON as string;


export const LOCAL_TOKEN = process.env.LOCAL_TOKEN as string;
