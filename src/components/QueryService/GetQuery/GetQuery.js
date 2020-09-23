import React, { Component } from 'react';
import url from '../../BaseUrl/BaseUrl';
import getCookie from '../../Cookies/GetCookie';
export default class GetQuery extends Component {

    getPromotions = async () => {
        try {

            const result = await fetch(url("promotions")).then(res => res.json()).catch(err => {
                const result = {
                    error: 'server error'
                }
                return result;
            });

            if (await result) {
                //console.log(result);
                return result;
            }

        } catch (e) {
            //console.log(e);
            const result = {
                error: 'server error'
            }
            return result;
        }
    }

    getItems = async () => {

        const token = getCookie("token");
        try {

            const result = await fetch(url("alldata")).then(res => res.json()).catch(err => {
                const result = {
                    error: 'server error'
                }
                return result;
            });

            //const result = await fetch(url("alldata")).then(res => res.json());

            //const result = await fetch(url("alldata"), {
            //    "method": "POST",
            //    "headers": {
            //        'Accept': 'application/json',
            //        'Content-Type': 'application/json',
            //        'Authorization': `Bearer ${token}`
            //    }
            //}).then(res => res.json());


            //const result = await fetch(url("winners"), {
            //    "method": "POST",
            //    "headers": {
            //        'Accept': 'application/json',
            //        'Content-Type': 'application/json'
            //    }
            //}).then(res => res.json()).catch(err => {
            //    const result = {
            //        error: 'server error'
            //    }
            //    return result;
            //});

            if (await result) {
                //console.log(result);
                return result;
            }

        } catch (e) {
            //console.log(e);
            const result = {
                error: 'server error'
            }
            return result;
        }

    }
}