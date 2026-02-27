let currentTab ='all'
const tabActive = ['bg-green-500','text-white'];
const tabInactive = ['bg-transparent','border-green-300','text-slate-700','border-state-200','text-black'];


const allContiner = document.getElementById('job-card');
const emtyCard = document.getElementById('emty-card');

const interviewContener = document.getElementById('interview-contener');
const rejectedContener = document.getElementById('rejected-contener');


const allbtn = document.getElementById('btn-all');

const interviewbtn = document.getElementById('btn-interview')
const rejectedbtn = document.getElementById('btn-rejected');
function switchTab (tab){
    const tabs =["all","interview","rejected"];
    currentTab=tab;
    for (const t of tabs) {
        const tabeName = document.getElementById('btn-' + t);
        console.log(tabeName)
        if(t === tab){
            tabeName.classList.remove(...tabInactive);
            tabeName.classList.add(...tabActive);
        }else{
            tabeName.classList.add(...tabInactive);
            tabeName.classList.remove(...tabActive);
        
        }
        }
        const pages =[allContiner,emtyCard ]
        for (const section of pages) {
            section.classList.add('hidden')
        }
        emtyCard.classList.add('hidden')
         if(tab === 'all'){
             allContiner.classList.remove('hidden'); 
             rejectedContener.classList.add('hidden');
             interviewContener.classList.add('hidden'); 
             if(allContiner.children.length<1){
                emtyCard.classList.remove('hidden');
             }        
         }else if(tab === 'interview'){
            interviewContener.classList.remove('hidden');
            rejectedContener.classList.add('hidden');
            if(interviewContener.children.length<1){
                emtyCard.classList.remove('hidden');
            }
            
         }else{
            interviewContener.classList.add('hidden');
            rejectedContener.classList.remove('hidden');
            if(rejectedContener.children.length<1){
                emtyCard.classList.remove('hidden');
            }
        }
        updatesate();
 }

//add-btn
document.getElementById('job-card').addEventListener('click',function(event){
    const clickedEliment = event.target;
    const card = clickedEliment.closest('.card');
    const parent = card.parentNode;
    const status = card.querySelector('.s');
    // console.log(card);
    if(clickedEliment.classList.contains('interview-btn')){
        interviewContener.appendChild(card);
        status.innerText = 'interviewed'; 
                 

    }
    else if(clickedEliment.classList.contains('rejected-btn')){
        rejectedContener.appendChild(card);
        status.innerText = 'rejected';
    }
    else if(clickedEliment.classList.contains('delete-btn')){
        parent.removeChild(card);
    }updatesate()
})
//count function
const sidetotalcount = document.getElementById('total-card');
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
function updatesate(){
    totalCount.innerText=allContiner.children.length;
    interviewCount.innerText=interviewContener.children.length;
    rejectedCount.innerText=rejectedContener.children.length;
    const counts = {
        all:allContiner.children.length,
        interview:interviewContener.children.length,
        rejected:rejectedContener.children.length,
    }
    totalCount.innerText=counts.all;
    interviewCount.innerText=counts.interview;
    rejectedCount.innerText=counts.rejected;

    sidetotalcount.innerText = counts[currentTab];
    if(counts[currentTab]<1){
        emtyCard.classList.remove('hidden');
    }else{
        emtyCard.classList.add('hidden');
    }
}
switchTab(currentTab);
updatesate();