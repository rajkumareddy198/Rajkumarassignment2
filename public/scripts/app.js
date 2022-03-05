//Immediately invoked function expression
(function(){

    function Start(){
        console.log("My app started....");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }


    }

window.addEventListener("load",Start);
})();