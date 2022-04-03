const product_template = `<div class="col-md-4 mmi_card_container">
<div class="card rounded-sm mmi_card mmi_card--clothing">
    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex flex-row align-items-center time"> &nbsp; <i class="bi-emoji-smile"></i>
            <small class="ml-1">3x2</small>
        </div> <span class="mmi_product_favorite bi-star-fill" />
    </div>
    <div class="text-center"> <img src="$path_img" width="250"> </div>
    <div class="mmi_product_card_info">
        <div class="text-center">
            <h3>$pname</h3> <span class="lead">$ $price</span>
        </div>
    </div>
</div>
</div>`
const modal_get_user_data = `<div id="whoAreYouModal" class="modal fade show" style="display: block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Minimi te da la bienvenida en tu primera visita</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Por favor indicanos tu nombre</p>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" id="userFirstName">
                        </div>
                        <br>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Last Name" id="userLastName">
                        </div>
                        <br>
                        <button type="button" class="btn btn-primary" onclick="saveUsername()">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`
    const modal_hi_user = `<div id="hiUserModal" class="modal fade show" style="display: block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Hola!!</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Nos alegra que estes aqui</p>
                    <form>
                    <h3><b>${localStorage.getItem("mmiLocalStoreUserName")}</b></h3>
                        <br>
                        <button type="button" class="btn btn-primary" onclick="hiUserHideModal()">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`

const categories = [{name:"toy", title:"Juguetes", description: "section for toy products"},
                    {name:"clothing", title:"Ropa", description: "section for chothing products"}];

const products = [
 { id: 1, name: "Conjunto Party", price: 3000, path: "../img/conjunto-removebg-preview.png" },
 { id: 2, name: "Traje", price: 3000, path: "../img/bodyTirantes.png"},
 { id: 3, name: "Vestido pepas" , price: 1350, path: "../img/vestidoPepas.png"},
 { id: 4, name: "Conjunto rosado" , price: 1500, path: "../img/ropa7-removebg-preview.png"},
 { id: 5, name: "Conjunto Conejo" , price: 2100, path: "../img/ropa2.png"},
 { id: 6, name: "Conjunto Mickey" , price: 1900, path: "../img/ropa3.png"},
 { id: 7, name: "Conjunto lazo" , price: 1650, path: "../img/ropa8-removebg-preview.png"},
 { id: 8, name: "Conjunto invierno" , price: 2000, path: "../img/ropa9-removebg-preview.png"},
 { id: 9, name: "Monitos invierno" , price: 2700, path: "../img/ropa10-removebg-preview.png"}

];

 function startLoad(){
    validateCategory();
    loadTitle();
    loadProducts();
    if (localStorage.getItem("mmiLocalStoreUserName")=== "" || localStorage.getItem("mmiLocalStoreUserName")==null){
        let temp = document.createElement("div");
        temp.innerHTML=modal_get_user_data;
        document.body.appendChild(temp);
    }else{
        let temp = document.createElement("div");
        temp.innerHTML=modal_hi_user;
        document.body.appendChild(temp);
    }
 }
/*
 function loadProducts(){
     for (const product of products){
         let productItem = document.createElement("div");
         let productContent = product_template.replace(/\$path_img/, product.path).replace(/\$pname/, product.name).replace(/\$price/, product.price);
         document.getElementsByClassName("mmi_product_row")[0].innerHTML += productContent;
     }
 }*/

 function loadProducts(){

     fetch("/json/products.json")
     .then(function(res) {
         return res.json();
     })
     .then(function(data){
         let html ='';
         data.forEach(function(product){
             if (product.category==getCategory()){
             html += product_template.replace(/\$path_img/, product.path).replace(/\$pname/, product.name).replace(/\$price/, product.price);
             }
         })
         document.getElementsByClassName("mmi_product_row")[0].innerHTML=html;
         });
        
        }

 function saveUsername(){
     localStorage.setItem("mmiLocalStoreUserName",document.getElementById("userFirstName").value);
     localStorage.setItem("mmiLocalStoreUserLastName",document.getElementById("userLastName").value);
     document.getElementById("whoAreYouModal").remove();
 }

 function hiUserHideModal(){
    document.getElementById("hiUserModal").remove();
 }

 function getCategory(){
    const params = new URLSearchParams(window.location.search)
    return (params.get('category')==null)?categories[0]:params.get('category');
 }

 function validateCategory(){
     if (getCategoryDetail()== null){window.location.replace("/index.html");}
    
 }

 function loadTitle(){
    $(".mm-tag-title").append(getCategoryDetail().title)
 }

 function getCategoryDetail(){
     result =categories.filter(function(element){
        return element.name==getCategory();
      });
   return result.length>0?result[0]:null;
 }