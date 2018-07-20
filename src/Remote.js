const remote = (url,param,cb) => {
    fetch(url,{
        headers:{
            'content-type': 'application/json'
        }, 
        ...param
    })
    .then(response=>{
        if(response.status === 200){
            return response.json();
        }else{
            throw new Error('Something went wrong on api server!');
        }
    })
    .then(response =>{
        if(cb){
            cb(response);
        }
    })
    .catch(error =>{
        console.error(error);
    });
};

export default remote;