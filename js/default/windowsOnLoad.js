console.log('🟡|default|windowsOnLoad.js|')


/* ------------------------------------------------------------------------ */
/* Initialize: Dom Element at the beginning 
/* ------------------------------------------------------------------------ */

/* ---------------------------------------------- */
/* Date | Day, Month, Year 
/* ---------------------------------------------- */

var divDay = document.getElementById('js-day');
var divMonth = document.getElementById('js-month');
var divYear = document.getElementById('js-year');






/* ------------------------------------------------------------------------ */
/* Execute: By Starting the Webpage
/* ------------------------------------------------------------------------ */

window.addEventListener( 'load', ()=> {


    setDateLikeSfd( divDay, divMonth, divYear )

})