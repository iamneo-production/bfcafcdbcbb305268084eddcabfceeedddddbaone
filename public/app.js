function calculate()
{
    var weight_in_kg = parseFloat(document.getElementById("weight").value)
    var height_in_cm = parseFloat(document.getElementById("height").value)
    var height_in_m = height_in_cm/100

    var BMI = weight_in_kg / (height_in_m*height_in_m)

    document.getElementById("ans").innerHTML = "BMI: "+BMI.toFixed(2);
   
    if(BMI>= 18.5 && BMI <=24.9)
    {
      
      document.getElementById("status").innerText = "Status: Healthy Weight"
      document.getElementsByName("bgcolor").style.color = "green";
    }
    else
    {
      

      if(BMI<18.5){
        document.getElementById("weightStatus").innerText = "Status: Underweight"
      }
      if(BMI>=25.0 && BMI<=29.9){
        document.getElementById("weightStatus").innerText = "Status: Overweight"
      }
      if(BMI>=30.0){
        document.getElementById("status").innerText = "Status: Obesity"
      }

      document.getElementById("bgcolor").style.color = "red";
    }
}