console.log('🟡|library|helpfulFunctions|get-date.js|')



/* ---------------------------------------------------------------------------------- */
/* ➡️ SET | Functions 
/* 
/* ---------------------------------------------------------------------------------- */


    /* ------------------------------------------------------------ */
    /* [⚠️ not finish ] Get Date Format: DD:MM:YYYY */
    /* ------------------------------------------------------------ */

    function setDate( domElement ) {

        if( existDomElement( domElement ) ) {



        } else {
            return "-1";
        }

    }

    /* ------------------------------------------------------------ */
    /* Get Date Format: e.g 1st, Jan 2025 */
    /* ------------------------------------------------------------ */
    function setDateLikeSfd( dayElement, monthElement, yearElement ) {

        // check if they exist 
        if( existDomElement( dayElement ) && existDomElement( monthElement ) && existDomElement( yearElement ) ) {

            dayElement.innerText = getDay() + getEnglishDaySuffix( getDay() );
            monthElement.innerText = getShortMonthName( getMonthIndex() );
            yearElement.innerText =  getYear();

        } else {

            console.log('❌Error:(setDateLikeSFD): given DomElement dont exist')
        }

    }


    console.log('getYEAR = ' + getYear() )
    console.log('getMonth = ' + getMonthIndex() )
    console.log('getday = ' + getDay() + getEnglishDaySuffix( getDay() ) )


/* ---------------------------------------------------------------------------------- */
/* ⬅️ GET | Functions 
/* 
/* ---------------------------------------------------------------------------------- */

function getYear() {
    
    return new Date().getFullYear();
}

function getMonthIndex() {

    return new Date().getMonth();

}

function getDay() {

    return new Date().getDate();

}

/* ------------------------------------------------------------ */
/* Styling Function to Format Date */
/* ------------------------------------------------------------ */

/* ------------------------------------------- */
/* Day 1st, 2nd, 3rd, 4th, 5th,...
/* ------------------------------------------- */

function getEnglishDaySuffix( day ) {

    switch( day ) {

        case 1:
            return "st"
        case 2:
           return "nd"
        case 3:
            return "rd"
        default:
            return "th"

    }
}

/* ------------------------------------------- */
/* Month 0=Jan, 1=Feb, 2=Mar, 4=Apr , ...
/* ------------------------------------------- */

function getShortMonthName( indexMonth ) {

    switch( indexMonth ) {

        case 0:
            return "Jan"
        case 1:
           return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Okt"
        case 10:
            return "Nov"
        case 11:
            return "Dec"

        default:
            return "-1"
        

    }

}




// Actually Date Elements
// var day = document.getElementById('js-txt-day');
// var month = document.getElementById('js-txt-month');
// var year = document.getElementById('js-txt-year');


// setEnglishFormattedDate( day, month, year )
// yearBodyFooter.innerText = getYear();