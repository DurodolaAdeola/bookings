function reciept(){
    $(document).ready(function(){
        $("form#book").submit(function(event){
           // event.preventDefault();
            let firstName = ($("#firstName").val());
            let lastName = ($("#lastName").val());
            let desc = ($("#des").val());
            let date = ($("#date").val());
            let time = ($("#time").val());
            let timer = ($("#timer").val());
            let total = `${firstName} ${lastName} ${desc}  ${date} ${time} ${timer}`; 
    
           /*$(".firstName").text(firstName);
            //$(".lastName").text(firstName);
            //$(".desc").text(desc);
            //$(".date").text(date);
            //$(".time").text(time);
            //$(".timer").text(timer);*/
            
    
    
    
    
            $("#output").text(total)
        })
        
    })
}
reciept();
