
const url='https://jsonplaceholder.typicode.com/posts'

const get_comment = async() => {
    const response =  await fetch(url);
    //const data = await response.json()
    const posts = await response.json()

    for (post of posts){
        const{id,title,body} = post; // destructure
            
            const tr = document.createElement('tr')
            const td_title = document.createElement('td')
            td_title.innerHTML = title;
    
           const td_body = document.createElement('td')
           td_body.innerHTML = body;
    
           tr.appendChild(td_title)
           tr.appendChild(td_body)
    
           document.querySelector('table').appendChild(tr)
    

        // //create div
        // const div = document.createElement('div')
        // //create h1 
        // const h1 = document.createElement('h1')
        // //create p
        // const p = document.createElement('p')

        // div.id=id;
        // h1.innerHTML=title;
        // p.innerHTML=body;

        // div.appendChild(h1)
        // div.appendChild(p)

        // document.getElementById('root').appendChild(div)
        // break
      
        //div.innerHTML = `${title}\n${body}`;

    }
}
get_comment()

