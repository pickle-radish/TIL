// function pageClick(page){
//     const send_param={page};
//     $.get('/board/view',send_param, function(){

//     });

// };

function show_content(bo_no){
    const send_param={bo_no};

    $.post('/board/content', send_param,function(returnData){
        const result=returnData.result[0];
        let content_table=`<div id="board_table" style="width:700px; margin-left:50px;">`;
        content_table+=`<table class="table table-bordered table-striped">`;
        content_table+=`<tr><td style="width:200px;">게시글 번호</td><td>${result.bo_no+1}</td><tr>`;
        content_table+=`<tr><td>작성 일자</td><td>${result.createdAt}</td><tr>`;
        content_table+=`<tr><td>작성자</td><td>${result.name}</td></tr>`;
        content_table+=`<tr><td>내용</td><td style="height:200px;">${result.content}</td><tr>`;
        content_table+=`</table>`;
        content_table+=`<button id="board_back">뒤로가기</button>`;
        $('#board_content_table').html(content_table);
        $('#board_table').hide();
    });
};

$(document).ready(function(){

    $(document).on('click','#board_back',function(){
        // $('#board_table').show();
        // $('#board_content_table').hide();
        location.reload();
    });
    

    $('#board_view_btn').click(function(){
        window.open("/board/view", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600");
    });

    $('#board_write_btn').click(function(){
        const board_title=$('#board_title').val();
        const board_content=$('#board_content').val();
        const send_param={board_title, board_content};

        $.post('/board/write',send_param, function(returnData){
            alert(returnData.message)
        });
    });

    $('#board_write_text').click(function(){
        window.open("/board/write_form", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=700,height=600");

    });
  
    $('#paris_btn').click(function(){
        const btn=$('#paris_btn').val();
        alert(btn);
        $('#input_pro').val(btn);
        $('#myModal').modal('show');
    });

    $('#basket_btn').click(function(){
        const quantity=$('#quantity').val();
        const product=$('#product').val();
        const send_param={quantity, product};
        $.post('/basket', send_param, function(returnData){
            alert(returnData.message);
        });

    });
    
    $('#contact_btn').click(function(){
        const name=$('#name').val();
        const email=$('#email').val();
        const comments=$('#comments').val();

        const send_param={name, email, comments};
        $.post('/contact', send_param, function(returnData){
            alert(returnData.message);
        }); 
        
    });

    $('#login_btn').click(function(){
        const email=$('#login_email').val();
        const send_param={email};
        $.post('/login', send_param, function(returnData){
            alert(returnData.message);
            location.reload();
        });
        
    });

    $('#logout_btn').click(function(){
        $.post('/logout', {}, function(returnData){
            alert(returnData.message);
            location.reload();
        });
    });

});