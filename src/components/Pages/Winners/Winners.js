import React, { Component } from 'react';
import GetQuery from '../../QueryService/GetQuery/GetQuery';
import Logout from '../../Auth/Logout';
import './style.css';
import Loader from '../Home/PromotionLoader/Loader';

export default class Winner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Loading: true,
            user: null,
            procesing: false
        }
    }

    async componentDidMount() {
        if (this.state.Loading) {
            this.setState({
                Loading: false
            });
            this.getData();
        }
    }

    getData = async () => {

        const query = new GetQuery();
        const result = await query.getItems();
        //console.log(result);
        if (await result) {
            //console.log(result);
            if (result.error) {
                //if (result.error === "Error while verifying token") {
                //    const resCookies = new Logout();
                //    resCookies.restartCookies();
                //    this.setState({
                //        redirect: true
                //    });
                //    window.location.reload(true);
                //}
                this.setState({
                    error: result.error
                });
            } else {
                this.setState({
                    data: result
                });
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Победители</h1>
                <h3>още текст за победителите</h3>
                <table className="table table-bordered table-hover" >
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">#</th>
                            <th className="text-center" scope="col">Дата</th>
                            <th className="text-center" scope="col">Имена на победителите</th>
                            <th className="text-center" scope="col">Вид награда</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.data ? this.state.data.map((data, index) => {
                            return <tr key={data.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.date}</td>
                                <td>{data.firstName + " " + data.lastName}</td>
                                <td>{data.reward}</td>
                            </tr>
                        })

                            : null
                        }


                    </tbody>
                </table>
                {this.state.data ? null : 
                    !this.state.error ? <Loader /> : <h3 className="loader-winners">Server is not responding</h3>}
            </div>
            )
    }
}