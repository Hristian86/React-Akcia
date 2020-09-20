const registerCodeForm = document.getElementById('registerCodeId');
const displayMoreOptions = document.getElementById('displayResultsId');
const registerButton = document.getElementById('registerButton');
const winnersButton = document.getElementById('winnersButton');
const conditionsButton = document.getElementById('conditionsButton');

conditionsButton.innerHTML = `<h3 class="btn btn-warning with-arrow button-equaling" onclick="conditionsFunc()">
                                Условия.<i class="icon-arrow-right"></i>
                            </h3>`;

registerButton.innerHTML = `<h3 class="btn btn-primary with-arrow-clicked button-equaling" id="registerButton" onclick="registerCodeFunc()">
                                    Регистриране.<i class="icon-arrow-right"></i>
                                </h3>`;


winnersButton.innerHTML = `<h3 class="btn btn-success with-arrow button-equaling" onclick="winnersFunc()">
                                Победители.<i class="icon-arrow-right"></i>
                            </h3>`;

const winnersFunc = () => {
    registerCodeForm.style.display = "none";

    registerButton.innerHTML = `<h3 class="btn btn-primary with-arrow button-equaling" id="registerButton" onclick="registerCodeFunc()">
                                    Регистриране.<i class="icon-arrow-right"></i>
                                </h3>`;

    winnersButton.innerHTML = `<h3 class="btn btn-success with-arrow-clicked button-equaling" onclick="winnersFunc()">
                                Победители.<i class="icon-arrow-right"></i>
                            </h3>`;

    conditionsButton.innerHTML = `<h3 class="btn btn-warning with-arrow button-equaling" onclick="conditionsFunc()">
                                Условия.<i class="icon-arrow-right"></i>
                            </h3>`;



}

const registerCodeFunc = () => {
    registerCodeForm.style.display = "block";

    registerButton.innerHTML = `<h3 class="btn btn-primary with-arrow-clicked button-equaling" id="registerButton" onclick="registerCodeFunc()">
                                    Регистриране.<i class="icon-arrow-right"></i>
                                </h3>`;


    winnersButton.innerHTML = `<h3 class="btn btn-success with-arrow button-equaling" onclick="winnersFunc()">
                                Победители.<i class="icon-arrow-right"></i>
                            </h3>`;

    conditionsButton.innerHTML = `<h3 class="btn btn-warning with-arrow button-equaling" onclick="conditionsFunc()">
                                Условия.<i class="icon-arrow-right"></i>
                            </h3>`;

    
}

const conditionsFunc = () => {
    registerCodeForm.style.display = "none";

    registerButton.innerHTML = `<h3 class="btn btn-primary with-arrow button-equaling" id="registerButton" onclick="registerCodeFunc()">
                                    Регистриране.<i class="icon-arrow-right"></i>
                                </h3>`;

    winnersButton.innerHTML = `<h3 class="btn btn-success with-arrow button-equaling" onclick="winnersFunc()">
                                Победители.<i class="icon-arrow-right"></i>
                            </h3>`;

    conditionsButton.innerHTML = `<h3 class="btn btn-warning with-arrow-clicked button-equaling" onclick="conditionsFunc()">
                                Условия.<i class="icon-arrow-right"></i>
                            </h3>`;


}