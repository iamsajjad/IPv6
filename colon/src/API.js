import axios from "axios";


class Api extends axios{
static SendApi(){
this.post(`'/request/'`)
.then(function(respone){
console.log('respone',respone)
})

}


}

export default Api