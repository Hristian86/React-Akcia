
const getDetail = async () => {
    //myStorage = window.localStorage;
    //const product = myStorage.getItem("product");

    const product = getCookie("product")

    let searchParams = new URLSearchParams(window.location.search);

    const id = searchParams.get('detailId');
    console.log(id)

    const result = await fetch('https://react-back-end-serv.herokuapp.com/api/all')
        .then(data => data.json())
        .catch(err => {
            console.log(err);
        });
    if (await result[id] !== null) {
        const data = result[product];
        const detailContent = document.getElementById('detailContent');
        detailContent.innerHTML = `<div class="container">

<div class="container wrapper-details d-flex">

                        <div class="row">



                        <div class="col-lg-8" style="background-color:white;">

                        
    
                        <img class="image-poster" src=${data.image} />

                                                
                        <div className="pagination d-flex justify-content-between">
            <div className="text-start">Total images: {data.state.data.length}</div>


            <div></div>

        </div>



                        </div>
            
                         <div class="col-lg-1"></div>


                            <div class="col-lg-3 container-up-right">

                                <div class="row">

                                    <div class="col-lg-5 bg-white up-right-left text-center">
                                        <p class="mt-4">User:</p>
                                        <p><img src=${data.photoURL} class="user-image" /></p>
                                        <p>Phone number</p>
                                        <p>${data.phone}</p>
                                    </div>

                                    <div class="col-lg-7 up-right-left bg-white text-center">
                                        <p class="mt-4">${data.name}</p>
                                        <p >${data.address}</p>
                                        <br />
                                        <p class="mt-4">Message goes here</p>
                                        <p>
                                            <button class="btn btn-success message-button" >Message</button>
                                        </p>
                                    </div>

                                    <div class="col-lg-12 bg-white up-right-right">
                                       
                                        <p class="mt-3">Populated place:<br /><a class="mt-1">${data.city}</a></p>
                                        <hr class="solid" />

                                        <div class="text-center"><p>Google maps here.</p></div>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div class="row mt-4" style="margin-top:38px;">
                            <div class="col-lg-8 container-down-left bg-white" style="background-color:white;">
                                <div class="image-poster">
                                    <h2><p>${data.subject}</p></h2>

                                    <hr class="solid" />

                                    <h1><p>${data.price} $</p></h1>
                                    <br />
                                    <br />
                                    <br />
                                    <p>Description</p>
                                    <p>${data.content}</p>

                                </div>

                            </div>

                            <div class="col-lg-3 container-up-right">


                        <!--second half -->


                                </div>

                            </div>


                        </div>

                    </div>

</div>`;
    }
    console.log(result[product]);
}

const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

getDetail();