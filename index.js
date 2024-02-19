fetch("https://api.escuelajs.co/api/v1/users")
.then(response => response.json())
.then(data=>{
   

      let card = "";

      for( let users of data){

         card+=`<div class="col-6 col-md-4 col-lg-4 mt-3">
                    <div class="card" style="width: 307px;display: flex;align-items: center;">
                        <img src="${users.avatar}" style="width: 186px;
                        height: 186px;
                        border-radius: 50%;padding: 20px;" class="card-img-top" alt="avatar">
                        <div class="card-body">
                        <h2 class="card-text text-center">${users.name}</h2>
                        <div class="card-text"><strong>Gmail: </strong>${users.email}</div>
                        <div class="card-text"><strong>Password: </strong>${users.password}</div>
                        </div>
                    </div>
                </div>`;
      }
        document.getElementById("contendio").innerHTML = card;
})