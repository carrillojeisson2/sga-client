// const SERVER_IP = "localhost:3977";

// const SERVER_IP = "195.195.194.175:3977";
const SERVER_IP = "195.195.195.111:3977";



export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api/v1`,
    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login",
        REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
        USER_ME: "user/me"
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh",
    }
}