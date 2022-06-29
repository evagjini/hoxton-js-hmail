import './style.css'



type Email={
  from: string;
    header: string;
    content: string;
    emailAddress: string;
    img: string;
    read: boolean;
}

type State= Email[]


const state = {
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
    // feel free to add more emails here
  ]
}


let mainEl:HTMLDivElement= document.querySelector('.main')


function createEmail(item:Email){
  let ulEl:HTMLUListElement= document.createElement('ul');
  ulEl.className='emails-list';



  
   
  let liEl= document.createElement('li')
  liEl.className='emails-list__item'
  let spanEl= document.createElement('span')
  spanEl.className='emails-list__item__read-icon material-symbols-outlined'
  spanEl.textContent='mark_email_unread'


 let imgEl = document.createElement('img')
 imgEl.className='emails-list__item__image'
 imgEl.src= item.img

 let pEl= document.createElement('p')
 pEl.className= 'emails-list__item__from'
 pEl.textContent=item.from


 let  p2El= document.createElement('p')
 p2El.className='emails-list__item__content'
 p2El.textContent=item.content




 liEl.append(spanEl, imgEl,pEl,p2El)
 ulEl.append(liEl)



 mainEl.append(ulEl)

 if(item.read===true){
  liEl.remove()
  createEmail(item)
  // readEmails(item)


 }
}




function textContent(item:Email){
  let mainEl:HTMLDivElement= document.querySelector('.main')


  let section = document.createElement('section')
  section.className= 'single-email"'



let btnEl= document.createElement('button')
btnEl.className= 'single-email__button'
btnEl.textContent= '⬅Back'
btnEl.addEventListener('click', () =>{
  mainEl.textContent=''


})



}






