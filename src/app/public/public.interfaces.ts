export interface UserI {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  id?: number;
}

export interface LoginResponseI {
  access_token: string;
  token_Type: string;
  expires_in: number;
}
