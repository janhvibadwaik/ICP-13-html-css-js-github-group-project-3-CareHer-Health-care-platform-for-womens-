function login(){
       const email1=document.getElementById("email").value;
       const pass=document.getElementById("pass").value;
       const savedData = localStorage.getItem("userData");
         if (!email1 || !pass) {
            alert("before submitting fill all inputs");
            return;          
         }
    const userData = JSON.parse(savedData);
    const email = userData.email;
    const password = userData.password; 

 if(email1==email && pass==password){
    window.location.href="signup.html";
 }else{
    alert("email or password is incorrect..!");
 }
}
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
function emptyUserData(){
      localStorage.removeItem("userData");
      location.reload();
      }