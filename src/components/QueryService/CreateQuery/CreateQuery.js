import React, { Component } from 'react';
import url from '../../BaseUrl/BaseUrl';

export default class CreateQuery extends Component {

    Create = async (registerCode, date, email, price) => {
        try {


            let payload = {
                "email": email,
                "date": date,
                "price": price,
                "code": registerCode
            }

            const result = await fetch(url("registercode"), {
                "method": "POST",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(payload)
            }).then(res => res.json());

            if (await result) {
                return result;
            }

        } catch (e) {
            const result = {
                error: 'server error'
            }
            return result;
        }
    }
}