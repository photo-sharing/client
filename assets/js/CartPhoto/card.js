Vue.component('card-photo-div', {
    data : function() {
        return {
            seen: true,
        }
    },
    props : ["testla"],
    methods : {
      reportBtn : function (_id) {
        let self = this
        console.log(_id);
        

        axios({
          method : "put",
          url : `http://localhost:3000/gcs/${_id}`
        })
        .then(response => {
          console.log(response.data);
          self.seen = false
        })
        .catch(err => {
          console.log(err);
        }) 
      }
    },
    template : `
    <div class="col-lg-4 col-md-6 mb-4" v-if="seen">  
      <div>
        <div class="card h-100">
        <img class="card-img-top" v-bind:src="testla.url" alt="asd" height="250" width="250">
        <div class="card-body">
          <h4 class="card-title">
            <h3> {{testla.description}}  </h3>
          </h4>
          <h5> {{testla.emotion}}</h5>
          <h5> {{testla.tags[0]}}, {{testla.tags[1]}}, {{testla.tags[2]}} </h5>
          <button type="button" class="btn btn-primary" v-on:click="reportBtn(testla._id)">report</button>
          <a v-bind:href="testla.url" download="look-kiss-sun" >Download</a> 
        </div>
      </div>
      </div>
      </div>
    `
    }
)
