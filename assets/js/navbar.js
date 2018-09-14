const token = localStorage.getItem('token') ? localStorage.getItem('token') : '' 

Vue.component('navbar', {
    data: function () {
      return {
        email: '',
        password: '',
        error: '',
        token: token
      }
    },
    methods: {
      login() {
        let self = this

        axios({
          method: 'post',
          url: 'http://localhost:3000/admin/login',
          data: {
            email: self.email,
            password : self.password
          }
        })
          .then(response => {
            localStorage.setItem('token', response.data.token)
            self.token = response.data.token
          })
          .catch(err => {
            if(err.response) {
              this.error = ''
              this.error = 'Login gagal'
            }
          })

      },
      logout(){
        localStorage.removeItem('token')
        this.token = ''
      }
    },
    template: `
    
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container flex-grow-1">
          <a class="navbar-brand" href="http://ecommerce.skinborderevent.ml">E-commerce</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">              
              <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#loginModal" v-if="!token">Login</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" id="logout" v-if="token" v-on:click="logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <!-- Modal Login -->
      <div class="modal fade" id="loginModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title"><i class="fas fa-user"></i> Login</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              
              <div class="container">  
                <div class="alert alert-warning" v-if="error">
                  <strong>Warning!</strong> {{ error }}
                </div>
                
                <form>
                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" v-model="email" required>
                  </div>
                  <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" v-model="password" @keyup.enter="login" required>
                  </div>
                </form>
                
              </div>
            
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="login">Login</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    <div>

    

    `
})