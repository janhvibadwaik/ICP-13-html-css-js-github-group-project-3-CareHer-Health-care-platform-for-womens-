function login(){
       const email1=document.getElementById("email").value;
       const pass=document.getElementById("pass").value;
       const savedData = localStorage.getItem("userData");
       const userData = JSON.parse(savedData);
    const email = userData.email;
    const password = userData.password;
         if (!email1 || !pass) {
            alert("before submitting fill all inputs");
            return;          
         }
 if(email1==email && pass==password){
    window.location.href="signup.html";
 }else{
    alert("email or password is incorrect..!");
 }
}
function passwordToggle(){
      const pass=document.getElementById("pass");
      const imgElement=document.getElementById("eye");            
       if(imgElement.src.includes("hide.png"))
         {
           pass.type="text";
           imgElement.src="../images/view.png";             
         }else
             {
              pass.type="password";
              imgElement.src="../images/hide.png";
             }
    }
function emptyUserData(){
      localStorage.removeItem("userData");
      location.reload();
   }
window.onload= function(){
            const localStorageTheme=localStorage.getItem("theme");
            if (localStorageTheme === "dark"){
                toggleDark();
            }else{
                toggleLight();
            }
        }
function toggleTheme(){
            const toggleBtn=document.getElementById("toggle-btn");
            const localStorageTheme=localStorage.getItem("theme");
            if(localStorageTheme === "dark"){
                toggleLight();
                localStorage.setItem("theme","light");
                toggleBtn.innerText="☀️Dark";
            }else{
                toggleDark();
                localStorage.setItem("theme","dark");
                toggleBtn.innerText="🌙Light";
            }
        }
        function toggleDark(){
         const passContainer=document.getElementById("pass-container");
         const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          const link=document.getElementById("link");
          const btn =document.getElementById("btn");
          const menu =document.getElementsByClassName("menu-1");
          const navbar= document.getElementById("navbar");
          const formContainer=document.getElementById("form-container");
           const email1=document.getElementById("email");
           const pass=document.getElementById("pass"); 
            document.body.style.backgroundColor="#333333";
            body.style.color="white"; 
            email1.style.backgroundColor="#333333";
            email1.style.color="#fff"; 
            pass.style.backgroundColor="#333333";
            pass.style.color="#fff";
            formContainer.style.backgroundColor="#262626";
            navbar.style.backgroundColor="#000000";
            btn.style.backgroundColor="#000000";
            link.style.color="white";
            toggleBtn.style.backgroundColor="black";
            toggleBtn.style.border="2px solid white";
            toggleBtn.style.color="white";
            passContainer.style.backgroundColor="#333333";
            for (let i = 0; i < menu.length; i++) {
        menu[i].style.color = "white";
    }
                  
        }
        function toggleLight(){
         const passContainer=document.getElementById("pass-container");
         const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          const link=document.getElementById("link");
          const btn =document.getElementById("btn");
          const menu =document.getElementsByClassName("menu-1");
          const navbar= document.getElementById("navbar");
          const formContainer=document.getElementById("form-container");
          const email1=document.getElementById("email");
           const pass=document.getElementById("pass");
            body.style.backgroundColor="#fff7fb";
             email1.style.backgroundColor="#fff7fb";
             email1.style.color="#000";
            pass.style.backgroundColor="#fff7fb";
            pass.style.color="#000";
            body.style.color="black";
            formContainer.style.backgroundColor="white";
            navbar.style.backgroundColor="#ffbfec";
            btn.style.backgroundColor="#cc0052";
            link.style.color="black";
            toggleBtn.style.border="2px solid #d85590";
            toggleBtn.style.color="#d85590";
            toggleBtn.style.backgroundColor="#ffbfec";
            passContainer.style.backgroundColor="#fff7fb";
            for (let i = 0; i < menu.length; i++) {
        menu[i].style.color = "#d85590";
    };
           
        }
        
