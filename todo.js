let rootE1 = document.getElementById( 'root' );

let inputE1 = document.getElementById( 'inputE1' );

let count = 0;

function statusChange ( id )
{
    let el = document.getElementById( id );

    el.classList.toggle('strike')
}


function deleteTodo ( id )
{
    let todoItem = document.getElementById( id );
    rootE1.removeChild(todoItem)
}



function addTask ()
{

    let inputValue = inputE1.value

    if ( inputValue !== '' )
    {

        count = count + 1


        let divE1 = document.createElement( 'div' )

        divE1.id = 'todo' + count

        divE1.classList.add( 'w-100', 'p-4', 'd-flex', 'flex-row', 'justify-content-start' )



        let checkbox = document.createElement( 'input' )


    
        checkbox.type = 'checkbox'
    
        divE1.appendChild( checkbox )




        let taskItem = document.createElement( 'div' )
    
        let paraE1 = document.createElement( 'p' )

        paraE1.id = "item" + count;

        paraE1.classList.add( 'm-0' )
    
        paraE1.textContent = inputValue

        inputE1.value = ""
    
        taskItem.appendChild( paraE1 )
    
        taskItem.classList.add( 'task-item-bg', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center', 'w-50', 'ml-3', 'p-2' )


        divE1.appendChild( taskItem )
    
        let btnE1 = document.createElement( 'button' )
    
        let iE1 = document.createElement( 'i' )
    
        iE1.classList.add( "far", "fa-trash-alt", 'delete-icons' )

        btnE1.appendChild( iE1 )

        btnE1.classList.add( 'btn', 'btn-transparent' )





    
        taskItem.appendChild( btnE1 )



        rootE1.appendChild( divE1 )

        btnE1.addEventListener( 'click', function ()
        {
        
            deleteTodo( divE1.id )
        
        
       
        } )






        checkbox.addEventListener( 'click', function ()
        {
        
            statusChange( paraE1.id )
        
        
       
        } )
    }

    

}







