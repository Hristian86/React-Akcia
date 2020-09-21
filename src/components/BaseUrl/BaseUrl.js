const url = (parametar) => {
    const hostedUrl = "https://postgres-pgadmin-app.herokuapp.com/api/";
    const localUrl = "http://localhost:3002/api/";

    return hostedUrl + parametar;
}

export default url;