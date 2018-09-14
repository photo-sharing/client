Vue.component('cards-photo', {
    data: function () {
        return {
            data: []
        }
    },
    template: `
    
        <div class="card h-100">
            <img class="card-img-top" src="http://placehold.it/500x400" alt=>
            <div class="card-body">
                <h4 class="card-title">
                    <h3>ITEM NAME</h3>
                </h4>
                <h5>ITEM DESCRIPTION</h5>
                <h5>ITEM PRICE</h5>
                <button type="button" class="btn btn-primary">Tambahkan ke keranjang</button>
            </div>
        </div>
    
    `
})