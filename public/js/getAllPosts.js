//import urls from './BaseUrl.js';

const output = document.getElementById('addImage');
const outputContent = document.getElementById('addData');
const contents = document.getElementById('content');
const cardData = document.getElementById('cardData');
const perant = document.getElementById('perant');

let result = [];

const getData = async () => {

    result = await fetch("https://react-back-end-serv.herokuapp.com/api/all")
        .then(data => data.json())
        .catch(err => {
            console.log(err);
        });
    if (await result) {
        for (let index = 0; index < result.length; index++) {


            let datas = result[index].id;
            const child = `
            <form action="./index.html" class="fh5co-property">
            <figure>
            <img src="${result[index].image}" style="margin:auto;width:400px;height:250px;" alt="Free Website Templates FreeHTML5.co" class="img-responsive">
            <a href="#" class="tag">${result[index].category}</a>
        </figure>
        
        <div class="fh5co-property-innter">
            <h3 style="height:50px;"><a onclick="setCookieProduct(${index})" href="./Details?detailId=${index}" >${result[index].subject}</a></h3>
            <div class="price-status">
            <span class="price">$${result[index].price} </span>
        </div>
        <p style="height:155px;">${result[index].content}</p>
        </div>
        <p class="fh5co-property-specification">
            <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>  <span><strong>2</strong> Garages</span>
        </p>
        </form>`;


            //adding the messages in chatbox
            let wrapper = document.createElement("div")
            wrapper.setAttribute('class', 'col-md-4 item-block');
            //appending the child html
            wrapper.innerHTML += child;

            //appending in the parent html element
            perant.appendChild(wrapper);

        }
        // output.innerHTML = `<img src="${result[0].image}" alt="Free Website Templates FreeHTML5.co" class="img-responsive">
        // <a href="#" class="tag">For Sale</a>`;

        // outputContent.innerHTML = `<h3><a href="#">${result[0].subject}</a></h3>
        // <div class="price-status">
        //  <span class="price">$${result[0].price} </span>`;

        //  contents.innerHTML = `${result[0].content}`;
    }
    console.log(await result);

}

const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const setCookieProduct = (value) => {
    setCookie("product", value, 5);
}

//redirect(${ index })

//function redirect(index) {
//    myStorage = window.localStorage;
//    myStorage.setItem('product', index);
//    const product = myStorage.getItem("product");

//    console.log(product);
//}

getData();