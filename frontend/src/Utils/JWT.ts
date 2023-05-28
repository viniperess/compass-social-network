import jwtDecode from "jwt-decode";

export const JWTtoken = 'tokenKey';

export function decodeToken(token: any) {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
}