const url = (parametar) => {
    const hostedUrl = "https://postgres-pgadmin-app.herokuapp.com/api/";
    const localUrl = "http://localhost:3002/api/";
    const aspDotNetCore = "https://localhost:44318/api/"
    const asdKestrel = "https://localhost:5001/api/RegisterCodeModels";

    const herokuDotNet = "https://react-back-end-serv2.herokuapp.com/api/";

    return hostedUrl + parametar;
}

export default url;