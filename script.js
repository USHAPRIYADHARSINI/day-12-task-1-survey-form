var rating = document.getElementsByName("rate")
var star1 = rating[0]
var star2 = rating[1]
var star3 = rating[2]
var star4 = rating[3]
var star5 = rating[4]
var experience =[star1, star2, star3, star4, star5]

function star(){
    var check= experience
            .filter((e)=>e.checked)
            console.log(check.length)
        if(check.length > 1){
            experience
            .filter((e)=>e.checked=false)
            if(check.length>1){
                alert("kindly re-enter your experience field")
            }
        console.log("editing")
        }

    if(rating[0].checked==true){
        rating[0].checked=true
    }

    if(rating[1].checked==true){
        rating[0].checked=true
        rating[1].checked=true
    }
    console.log(rating[0].checked)
    if(rating[2].checked==true){
        rating[0].checked=true
        rating[1].checked=true
        rating[2].checked=true
    }
    if(rating[3].checked==true){
        rating[0].checked=true
        rating[1].checked=true
        rating[2].checked=true
        rating[3].checked=true
    }
    if(rating[4].checked==true){
        rating[0].checked=true
        rating[1].checked=true
        rating[2].checked=true
        rating[3].checked=true
        rating[4].checked=true
    }
    
}