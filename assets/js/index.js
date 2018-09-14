var app = new Vue({
  el: '#app',
  data: {
    message:'',
    city: '',
    temperature:'',
    weather:'',
    showWeather: false
  },
  methods: {

    findWeather : function() {
      let self = this

      axios({
          method: 'get',
          url: `http://localhost:3000/weather/${self.city}`,
      })
      .then(response => {
        self.weather= response.data.weather[0].main

        let kelvin= Number(response.data.main.temp)
        let celcius= (kelvin-273.15).toFixed(1)
        self.temperature= `${celcius} °C`
      })
    }  
  }
})