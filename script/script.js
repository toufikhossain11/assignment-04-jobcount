
//total-card-count
const totalcard = document.getElementsByClassName('card-number');
const number = document.getElementById('total-number');
number.innerText = totalcard.length;
const totalNumbarJob = document.getElementById('total-card');
totalNumbarJob.innerText = totalcard.length;
//all-btn
document.getElementById('all-btn')
  .addEventListener('click',function(){
 const jobCard = document.getElementById('job-card');
 const btn = document.getElementById('emty-card');
 jobCard.classList.remove('hidden');
 btn.classList.add('hidden')
})

//interview-btn-clickable
document.getElementById('interview-btn')
  .addEventListener('click',function(){
 const jobCard = document.getElementById('job-card');
 const btn = document.getElementById('emty-card');
 jobCard.classList.add('hidden');
 btn.classList.remove('hidden')
})
//reject-btn-clickable
document.getElementById('rejected-btn')
  .addEventListener('click',function(){
 const jobCard = document.getElementById('job-card');
 const btn = document.getElementById('emty-card');
 jobCard.classList.add('hidden');
 btn.classList.remove('hidden')
})

// interview-btn
let interviewCount = 0;
let rejectedCount = 0;
document.querySelectorAll(".btn-interview").forEach(btn => {
  btn.addEventListener("click", function () {
    const card = this.closest(".p");
    const t = card.querySelector(".card-btn");
    t.innerHTML = `
    <button class="btn btn-xs bg-green-500">Interview</button>
    `;
    const interviewBtn = document.getElementById('new-card');
    interviewBtn.appendChild(card);

    if (card.classList.contains("interviewed")) 
      return;
    if (card.classList.contains("rejected")) {
      rejectedCount--;
      document.getElementById("rejected-count").innerText = rejectedCount;
    }
    interviewCount++;
    document.getElementById("interview-count").innerText = interviewCount;
    card.classList.add("interviewed");
    card.classList.remove("rejected");
  });
});
// reject-btn
document.querySelectorAll(".btn-rejected").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = this.closest(".p");
    const t = card.querySelector(".card-btn");

    t.innerHTML = `
    <button class="btn btn-xs bg-error">Rejected</button>
    `;
    const interviewBtn = document.getElementById('new-card');
    interviewBtn.appendChild(card);

    if (card.classList.contains("rejected")) 
      return;

    if (card.classList.contains("interviewed")) {
      interviewCount--;
      document.getElementById("interview-count").innerText = interviewCount;
    }
    rejectedCount++;
    document.getElementById("rejected-count").innerText = rejectedCount;

    card.classList.add("rejected");
    card.classList.remove("interviewed");
  });
});