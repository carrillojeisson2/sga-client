import { ENV } from "../utils"

export class User {
    baseApi = ENV.BASE_API;

    async getMe(accessToken) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
            const params = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }

    async createUser(accessToken, data) {
        try {
            // console.log(data)
            const formData = new FormData();

            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            })

            // if (DataTransfer.fileAvtar) {
            if (data.fileAvtar) {
                formData.append("avatar", data.fileAvtar);
            }

            const url = `${this.baseApi}/${ENV.API_ROUTES.USER}`
            const params = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: formData
            }

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;

        } catch (error) {
            throw error;
        }
    }



    async getUsers(accessToken, active = undefined) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.USERS}?active=${active}`;
            const params = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(accessToken, idUser, userData) {
        try {
            const data = userData;
            if (!data.password) {
                delete data.password;
            }

            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            if (data.fileAvatar) {
                formData.append("avatar", data.fileAvatar);
            }

            const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER}/${idUser}`;
            const params = {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: formData,
            };
            // const response = await fetch('http://localhost:3977/api/v1/user/64b14df2bb79b34417e03bec', url, params);
            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }


}