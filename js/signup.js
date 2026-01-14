function passwordToggle(){
      const password=document.getElementById("password");
      const imgElement=document.getElementById("eye");            
       if(imgElement.src.includes("hide.png"))
         {
           password.type="text";
           imgElement.src="../images/view.png";             
         }else
             {
              password.type="password";
              imgElement.src="../images/hide.png";
             }
    }