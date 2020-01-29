$(document).ready(function(){

   

    $('#login_btn').click(function(){
        const email=$('#login_email').val();
        
        const send_param={email};
        $.post('login', send_param, function(returnData){
            alert(returnData.message);
            if(returnData.code){
                $('#login_div').hide();
                $('#logout_div').show();
            }
        });
    });

    $(document).on('click', '#logout_btn', function(){
        $.get('logout', function(returnData){
            alert(returnData.message);
            $('#logout_div').hide();
            $('#login_div').show();
        });
    });

    $('#contact_btn').click(function(){
        const name=$('#name').val();
        const email=$('#email').val();
        const comments=$('#comments').val();
        
        const send_param={name, email, comments}
        $.post('contact', send_param,(returnData)=>{
            alert(returnData.message);
            $('#name').val('');
            $('#email').val('');
            $('#comments').val('');
        });
        
    });

    // $('#Basic_btn').click(function(){
    //     basket(Basic);
    // });

    // $('#Pro_btn').click(function(){
    //     basket(Pro);
    // });

    // $('#Premium_btn').click(function(){
    //     basket(Premium);
    // });

    
    
});

function basket(product){
    const send_param={product};

    $.post('basket', send_param, function(returnData){
        alert(returnData.message);
        if(returnData.resultCode){
            $('#basket_list').html(returnData.list.toString());
    
        }else{
            $('html').scrollTop(0);
        }
    });
};
