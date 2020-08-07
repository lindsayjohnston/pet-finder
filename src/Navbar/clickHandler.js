const clickHandler=(event)=>{
    console.log(event.target);
    if(event.target.id==='dogs'){
        alert('dogs!');
    }
    if(event.target.id==='cats'){
        alert('cats!');
    }
    if(event.target.id==='faves'){
        alert('faves!');
    } if(event.target.id==='search-icon'){
        alert('search!');
    } if(event.target.id==='paw'){
        alert('paw!');
    }
};

export default clickHandler;