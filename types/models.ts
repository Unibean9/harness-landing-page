export interface User {
  id: string;
  email: string;
  userName: string;
  role: string[];
  avatarUrl?: string;
}

export interface DecodedToken extends User {
  nbf?: number;
  exp?: number;
  iat?: number;
}
