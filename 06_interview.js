console.log("<========Assignment 1 (using if-else Statement)==========>");
function interviewEligibility(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90 ) {
        console.log(`=> Congrates ${candidateName} you are eligible for TCS interview.`); 
    } else {
        console.log(`=> sorry ${candidateName} Unfortunately you are not eligible for TCS interview.`); 
    }
}
interviewEligibility(80,67,90,"Abhijeet");
interviewEligibility(70,89,55,"Sagar");
interviewEligibility(60,45,88,"Shubham");