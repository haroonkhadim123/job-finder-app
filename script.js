async function getjob(){
    const input=document.querySelector("#input").value.trim();
    const container=document.querySelector('.container');
    const url=  `https://remotive.com/api/remote-jobs?search=${input}`;
    container.innerHTML='';
    if(input===''){
        container.innerHTML=`Please enter job name`
        return;
    }
    container.textContent='Loading data...'
    try {
        const respond=await fetch(url);
        const data=await respond.json();
        if(!data.jobs || data.jobs.length===0){
            container.innerHTML='No job found.Please try again';
            return;
        }
        container.textContent=''
        data.jobs.forEach(job => {
            container.innerHTML+=`  <div class="card">
                <h3>Visit: <a href="${job.url}"></a>${job.title}</h3>
                <p><strong >Title: </strong>${job.title}</p>
                <p><strong>Company Name: </strong>${job.company_name}</p>
                
                <p><strong >Category: </strong>${job.category}</p>
                <p><strong >Job type: </strong>${job.job_type}</p>
                <p><strong >Salary: </strong>${job.salary}</p>
                <div class="describe">
                    <i class="fas fa-times" id="close"></i>

                <p><strong>Description: </strong>${job.description}</p>
                 </div>
                 
                  <button class="show-more">show more</button>
                  
                </div>`
                
        });
        //  container.innerHTML = cardHTML;
                const card=document.querySelectorAll('.card');
        card.forEach(item=>{
            const describe=item.querySelector('.describe');
            const showmore=item.querySelector('.show-more');
            const close=item.querySelector('#close');
            showmore.addEventListener('click',()=>{
                describe.classList.add('describe-show')

            })
            close.addEventListener('click',()=>{
                describe.classList.remove('describe-show')
            })
        })


          
       

    } catch (error) {
        console.log("Error",error);
        container.innerHTML='Error in fetching.Please try again.'
        
    }
}
const icon=document.querySelector('#icon');
          const body=document.body;
          icon.addEventListener('click',()=>{
            body.classList.toggle('on');
           
            if(icon.classList.contains('fa-moon')){
                icon.classList.add('fa-sun')
                icon.classList.remove('fa-moon')
                 body.style.color='white';

            }
            else{
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-moon')
                 body.style.color='black';
            }
          })           
