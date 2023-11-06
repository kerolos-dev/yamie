//   $(function(){
//      $(".spinner").fadeOut(1000,function(){
// $("#loading").fadeOut(1000 , function(){
//     $("body").css("overflow", "auto")
// });
//   })
  $(document).ready(function () {
    $('#loading').fadeOut(1000 ,function(){
        $("body").css("overflow", "auto")

        




        $('.xnav').click(function(){        
            let textnavwidthe=$(".textnav").innerWidth();  
        
            $(".textnav").toggle(1000)
            $(".xnav").addClass("fa-align-justify");
            $(".xnav").removeClass("fa-x");
            //   if( $(".textnav").css("left")  == "0px" ){
            //     $(".textnav").animate({left:-textnavwidthe} , 1000,function(){
            //         $(".xnav").addClass("fa-align-justify");
            //         $(".xnav").removeClass("fa-x");
            //     });
            
            //   }
            //   else{
            //     $(".textnav").animate({left:'0px'} ,1000,function(){
            //         $(".xnav").addClass("fa-x");
            //         $(".xnav").removeClass("fa-align-justify");
        
            //     });
            
            //   }
        
        })
        
        $(".Search").click(function(){
        $('#roww').css({display:'none'});
        $('#searchContainer').css({display:'block'});
        })
        
        
        $("#ContactUs").click(function(){
        console.log(",fefffffefe");
        $("#contact").css({display:'block'});
        $('#roww').css({display:'none'});
        $('#rowwData').css({display:'none'});
        })
        
        
        $("#ContactUs").click(function(){
        console.log(",fefffffefe");
        $("#contact").css({display:'block'});
        $('#roww').css({display:'none'});
        $('#rowwData').css({display:'none'});
        })
        
        let arreapihome=[]
        async   function AoiSearchmealby(){
        
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        response = await response.json()
        arreapihome=response.meals
        console.log(arreapihome);
        
        let cartona0=``
        for(let i = 0; i < arreapihome.length;i++){
            
            cartona0 +=`
            <div class="col-md-3 gy-3">
            <div class=" imgimeals overflow-hidden">
            <img class="w-100" src="${arreapihome[i].strMealThumb}" alt="">
                <div class="text-center  textimgimeals  onklickk"  index="${arreapihome[i].idMeal}" >
                    <h3>
                        ${arreapihome[i].strMeal}
                    </h3>
                </div>
            </div>
                </div>
            `
        }
        document.getElementById('roww').innerHTML =cartona0;
        $(".onklickk").click(function (eventinfo){ 
            let idapi =$(eventinfo.target).attr(`index`);
            titeleapihome(idapi);
            $('#roww').addClass('d-none')
            $('#rowData').removeClass('d-none')
            $('#rowData').addClass('d-block')
        });
        }
        
        AoiSearchmealby()
        
        let aeeyapi=[] 
        async function titeleapihome(id){
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        apiResposeForEachMeal = await api.json();
        aeeyapi = apiResposeForEachMeal.meals 
        
        console.log(aeeyapi);
        
        let cartona1 = ``;
        
        for(let i = 0; i < aeeyapi.length; i++ ){
            cartona1 +=`
            <div class="col-md-4">
            <img class="w-100 rounded-3" src="${aeeyapi[i].strMealThumb}" alt="">
                <h2>${aeeyapi[i].strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h2>Instructions</h2>   
            <p>${aeeyapi[i].strInstructions}</p>
            <h3><span class="fw-bolder">Area : </span>${aeeyapi[i].strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${aeeyapi[i].strCategory}</h3>
            <h3>Recipes</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${aeeyapi[i].strCategory}</li>
            </ul>
        
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                
            </ul>
        
            <a target="_blank" href="${aeeyapi[i].strYoutube}" class="btn btn-success">Source</a>
            <a target="_blank" href="${aeeyapi[i].strMealThumb}" class="btn btn-danger">Youtube</a>
        </div></div>
            `
        }
        document.getElementById("rowData").innerHTML=cartona1;
        
        }
        
        
        let areeapiserach=[]
        async function sreach(sreach){
        
        
            let  apisreach= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${sreach}`)
            apisreach = await apisreach.json()
            areeapiserach=apisreach
            
            for(i=0 ; i < areeapiserach.length ;i++){
                let cartona=``
           if(areeapiserach[i].name.toLowerCase().includes("sreach").toLowerCase() ==  true){
            cartona +=`
            <div onclick="titeleapihome(${titeleapihome(areeapiserach[i].idMeal)})" class="col-md-3 gy-3">
            <div class=" imgimeals overflow-hidden">
            <img class="w-100" src="${areeapiserach[i].strMealThumb}" alt="">
                <div class="text-center  textimgimeals">
                    <h3>
                        ${areeapiserach[i].strMeal}
                    </h3>
                </div>
            </div>
                </div>
            `
        }
        }
        document.getElementById('roww').innerHTML=cartona;
        
        }
        
        
        
        let areeapiFLetter=[]
        async function searchByFLetter(sreach){
            let  apisreachLetter= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${sreach}`)
            apisreachLetter = await apisreachLetter.json()
            areeapiFLetter=apisreach
            
            for(i=0 ; i < areeapiFLetter.length ;i++){
                let ccartonna=``
           if(areeapiFLetter[i].name.toLowerCase().includes("sreach").toLowerCase() ==  true){
            ccartonna +=`
            <div onclick="titeleapihome(${titeleapihome(areeapiFLetter[i].idMeal)})" class="col-md-3 gy-3">
            <div class=" imgimeals overflow-hidden">
            <img class="w-100" src="${areeapiFLetter[i].strMealThumb}" alt="">
                <div class="text-center  textimgimeals">
                    <h3>
                        ${areeapiFLetter[i].strMeal}
                    </h3>
                </div>
            </div>
                </div>
            `
        }
        }
        document.getElementById('roww').innerHTML=ccartonna;
        
        }
            
        
        let  arrecategories=[]
        async   function apicategories(){
        $('.Categories').click(function(){
            $('#roww').css({display:'none'});
            $('#searchContainer').css({display:'none'});
        })
            let responsecategories = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            responsecategories = await responsecategories.json()
            arrecategories=responsecategories.categories
        console.log(responsecategories.categories);
        
            let cartona=``
            for(let i = 0; i < arrecategories.length;i++){
                
                cartona +=`
                <div  class="col-md-3 gy-3">
                <div  class=" imgimeals overflow-hidden">
                <img class="w-100" src="${arrecategories[i].strCategoryThumb}" alt="">
                    <div class="text-center  textimgimeals   onclocken"  indexx="${arrecategories[i].strCategory}">
                        <h3>
                            ${arrecategories[i].strCategory}
                        </h3>
                    </div>
                </div>
                    </div>
                `
            }
             document.getElementById('roww').innerHTML=cartona;
             $(".onclocken").click(function(eventinfo){
              
                let idcategoryy=$(eventinfo.target).attr(`indexx`);
                console.log(idcategoryy);
                apicategoriesmeals(idcategoryy);
                // $('#roww').addClass('d-none')
                // $('#rowData').removeClass('d-none')
                // $('#rowData').addClass('d-block')
        
             })
            }
            $(".Categories").click(function(){
                apicategories()
            })
           
        
        
        
        
        
        
            let  arrecategoriesmeals2=[]
            async   function apicategoriesmeals(idcategpr){
            
              
                    let responsecategories = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idcategpr}`)
                    responsecategories = await responsecategories.json()
                    arrecategoriesmeals2 = responsecategories.meals
                console.log(arrecategoriesmeals2);
                
                    let cartona7=``
                    for(let i = 0; i < arrecategoriesmeals2.length;i++){  
                        cartona7 +=`
                        <div  class="col-md-3 gy-3">
                <div   class=" imgimeals overflow-hidden">
                <img class="w-100" src="${arrecategoriesmeals2[i].strMealThumb}" alt="">
                    <div class="text-center  textimgimeals   oncickc" indxl="${arrecategoriesmeals2[i].idMeal}" >
                        <h3>
                            ${arrecategoriesmeals2[i].strMeal}
                        </h3>
                    </div>
                </div>
                    </div>
                        `
                    }
                    document.getElementById('roww').innerHTML=cartona7;
                    $(".oncickc").click(function(eventinfo){
                        console.log($(eventinfo.target).attr(`indxl`));
                      let idtitel =$(eventinfo.target).attr(`indxl`);
                      apicategortitel(idtitel)
                       $('#roww').addClass('d-none')
                $('#rowData').removeClass('d-none')
                $('#rowData').addClass('d-block')
        
        
        
                    })
                    }
        
        
        
                    
            let  arrecategortitel=[]
            async   function apicategortitel(idcategprtitel){
            
                    let responsecategories = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idcategprtitel}`)
                    responsecategories = await responsecategories.json()
                    arrecategortitel = responsecategories.meals
                console.log(arrecategortitel);
                
                    let cartona0=``
                    for(let i = 0; i < arrecategortitel.length;i++){
                        
                        cartona0  +=`
                        <div class="col-md-4">
                        <img class="w-100 rounded-3" src="${arrecategortitel[i].strMealThumb}" alt="">
                            <h2>${arrecategortitel[i].strMeal}</h2>
                    </div>
                    <div class="col-md-8">
                        <h2>Instructions</h2>   
                        <p>${arrecategortitel[i].strInstructions}</p>
                        <h3><span class="fw-bolder">Area : </span>${arrecategortitel[i].strArea}</h3>
                        <h3><span class="fw-bolder">Category : </span>${arrecategortitel[i].strCategory}</h3>
                        <h3>Recipes</h3>
                        <ul class="list-unstyled d-flex g-3 flex-wrap">
                            <li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arrecategortitel[i].strCategory}</li>
                        </ul>
                
                        <h3>Tags :</h3>
                        <ul class="list-unstyled d-flex g-3 flex-wrap">
                            
                        </ul>
                
                        <a target="_blank" href="${arrecategortitel[i].strYoutube}" class="btn btn-success">Source</a>
                        <a target="_blank" href="${arrecategortitel[i].strMealThumb}" class="btn btn-danger">Youtube</a>
                    </div></div>
                        `
                    }
                    document.getElementById("rowData").innerHTML=cartona0;
                
                    }
        
            
        
        
        
            
        
        
        
            
        let  arreforarre=[]
        async   function apiarre(){
        
            let responseArre = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            responseArre = await responseArre.json()
            arreforarre = responseArre.meals
        console.log(arreforarre);
        
             let cartona11=``
            for(let i = 0; i < arreforarre.length ;i++){
                console.log(arreforarre[i].strArea);
                cartona11 +=`
                
        <div class="col-md-3 bg-dark  "   >
        <div  class=" card overflow-hidden position-relative bg-dark" style="width: 18rem;">
            <i class="fa-solid fa-house w-100 h-100 fa-9x text-white p-5 m-2">
              <h1 class="text-smaller m-2">${arreforarre[i].strArea}</h1></i>
            
          <div class=" ochlikl  dark-layer text-center position-absolute h-100 w-100 "    indxarre="${arreforarre[i].strArea}"  >
        
          </div>
        </div>
        
        </div>
                `
                
            }
            document.getElementById('roww').innerHTML=cartona11;
        
            $(".ochlikl").click(function(eventinfo){
                console.log($(eventinfo.target).attr(`indxarre`));
        let lastapiarre=$(eventinfo.target).attr(`indxarre`)
                arreaidd(lastapiarre)
            
            })
           
            }    
            $(".Areafun").click(function(){
                apiarre()
            })
          
        
        
        
          let arreapierra=[]
        async function arreaidd(idd){
        
        
        
        
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${idd}`)
        response = await response.json()
        arreapierra=response.meals
        console.log(arreapierra);
        
        let cartona=``
        for(let i = 0; i < arreapierra.length ;i++){
            
            cartona +=`
            <div  class="col-md-3 gy-3 p-2 ">
            <div class=" imgimeals overflow-hidden">
            <img class="w-100" src="${arreapierra[i].strMealThumb}" alt="">
                <div class="text-center  textimgimeals onlck" indxarre="${arreapierra[i].idMeal}">
                    <h3>
                        ${arreapierra[i].strMeal}
                    </h3>
                </div>
            </div>
                </div>
            `
        }
        document.getElementById('roww').innerHTML=(cartona);
        $(".onlck").click(function(eventinfo){
            console.log($(eventinfo.target).attr(`indxarre`));
        let indxarre=$(eventinfo.target).attr(`indxarre`);
        arreaiddapi(indxarre);
        $('#roww').addClass('d-none');
        $('#rowData').removeClass('d-none');
        $('#rowData').addClass('d-block');
        
        
        
        
        
        })
        
        
        
        }   
        
        
        
        let  arretowapi=[]
        async   function arreaiddapi(arreaidd){
        
                let responsecategories = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${arreaidd}`)
                responsecategories = await responsecategories.json()
                arretowapi = responsecategories.meals
            console.log(arretowapi);
            
                let cartona0=``
                for(let i = 0; i < arretowapi.length;i++){
                    
                    cartona0  +=`
                    <div class="col-md-4 text-white">
                    <img class="w-50 rounded-3" src="${arretowapi[i].strMealThumb}" alt="">
                        <h2>${arretowapi[i].strMeal}</h2>
                </div>
                <div class="col-md-8">
                    <h2>Instructions</h2>   
                    <p>${arretowapi[i].strInstructions}</p>
                    <h3><span class="fw-bolder">Area : </span>${arretowapi[i].strArea}</h3>
                    <h3><span class="fw-bolder">Category : </span>${arretowapi[i].strCategory}</h3>
                    <h3>Recipes</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        <li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arretowapi[i].strCategory}</li>
                    </ul>
            
                    <h3>Tags :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        
                    </ul>
            
                    <a target="_blank" href="${arretowapi[i].strYoutube}" class="btn btn-success">Source</a>
                    <a target="_blank" href="${arretowapi[i].strMealThumb}" class="btn btn-danger">Youtube</a>
                </div></div>
                    `
                }
                document.getElementById("rowData").innerHTML=cartona0;
            
                }
        
        
        
        
        
        
                
        let arreIngredient=[];
        async function grediantsData(){
        
        const gggg =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        //  let apiResponseGrediant=[];
        let apiResponseGrediant=await gggg.json();
        arreIngredient=apiResponseGrediant
        console.log(arreIngredient);
        let cartonaa4=``
        for(let i=0;i<apiResponseGrediant.meals.length;i++){
        
           cartonaa4+=`
           
           <div class="col-md-3 gy-3">
            <div class=" imgimeals overflow-hidden noclickingredient">
            <i class="fa-solid fa-drumstick-bite w-100 h-100 fa-9x text-white p-5 " > 
             <h1 class="">${apiResponseGrediant.meals[i].strIngredient}</h1></i>
                <div class="text-center  textimgimeals  onklickk"  indxgrediants="${apiResponseGrediant.meals[i].strIngredient}" >
                    <h3>
                    
                    </h3>
                </div>
            </div>
                </div>
        `
        }
        document.getElementById("roww").innerHTML=(cartonaa4);
        $(".noclickingredient").click(function(eventinfo){
            console.log($(eventinfo.target).attr(`indxgrediants`));
            let nameapi = $(eventinfo.target).attr(`indxgrediants`);
            arreaiddgrediants (nameapi)
        
        
        
        })
        }
        
        $(".Ingredients").click(function(){
            grediantsData()
        
           })
        
        
        let arreapigrediants=[]
        async function arreaiddgrediants (iddg){
         
         
         
         let responsegred = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${iddg}`)
         responsegred = await responsegred.json()
         arreapigrediants=responsegred.meals
         console.log(arreapigrediants);
        
         let cartona=``
         for(let i = 0; i < arreapigrediants.length ;i++){
             
             cartona +=`
             <div  class="col-md-3 gy-3 p-2 ">
             <div class=" imgimeals overflow-hidden">
             <img class="w-100" src="${arreapigrediants[i].strMealThumb}" alt="">
                 <div class="text-center  textimgimeals onlckleat" indxaget="${arreapigrediants[i].idMeal}">
                     <h3>
                         ${arreapigrediants[i].strMeal}
                     </h3>
                 </div>
             </div>
                 </div>
             `
         }
         document.getElementById('roww').innerHTML=(cartona);
         $(".onlckleat").click(function(eventinfo){
             console.log($(eventinfo.target).attr(`indxaget`));
        let indxarre=$(eventinfo.target).attr(`indxaget`);
        getgredian(indxarre);
        $('#roww').addClass('d-none');
        $('#rowData').removeClass('d-none');
        $('#rowData').addClass('d-block');
        
        
        
        
        
         })
        
        
         
         }   
        
        
        
         let  arreaiddgrediantslat=[]
         async   function getgredian(arreaidd){
         
                 let responsecategories = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${arreaidd}`)
                 responsecategories = await responsecategories.json()
                 arreaiddgrediantslat = responsecategories.meals
             console.log(arreaiddgrediantslat);
             
                 let cartona0=``
                 for(let i = 0; i < arreaiddgrediantslat.length;i++){
                     
                     cartona0  +=`
                     <div class="col-md-4 text-white">
                     <img class="w-50 rounded-3" src="${arreaiddgrediantslat[i].strMealThumb}" alt="">
                         <h2>${arreaiddgrediantslat[i].strMeal}</h2>
                 </div>
                 <div class="col-md-8">
                     <h2>Instructions</h2>   
                     <p>${arreaiddgrediantslat[i].strInstructions}</p>
                     <h3><span class="fw-bolder">Area : </span>${arreaiddgrediantslat[i].strArea}</h3>
                     <h3><span class="fw-bolder">Category : </span>${arreaiddgrediantslat[i].strCategory}</h3>
                     <h3>Recipes</h3>
                     <ul class="list-unstyled d-flex g-3 flex-wrap">
                         <li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li><li class="alert alert-info m-2 p-1">${arreaiddgrediantslat[i].strCategory}</li>
                     </ul>
             
                     <h3>Tags :</h3>
                     <ul class="list-unstyled d-flex g-3 flex-wrap">
                         
                     </ul>
             
                     <a target="_blank" href="${arreaiddgrediantslat[i].strYoutube}" class="btn btn-success">Source</a>
                     <a target="_blank" href="${arreaiddgrediantslat[i].strMealThumb}" class="btn btn-danger">Youtube</a>
                 </div></div>
                     `
                 }
                 document.getElementById("rowData").innerHTML=cartona0;
             
                 }
        
        
        
        
        
        
        
        
        $("#ContactUs").click(function(){
        ("#container").css({display:"block"});
        })
        let productscontact=document.getElementById("contact");
        let productsnameInput=document.getElementById("nameInput");
        let productsemailInput=document.getElementById("emailInput");
        let productsphoneInput=document.getElementById("phoneInput");
        let productsageInput=document.getElementById("ageInput");
        let productspasswordInput =document.getElementById("passwordInput");
        let productsrepasswordInput=document.getElementById("repasswordInput");
        let productssubmitBtn=document.getElementById("submitBtn");
        
        
        let productsarre=[]
        function addvalueinput(){
        // let produt ={
        //     contact:productscontact.value,
        //     nameInput:productsnameInput.value,
        //     emailInput:productsemailInput.value,
        //     phoneInput:productsphoneInput.value,
        //     ageInput:productsageInput.value,
        //     passwordInput:productsrepasswordInput.value,
        //     repasswordInput:productsrepasswordInput.value,
        
        // }
        // productsarre.push(produt)
        // console.log(produt);
        if(productsnameInput.Value ==null){
          $("#nameAlert").css({display:"block"});
        }
        }
        
        let regex=/^[a-z-A-Z-0-9][@][a-z]$/;
        if( regex.test(productsemailInput.Value)== true   ){
            console.log("heloo");
        }
        else
        {
            $("#emailAlert").css({display:"block"});
        }
        let regexphone=/^[01][1-2-5][0-9-9]$/;
        
        if( regexphone.test(productsphoneInput.Value)== true   ){
            console.log("heloo");
        }
        else
        {
            $("#emailAlert").css({display:"block"});
        }
        let regexpassword=/^[a-z][1-9][:][@]$/;
        if( regexpassword.test(productsrepasswordInput.Value)== true ){
            console.log("heloo");
        }else
        {
            $("#passwordAlert").css({display:"block"});
        }
        

    })























    






})


    
   