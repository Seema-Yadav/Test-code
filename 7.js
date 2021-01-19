/*Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this url via ajax and print its response

 */
fetch('http://www.example.com/api/get/1 ',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        DOMAIN:'परीक्षा'
    })
})
.then(res=>{
    return res.json()
})
.then(data=>console.log(data))
.catch(error=>console.log('error'))
