function phoneNumberValidation(){
    var phoneNumber = document.getElementById(telphone).value;
    var pattern = /[0-9]{3} [0-9]{3}[0-9]{4}/;

    if (pattern.test(phoneNumber)){
        return true;
    }
    else{
        return false;
    }
}

function dateValidation(){

}


$(document).ready(function(){
    $("#telphone").on("change", function(){
        if(!phoneNumberValidation("telphone")){
            alert("Invalid phone number");
            $("#telphone").addClass("error");
        }
        else{
            $("#telphone").removeClass("error");
        }
    });

    $("#dateTimeInput").datepicker({
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date().toLocaleDateString().then(console.log(minDate)),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
    });
    $("#paymentCard").on("mouseenter", function(){
        $("#paymentCard").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#paymentCard").removeClass("showInput");
    });
});