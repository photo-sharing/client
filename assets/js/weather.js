Vue.component('weather-widget', {
  data: function () {
    return {
      city: '',
      weather: '',
      temperature: ''
    }
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
        
        console.log(self.temperature)
      })
    }  
  },

  template: 
  `
  <div class="col-lg-3">  
    <div class="list-group">
      <br>
      City: <input type="text" v-model="city">
      <br>
      <button v-on:click="findWeather">Submit</button>
    </div>  
    <div>
      <br>
      <p>City: {{ city }}</p>
      <p>Weather: {{ weather }}</p>
      <p>Temperature: {{ temperature }}</p>
    </div>
  </div>
  `
})