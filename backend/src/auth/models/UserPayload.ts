export interface UserPayload {
  sub: string;
  user: string;
  name: string;
  iat?: number;
  exp?: number;
}
