export interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: any;
  credentials: RequestCredentials;
}
