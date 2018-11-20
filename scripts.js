$.ajax({
    url: "https://api.adviceslip.com/advice" ,
   
    success :function(quote) {
        console.log(quote)
        const adviceQuote = quote.data
        
        $('#popUp').html(quote)
               
    },
    error : function(request)
    {
       
        console.log(request)
    }

   
});