import './style.css'



type Email={
  from: string;
    header: string;
    content: string;
    emailAddress: string;
    img: string;
    read: boolean;
}

type State={
  emails:Email[],
  selectedEmail:Email|null
} 


const state : State = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    
  ],
  selectedEmail: null
}


function selectEmail (email:Email){
   email.read = true
   state.selectedEmail= email
}

function deslectEmail (){
  state.selectedEmail= null
}


function renderSingleEmailListItem(email:Email, ulEl: HTMLUListElement){


let liEl=document.createElement('li')
if (email.read) liEl.className = 'emails-list__item read'
  else liEl.className = 'emails-list__item'
  liEl.addEventListener('click', function(){
    
  selectEmail (email)
    render()
  })


  let spanEl= document.createElement('span')
  spanEl.className= 'emails-list__item__read-icon material-symbols-outlined'

  spanEl.textContent= email.read ? 'mark_email_read' : 'mark_email_unread'

  let imgEl= document.createElement('img')
  imgEl.className= 'emails-list__item__image'
  imgEl.src= email.img

  let fromEL =document.createElement('p')
  fromEL.className= 'emails-list__item__from'
  fromEL.textContent= email.from

  let contentEl = document.createElement('p')
  contentEl.className = 'emails-list__item__content'
  contentEl.textContent= email.header

  liEl.append(spanEl, imgEl, fromEL, contentEl )

  ulEl.append(liEl)
  

}
  

    function renderEmailList(){


    let mainEl= document.querySelector('main')
    if (mainEl=== null)  return
    mainEl.textContent= ''



    let title= document.createElement('h1')
    title.innerText= 'Inbox'

    let ulEl= document.createElement('ul')
    ulEl.className= 'emails-list'

for (let email of state.emails){
  renderSingleEmailListItem(email, ulEl)

}
    
mainEl.append(title, ulEl)

   }


   function renderEmailDetails(){

    let mainEl= document.querySelector('main')
    if(mainEl===null) return
    if(state.selectedEmail===null) return
    mainEl.textContent=''

    let backbtn = document.createElement('button')
    backbtn.textContent= '⬅Back'
    backbtn.addEventListener('click', function(){
      deslectEmail()
      render()
    })

    let title= document.createElement('h1')
    title.className= state.selectedEmail.from

    let imgEl= document.createElement('img')
    imgEl.className= 'email-details__image'
    imgEl.src= state.selectedEmail.img


    let headerEl= document.createElement('h2')
    headerEl.className= 'single-email__header'
    headerEl.textContent= state.selectedEmail.header


    let contentEl = document.createElement('p')
    contentEl.className= 'email-details__content'
    contentEl.textContent= state.selectedEmail.content

    mainEl.append(backbtn, title, imgEl, headerEl, contentEl)

   }
   

   function render(){
    if (state.selectedEmail) renderEmailDetails()
    else renderEmailList()
    
   }

   let logoHmail= document.querySelector('.logo')

   logoHmail?.addEventListener('mouseenter', function (){
    deslectEmail()
    render()
   })






   //// not clear about filter 

   render()












