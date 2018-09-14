const base_url = 'http://localhost:3000'
const data = []
const dataLocal = JSON.parse(localStorage.getItem('data'))

const cart = dataLocal ? dataLocal[0].cart : []
const token = dataLocal ? dataLocal[0].token : ''
const userId = dataLocal ? dataLocal[0].userId : ''
const totalPrice = dataLocal ? dataLocal[0].totalPrice : 0

var app = new Vue({
  el: '#app',
  data: {
    Item: [],
    Category: [],
    error: '',
    token: token,
    Cart: cart,
    cartCount: cart.length,
    totalPrice: totalPrice,

    typeDesc:"",
    image: "",
    description : "",

    dataCards: [],
    test : 'taeee'
  },
  created () {
    axios({
      method : 'get',
      url : 'http://localhost:3000/gcs'
    })
    .then(response => {
      for (let i = 0; i < response.data.data.length; i++){
        this.dataCards.push(response.data.data[i])
      }
      console.log(this.dataCards);
      
    })
    .catch(err => {
      console.log(err);
      
    })
  },
  methods : {
    upload : function () {
      console.log('masuk client');
      let formData = new FormData()
      formData.append("image", this.image)
      formData.append("description", this.description)

      
      console.log("formData=>>>>",formData)
      axios.post(base_url+'/gcs/', formData)
      .then(response => console.log("ini response =>",response))
      .catch(error => console.log(error.response))
    },
    onFileChange(e) {
      this.image = e.target.files[0];
      
      console.log(this.image)
    },
    getImage(link) {
      this.image = link.target.files[0]
      console.log("ini image", this.image);
    },
  }
  
})