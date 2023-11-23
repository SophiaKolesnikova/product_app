import axios, { Canceler, CancelTokenStatic } from "axios";

const API_BASE: string | undefined = "https://fakestoreapi.com";

const token: string | null = window?.localStorage.getItem("authToken");

if (token !== null && token.length) {
    axios.defaults.headers.common.Authorization = `Token ${JSON.parse(token)}`;
}

const CancelToken: CancelTokenStatic = axios.CancelToken;
export let cancel: Canceler;

const get = (path: string, params?: any) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "get",
        url: `${API_BASE}/${path}`,
        params,
        cancelToken: new CancelToken(function executor(canceler: Canceler): void {
            cancel = canceler;
        })
    });
};

const put = (path: string, body: any) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "put",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : []
    });
};

const post = (path: string, body: any) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : undefined
    });
};

const patch = (path: string, body: any) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "patch",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : undefined
    });
};

const deleted = (path: string, body: any) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "delete",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : undefined
    });
};

export default {
    GET: get,
    PUT: put,
    POST: post,
    PATCH: patch,
    DELETE: deleted
};