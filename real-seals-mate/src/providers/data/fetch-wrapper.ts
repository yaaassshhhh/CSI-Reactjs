import { GraphQLFormattedError } from "graphql";

type Error  = {
    message : string;
    statusCode : string;
}
const customFetch = async (url: string, options: RequestInit) => {
    const accessToken = localStorage.getItem("access_token");

    const headers = options.headers as Record<string,string>;

    return await fetch(url,{
        ...options ,
        headers : {
            ...headers,
            Authorization : headers?.Authorization || `Bearer ${accessToken}` ,
            "Content-Type" : "application/json",
            "Apollo-Require-Preflight   ": "true ",
    }})
}
//It enhances the fetch function by automatically adding certain headers to every request, including an Authorization header and a content-type header.
//The accessToken is retrieved from the local storage. This is typically a token that is stored when the user logs in, and it's used to authenticate subsequent requests.
const getGraphQLErrors = (body : Record<"errors", GraphQLFormattedError[] | undefined >): Error | null => {
    if(!body){
        return {
            message : "Unknown error",
            statusCode : "INTERNAL_SERVER_ERROR"
        }
    }
    if("errors" in body){
        const errors = body?.errors;
        const messages = errors?.map((error)=> error?.message)?.join("");
        const code  = errors?.map((error)=> error?.extensions?.code)?.join("");

        return {
            message : messages || JSON.stringify(errors),
            statusCode :  code || "500",
        }
    }
    return null;
}

export const fetchWrapper = async (url: string, options: RequestInit) => { 
    const response = await customFetch(url, options);
    const responseClone = response.clone();
    const body = await responseClone.json();
    const error = getGraphQLErrors(body);

    if(error){
        throw error;
    }
    return response;
}

//The url is the endpoint we want to make a request to, and options is an object that contains any custom settings that we want to apply to the request.