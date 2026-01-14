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
}
function displayFormDeleteReview(){
        const reviews = document.getElementById("review-card-container");
        reviews.innerHTML="";
        localStorage.removeItem("reviewData");
      location.reload();
}