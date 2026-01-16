window.onload= function(){
        const savedData = localStorage.getItem("userData");
    const formContainer=document.getElementById("form-container");
      if(savedData){
        const userData = JSON.parse(savedData);
        formContainer.innerHTML=`<div class="user-info">
     <div class="profile-heading"> 
       <img src="../images/user.jpeg" class="user-profile">Profile
     </div>
     <p><b>Name:</b> ${userData["first-name"]} ${userData["last-name"]}</p>
     <p><b>Age:</b> ${userData["age"]}yrs </p>
     <p><b>Email:</b> ${userData["email"]} </p>
     <p><b>Contact:</b> ${userData["contact"]} </p> 
     <button type="button" class="btn1" onclick="logOut()">Log Out</button>
     </div>    
     </div>`;
      }return;
      
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
function displayUserProfileAndHideForm(){
    const userInfo=document.getElementById("user-info");
    const firstName=document.getElementById("firstname");
    const lastName=document.getElementById("lastname");
    const email=document.getElementById("email");
    const contact=document.getElementById("phone-number")
    const password=document.getElementById("password");
    const age=document.getElementById("age");
    const formContainer=document.getElementById("form-container");

      const firstNameElement=firstName.value;
      const lastNameElement=lastName.value;
      const emailElement=email.value;
      const contactElement=contact.value;
      const ageElement=age.value;
      const passwordElement=password.value;

      const userData={
        "first-name": firstNameElement,
        "last-name": lastNameElement,
        "age": ageElement,
        "email": emailElement,
        "contact": contactElement,
        "password": passwordElement,
      }
       if(!firstNameElement || !lastNameElement || !emailElement || !contactElement || !ageElement || !passwordElement){
        alert("Please fill the all empty fields before submitting..." );
        return;
       }

       localStorage.setItem("userData", JSON.stringify(userData));

     
     formContainer.innerHTML=`<div class="user-info">
     <div class="profile-heading"> 
       <img src="../images/user.jpeg" class="user-profile">Profile
     </div>
     <p><b>Name:</b> ${userData["first-name"]} ${userData["last-name"]}</p>
     <p><b>Age:</b> ${userData["age"]}yrs </p>
     <p><b>Email:</b> ${userData["email"]} </p>
     <p><b>Contact:</b> ${userData["contact"]} </p> 
     <button type="button" class="btn1" onclick="logOut()">Log Out</button>
     </div>    
     </div>`;
    }
function logOut(){
      window.location.href="login.html";
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
                toggleBtn.innerText="🌙";
            }else{
                toggleDark();
                localStorage.setItem("theme","dark");
                toggleBtn.innerText="☀️";
            }
        }
        function toggleDark(){
          const firstName=document.getElementById("firstname");
          const lastName=document.getElementById("lastname");
          const contact=document.getElementById("phone-number")
          const age=document.getElementById("age");
          const passContainer=document.getElementById("pass-container");
          const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          const link=document.getElementById("link");
          const btn =document.getElementById("btn");
          const navbar= document.getElementById("navbar");
          const formContainer=document.getElementById("form-container");
           const email1=document.getElementById("email");
           const pass=document.getElementById("password"); 
            document.body.style.backgroundColor="#333333";
            body.style.color="white"; 
            email1.style.backgroundColor="#333333";
            email1.style.color="#fff"; 
            pass.style.backgroundColor="#333333";
            pass.style.color="#fff";
            formContainer.style.backgroundColor="#262626";
            btn.style.backgroundColor="#000000";
            link.style.color="white";
            navbar.style.backgroundColor="#121212";
            toggleBtn.style.backgroundColor="#000";
            toggleBtn.style.color="white"; 
            passContainer.style.backgroundColor="#333333";
            firstName.style.backgroundColor="#333333";
            firstName.style.color="#fff";
            lastName.style.backgroundColor="#333333";
            lastName.style.color="#fff";
            contact.style.backgroundColor="#333333";
            contact.style.color="#fff";
            age.style.backgroundColor="#333333";
            age.style.color="#fff";
    
                  
        }
        function toggleLight(){
          const firstName=document.getElementById("firstname");
          const lastName=document.getElementById("lastname");
          const contact=document.getElementById("phone-number")
          const age=document.getElementById("age");
         const passContainer=document.getElementById("pass-container");
         const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          const link=document.getElementById("link");
          const btn =document.getElementById("btn");
          const navbar= document.getElementById("navbar");
          const formContainer=document.getElementById("form-container");
          const email1=document.getElementById("email");
           const pass=document.getElementById("password");
            body.style.backgroundColor="#fff7fb";
             email1.style.backgroundColor="#fff7fb";
            pass.style.backgroundColor="#fff7fb";
            body.style.color="black";
            formContainer.style.backgroundColor="white";
            navbar.style.backgroundColor="#ffbfec";
            btn.style.backgroundColor="#cc0052";
            link.style.color="black";
            toggleBtn.style.color="#d85590";
            toggleBtn.style.backgroundColor="#fff";
            passContainer.style.backgroundColor="#fff7fb";
            firstName.style.backgroundColor="#fff7fb";
            firstName.style.color="#000";
            lastName.style.backgroundColor="#fff7fb";
            lastName.style.color="#000";
            contact.style.backgroundColor="#fff7fb";
            contact.style.color="#000";
            age.style.backgroundColor="#fff7fb";
            age.style.color="#000";
            
           
        }   