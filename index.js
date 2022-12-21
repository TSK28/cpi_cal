let input_cpi = document.getElementById("input-cpi");
let Number_of_Subject;
// this below will contain summation of grade*credit
let Total_credit_grade;
let total_credit;


document.getElementById("submit").addEventListener("click", function(){
    //Number of subject this semester
    let N = document.getElementById("input-NoOfSub").value;
    let cpi= document.getElementById("input-cpi").value;
    total_credit = document.getElementById("input-credit").value;
    Total_credit_grade = cpi*total_credit;

    Number_of_Subject = N;

    for(var i=0; i<N; i++){
        
        document.getElementById("cpi-cal").innerHTML+= (i+1)+ '<tr><th class="left-content"><input type="number" id="credit' + i +  '" class="input" name="" placeholder=" Credit on subject"></th> <th class="left-content"> <input type="number" class="input" id="grade' + i + '" placeholder="Grade on subject"></th> </tr>';
    }

    //create calculate button, when we click that button it will give the calculated cpi 

    document.getElementById("calculate").innerHTML+= '<div class="button">  <button type="button" id="ans" class="btn btn-primary">Calculate</button> </div>'

})


// so in the formula of cpi numerator consist of summation of grade*cpi and denominator consist of total credit

let numerator;
let denominator;

document.getElementById("calculate").addEventListener("click", function(){
    for(var i=0; i<Number_of_Subject; i++){
        Total_credit_grade += (document.getElementById("credit"+i).value) * (document.getElementById("grade"+i).value); 
        total_credit = (+total_credit)+ (+document.getElementById("credit"+i).value);

        console.log(document.getElementById("credit"+i).value);
        console.log(document.getElementById("grade"+i).value);

    }

    // console.log(Total_credit_grade);
    // console.log(total_credit);
    let ans = Total_credit_grade/total_credit; 
    // alert(ans);
    document.getElementById("print_ans").innerHTML = '';
    document.getElementById("print_ans").innerHTML += '<h1 class="ans_cpi">your cpi will be ' + ans+ '</h1>'

})







