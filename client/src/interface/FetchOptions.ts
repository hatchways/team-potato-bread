export interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: string;
  file?: File;
  credentials: RequestCredentials;
}
