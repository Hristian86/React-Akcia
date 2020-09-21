import React, { Component } from 'react';
import CreateQuery from '../../QueryService/CreateQuery/CreateQuery';
import { validatePrice, validateEmail } from '../../Validations/EmailValidations';

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            emailValid: false,
            priceValid: false,
            dateValid: false,
            codeValid: false,
            lettersEmail: 0,
            lettersPrice: 0,
            submitButton: "btn btn-warning disabled"
        }
    }

    registerHandler = async (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        });

        const registerCode = e.target.registerCode.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        const price = e.target.price.value;

        if (this.state.emailValid && this.state.codeValid && this.state.priceValid && this.state.dateValid) {

            console.log(this.state.emailValid);
            console.log(this.state.priceValid);
            console.log(this.state.dateValid);
            console.log(this.state.codeValid);

            console.log(registerCode);
            console.log(date);
            console.log(email);
            console.log(price);

            const query = new CreateQuery();
            let result = "";


            result = await query.Create(registerCode, date, email, price);

            if (result.message === "created") {
                this.setState({
                    registerSuccess: true
                });
            } else {
                this.setState({
                    loading: false
                });
                let res = result.error.split(",");

                const error = document.getElementById('errorHolder');
                error.innerHTML = `<br />`;
                let server_error = false;
                const errs = res.map(data => {
                    if (data === "server error") {
                        server_error = true;
                    }
                    error.innerHTML += `${data}<br/>`;
                })

                this.setState({
                    loading: false
                });
                if (!server_error) {

                    if (email.length < 1) {
                        let errorEmail = document.getElementById('email');
                        errorEmail.innerHTML = "Email must be provided";
                    }

                    if (registerCode.length < 1) {
                        let errorCode = document.getElementById('registerCode');
                        errorCode.innerHTML = "Code must be provided";
                    }

                    if (price.length < 1) {
                        let errorPrice = document.getElementById('price');
                        errorPrice.innerHTML = "Price is unvalid";
                    }

                    if (date.length < 1) {
                        let errorDate = document.getElementById('date');
                        errorDate.innerHTML = "Date is unvalid";
                    }
                }
            }
            //error.innerHTML = `${result.error}<br/>`;
        } else {
            this.setState({
                loading: false
            });
            if (email.length < 1) {
                let errorEmail = document.getElementById('email');
                errorEmail.innerHTML = "Required";
            }

            if (registerCode.length < 1) {
                let errorCode = document.getElementById('registerCode');
                errorCode.innerHTML = "Required";
            }

            if (price.length < 1) {
                let errorPrice = document.getElementById('price');
                errorPrice.innerHTML = "Required";
            }

            if (date.length < 1) {
                let errorDate = document.getElementById('date');
                errorDate.innerHTML = "Required";
            }



        }
    }


    emailHandler = (e) => {
        let errorEmail = document.getElementById('email');
        const email = e.target.value;
        errorEmail.innerHTML = null;
        this.setState({
            lettersEmail: email.length
        });
        if (email.length < 5 || !validateEmail(email) || email.length > 80) {
            if (email.length < 5) {
                errorEmail.innerHTML = "Length must at least 5 symbols";
            } else if (email.length >= 80) {
                errorEmail.innerHTML = "You have reached maximum of 80 symbols";
            } else {
                errorEmail.innerHTML = "Invalid email";
            }
            this.setState({
                emailValid: false
            });
        } else {
            this.setState({
                emailValid: true
            });
        }

        setTimeout(() => {
            if (this.state.emailValid && this.state.codeValid && this.state.priceValid && this.state.dateValid) {
                this.setState({
                    submitButton: "btn btn-primary"
                })
            } else {
                this.setState({
                    submitButton: "btn btn-warning disabled"
                })
            }
        }, 100);
    }

    priceHandler = (e) => {
        validatePrice()

        let errorPrice = document.getElementById('price');
        const price = e.target.value;
        errorPrice.innerHTML = null;
        this.setState({
            lettersPrice: price.length
        });
        if (price.length < 1 || !validatePrice(price) || price.length > 10) {
            if (price.length < 1) {
                errorPrice.innerHTML = "Required";
            } else if (price.length >= 10) {
                errorPrice.innerHTML = "You have reached maximum of 10 numbers";
            } else {
                errorPrice.innerHTML = "Invalid price";
            }
            this.setState({
                priceValid: false
            });
        } else {
            this.setState({
                priceValid: true
            });
        }

        setTimeout(() => {
            if (this.state.emailValid && this.state.codeValid && this.state.priceValid && this.state.dateValid) {
                this.setState({
                    submitButton: "btn btn-primary"
                })
            } else {
                this.setState({
                    submitButton: "btn btn-warning disabled"
                })
            }
        }, 100);
    }

    dateHandler = (e) => {
        let errorPrice = document.getElementById('date');
        const price = e.target.value;
        errorPrice.innerHTML = null;
        this.setState({
            lettersDate: price.length
        });
        if (price.length < 9 || price.length > 12) {
            if (price.length < 9) {
                errorPrice.innerHTML = "Date is required";
            } else if (price.length >= 12) {
                errorPrice.innerHTML = "You have reached maximum of 12 symbols";
            } else {
                errorPrice.innerHTML = "Invalid date";
            }
            this.setState({
                dateValid: false
            });
        } else {
            this.setState({
                dateValid: true
            });
        }


        setTimeout(() => {
            if (this.state.emailValid && this.state.codeValid && this.state.priceValid && this.state.dateValid) {
                this.setState({
                    submitButton: "btn btn-primary"
                })
            } else {
                this.setState({
                    submitButton: "btn btn-warning disabled"
                })
            }
        }, 100);
    }


    codeHandler = (e) => {
        let errorPrice = document.getElementById('registerCode');
        const price = e.target.value;
        errorPrice.innerHTML = null;
        this.setState({
            lettersCode: price.length
        });
        if (price.length < 9 || price.length > 12) {
            if (price.length < 9) {
                errorPrice.innerHTML = "Code must be between 9 and 12 stmbols";
            } else if (price.length >= 12) {
                errorPrice.innerHTML = "You have reached maximum of 12 symbols";
            } else {
                errorPrice.innerHTML = "Invalid Code number";
            }
            this.setState({
                codeValid: false
            });
        } else {
            this.setState({
                codeValid: true
            });
        }

        setTimeout(() => {
            if (this.state.emailValid && this.state.codeValid && this.state.priceValid && this.state.dateValid) {
                this.setState({
                    submitButton: "btn btn-primary"
                })
            } else {
                this.setState({
                    submitButton: "btn btn-warning disabled"
                })
            }
        }, 100);
    }

    render() {
        if (this.state.registerSuccess) {
            return (<div className="success-register">
                <br />
                <br />
                <br />

                <h1>
                    Successfully registered
                </h1>
            </div>)
        }

        return (
            <div>

                {/*email form*/}
                <form className="row form-mobile" onSubmit={this.registerHandler}>



                    <div className="col-md-12">
                        <h6 style={{ 'float': 'left', 'marginBottom': '2px', 'paddingBottom': '0px' }}>Email * {this.state.lettersEmail} - <span id="email" className="text-danger"></span></h6>
                        <div className="form-group">
                            <input className="form-control" placeholder="Имейл адрес *" onChange={this.emailHandler} name="email" type="text" maxLength="80" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h6 style={{ 'float': 'left', 'marginBottom': '2px', 'paddingBottom': '0px', 'height': '26px' }}>Дата на касовата бележка *  {this.state.lettersDate} - <br /><span id="date" className="text-danger"></span></h6>
                        <div className="form-group">
                            <input className="form-control" placeholder="Дата на касовата бележка *" name="date" type="date" onChange={this.dateHandler} />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h6 style={{ 'float': 'left', 'marginBottom': '2px', 'paddingBottom': '0px', 'height': '26px' }}>Самата стойност, например: " 27 " или " 14.04 " * {this.state.lettersPrice} - <br /><span id="price" className="text-danger"></span></h6>
                        <div className="form-group">
                            <input className="form-control" placeholder="Стойност на покупката *" onChange={this.priceHandler} name="price" type="" maxLength="10" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <h6 style={{ 'float': 'left', 'marginBottom': '2px', 'paddingBottom': '0px' }}>Номер на касовата бележка * {this.state.lettersCode} - <span id="registerCode" className="text-danger"></span></h6>
                        <div className="form-group">
                            <input className="form-control" placeholder="Номер на касовата бележка *" name="registerCode" type="number" min="0" onChange={this.codeHandler} />
                        </div>
                    </div>


                    <div className="col-md-12">
                        <div className="form-group">
                            {this.state.loading ? <em>Loading...</em> : <input value="Register code" className={this.state.submitButton} type="submit" />}
                            <span className="text-danger" id="errorHolder"></span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}