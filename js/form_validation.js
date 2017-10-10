$(document).ready(function(){
   $("#message").validate({
      rules: {//rules for validation
         fname: {
            required: true
               },
          lname: {
            required: true
               },
          email: {
            required: true
              email:true
               },
          message: {
            required: true
               }
         },
         messages: {
            fname: "Required Field",//messages for validation
             lname: "Required Field",
             email: "Th email address isn't Valid".
             fname: "Required Field"
         }
     });
});

