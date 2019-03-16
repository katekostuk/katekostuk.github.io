var field_name = false;
var fielsd_number = false;
var checkbox = true;
activ_button();
function activ_button(){
    if(field_name && fielsd_number && checkbox){
        document.getElementById('okey').classList.remove('noactive');
    }else{
        document.getElementById('okey').classList.add('noactive');
    }
}
document.getElementById('check').onclick = function(){
    if(checkbox){
        checkbox = false;
    }else{
        checkbox = true;
    }
    activ_button();
};
document.getElementById('okey').onclick = function(){
            if(validation() && field_name && fielsd_number && checkbox){
                var frm = document.forms.advfrm;
                frm.submit(); 
            }
        };
        $(document).ready(function() {
            $("#number").keydown(function(event) {
                if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
                    (event.keyCode == 65 && event.ctrlKey === true) || 
                    (event.keyCode >= 35 && event.keyCode <= 39)) {
                         return;
                }
                else {
                    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault(); 
                    }   
                }
            });
        });
        document.getElementById('fullname').oninput = function(){
            if(document.getElementById('fullname').value.length != 0)
                {
                    if(!checkfield(document.getElementById('fullname')))
                    {
                        //document.getElementById('alname').classList.remove('active');
                        document.getElementById('errname').classList.add('error');
                        field_name = false;
                    }else{
                        //document.getElementById('alname').classList.add('active');
                        document.getElementById('errname').classList.remove('error');
                        field_name = true;
                    }
                }else{
                    //document.getElementById('alname').classList.remove('active');
                    document.getElementById('errname').classList.add('error');
                    field_name = false;
                }
                activ_button();
        };
        document.getElementById('number').oninput = function(){
            if(document.getElementById('number').value.length != 0)
                {
                    if(!checkfield(document.getElementById('number')))
                    {
                        document.getElementById('errnumber').classList.add('error');
                        fielsd_number = false;
                    }else{
                        document.getElementById('errnumber').classList.remove('error');
                        fielsd_number = true;
                    }
                }else{
                    document.getElementById('errnumber').classList.add('error');
                    fielsd_number = false;
                }
                activ_button();
        };
        function validation(){
            var allert = false;
            var fullname = document.getElementById('fullname');
            var number = document.getElementById('number');
            
                if(fullname.value.length != 0)
                {
                    if(!checkfield(fullname))
                    {
                        //document.getElementById('alname').classList.remove('active');
                        document.getElementById('errname').classList.add('error');
                        field_name = false;
                        allert = true;
                    }else{
                        //document.getElementById('alname').classList.add('active');
                        document.getElementById('errname').classList.remove('error');
                        field_name = true;
                    }
                }else{
                    //document.getElementById('alname').classList.remove('active');
                    document.getElementById('errname').classList.add('error');
                    field_name = false;
                    allert = true;
                }
                
                if(number.value.length != 0)
                {
                    if(!checkfield(number))
                    {
                        document.getElementById('errnumber').classList.add('error');
                        fielsd_number = false;
                        allert = true;
                    }else{
                        document.getElementById('errnumber').classList.remove('error');
                        fielsd_number = true;
                    }
                }else{
                    document.getElementById('errnumber').classList.add('error');
                    fielsd_number = false;
                    allert = true;
                }

            if(allert){
               return false; 
            }else{
                return true;
            }
            
        }
        
         function checkfield(val){
            var regulations = {
                fullname:{
                        step_0:/[А-яІіЇїЁё]/,
                        numb_symbol_min_0:1,
                        numb_symbol_max_0:0,
                        action_step_0:true,
                        
                        step_1:/[\s]/,
                        numb_symbol_min_1:1,
                        numb_symbol_max_1:1,
                        action_step_1:true,
                        
                        step_2:/[А-яІіЇїЁё]/,
                        numb_symbol_min_2:1,
                        numb_symbol_max_2:0,
                        action_step_2:true,
                        
                        step_3:/[\s]/,
                        numb_symbol_min_3:0,
                        numb_symbol_max_3:1,
                        action_step_3:true,
                        
                        step_4:/[А-яІіЇїЁё]/,
                        numb_symbol_min_4:0,
                        numb_symbol_max_4:0,
                        action_step_4:true
                    },
                number:{
                    step_0:/[0-9]/,
                    numb_symbol_min_0:9,
                    numb_symbol_max_0:9,
                    action_step_0:true
                }
            };
            var vall = val;
            var step = 0;
            var symbol = 0;
            for(var i=0;i<vall.value.length;i++){
                //console.log('S'+symbol);
                //console.log('i'+i);
                if(regulations[vall.id]['action_step_'+step])
                {
                   if(!regulations[vall.id]['step_'+step].test(vall.value[i]))
                   {
                       symbol--;
                       if(minvalue())
                       {
                           i--;
                           symbol=0;
                           step++;
                       }else{
                           return false;
                       }
                   }else if(regulations[vall.id]['step_'+step].test(vall.value[i])){
                        if(maxvalue()){
                            if(vall.value[i+1]){
                                symbol++;
                            }else{
                                if(minvalue()){
                                    //////////////////////////////////поместить в функцию
                                    var stepplus = step;
                                    while(regulations[vall.id]['action_step_' + (+stepplus+1)]){
                                        if(regulations[vall.id]['numb_symbol_min_'+(+stepplus+1)] != 0)
                                        {
                                            return false;
                                        }else{
                                            stepplus++; 
                                        }
                                    }
                                    ///////////////////////////////поместить в функцию
                                    return true;
                                }else{
                                    return false;
                                }
                            }
                        }else{
                            if(vall.value[i+1])
                            {
                                symbol=0;
                                step++;
                            }else{
                                if(minvalue())
                                {
                                    //////////////////////////////////поместить в функцию
                                    var stepplus = step;
                                    while(regulations[vall.id]['action_step_' + (+stepplus+1)]){
                                        if(regulations[vall.id]['numb_symbol_min_'+(+stepplus+1)] != 0)
                                        {
                                            return false;
                                        }else{
                                           stepplus++; 
                                        }
                                    }
                                    //////////////////////////////////поместить в функцию
                                    return true;
                                }else{
                                    return false;
                                }
                            }
                        }
                   }
                }else{
                    return false;
                }
            }
            function minvalue(){
                if(regulations[vall.id]['numb_symbol_min_'+step] == 0)
                {
                    return true;
                }else if(regulations[vall.id]['numb_symbol_min_'+step]<= symbol+1){
                    return true;
                }else{
                    return false;
                }
            }
            function maxvalue(){
                if(regulations[vall.id]['numb_symbol_max_'+step] == 0)
                {
                    return true;
                }else if(regulations[vall.id]['numb_symbol_max_'+step] > symbol+1){
                    return true;
                }else{
                    return false;
                }
            }
            
            return true;
        }


