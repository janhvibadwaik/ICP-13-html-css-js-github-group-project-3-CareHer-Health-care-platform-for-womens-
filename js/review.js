window.onload= function(){
        const container = document.getElementById("container");
        const savedData = localStorage.getItem("reviewData");
     const reviews = document.getElementById("review-card-container");
      if(savedData){
        container.innerHTML="";
        const reviewData = JSON.parse(savedData);
        reviews.innerHTML+=`<div class="review-card">
        <button class="btn-delete" onclick="displayFormDeleteReview()">delete</button>
        <div class="date">Date:${reviewData.date}</div>
        <div class="card-name">
            Name:${reviewData.name}
        </div>
        Rating:
        <div class="card-rating">
           ${reviewData.stars} 
        </div>
        <div class="card-comment">
            comment:<br>${reviewData.comment}
        </div>
    </div>`;
      }return;
}
window.onload= function(){
            const localStorageTheme=localStorage.getItem("theme");
            if (localStorageTheme === "dark"){
                toggleDark();
            }else{
                toggleLight();
            }
        }

function submitForm(){
        const container = document.getElementById("container");
        const reviews = document.getElementById("review-card-container");
      const name=document.getElementById("name").value;
      const date=document.getElementById("date").value;
      const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;
      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
      const comment=document.getElementById("comments").value;

      const reviewData={
        "name":name,"date":date,"stars":stars,"comment":comment};
        if(!name || !date || !rating){
        alert("Please fill the all empty fields before submitting..." );
        return;
       }

      localStorage.setItem("reviewData", JSON.stringify(reviewData));
      container.innerHTML="";
      reviews.innerHTML+=`<div class="review-card" id="review-card">
        <button class="btn-delete" onclick="displayFormDeleteReview()">delete</button>
        <div class="date">Date:${reviewData.date}</div>
        <div class="card-name">
            Name:${reviewData.name}
        </div>
        Rating:
        <div class="card-rating">
           ${reviewData.stars} 
        </div>
        <div class="card-comment">
            comment:<br>${reviewData.comment}
        </div>
    </div>`;       
}
function displayFormDeleteReview(){
        const reviews = document.getElementById("review-card-container");
        reviews.innerHTML="";
        localStorage.removeItem("reviewData");
      location.reload();
}
function updateClock() {
    const dateSpan = document.getElementById("dateSpan");
    const timeSpan = document.getElementById("timeSpan");
    const now = new Date();

   dateSpan.innerText = now.toDateString();
   timeSpan.innerText = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);
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
            const footer=document.getElementById("footer");
            const btn=document.getElementById("btn");
            const textArea=document.getElementsByClassName("textarea");
            const panel=document.getElementById("panel");
            const reviewCard=document.getElementsByClassName("review-card");
         const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          const navbar= document.getElementById("navbar"); 
            document.body.style.backgroundColor="#333333";
            body.style.color="white";
            navbar.style.backgroundColor="#121212";
            toggleBtn.style.backgroundColor="#000";
            toggleBtn.style.color="white"; 
            panel.style.backgroundColor="#262626";
            btn.style.backgroundColor="#000";
            btn.style.color="#fff";
            footer.style.backgroundColor="#121212";
            for (let i = 0; i < textArea.length; i++) {
        textArea[i].style.color = "white";
        textArea[i].style.backgroundColor="#333333";       
    }
            for (let i = 0; i < reviewCard.length; i++) {
        reviewCard[i].style.color = "white";
        reviewCard[i].style.backgroundColor="#262626";
        reviewCard[i].style.boxShadow="0 2px 4px #fff";       
    }
                  
        }
        function toggleLight(){
            const footer=document.getElementById("footer");
            const btn=document.getElementById("btn");
            const textArea=document.getElementsByClassName("textarea");
            const panel=document.getElementById("panel");
            const reviewCard=document.getElementsByClassName("review-card");
         const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          
          const navbar= document.getElementById("navbar");
            body.style.backgroundColor="#fff7fb";
            body.style.color="black";
           navbar.style.backgroundColor="#ffbfec";
            toggleBtn.style.color="#c93779;";
            toggleBtn.style.backgroundColor="#fff";
            panel.style.backgroundColor="#fff";
            btn.style.backgroundColor="#c93779";
            btn.style.color="#fff";
            footer.style.backgroundColor="#ffe6f2";
            for (let i = 0; i < textArea.length; i++) {
         textArea[i].style.color = "#000";
         textArea[i].style.backgroundColor="#fff7fb";       
    }
            for (let i = 0; i < reviewCard.length; i++) {
        reviewCard[i].style.color = "#c93779";
        reviewCard[i].style.backgroundColor="#fff";
        reviewCard[i].style.boxShadow="0 2px 4px #c93779";       
    }
           
        }