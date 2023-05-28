import { JWTtoken } from "./JWT";

export const MakeRequest = async (url: string, method: string, body: {} | undefined = undefined) => {
    console.log("TOKEN")
    console.log(JWTtoken)
    return fetch(url, {
        method,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(JWTtoken)}`
         },
        body: JSON.stringify(body || undefined)
    }).then(response => response.json());
}