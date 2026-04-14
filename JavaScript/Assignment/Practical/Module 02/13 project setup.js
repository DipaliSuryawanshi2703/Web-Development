  function Calculate()
        {
                var No1 = parseFloat(document.getElementById("Num1").value);          
                var No2 = parseFloat(document.getElementById("Num2").value); 
               if(isNaN(No1)|| isNaN(No2))
            {
                document.getElementById("result").innerText = "Please Enter The Valid Number";
            }
                let Sum ;
                Sum = No1 * No2;
                document.getElementById("result").innerText= "Result : " + Sum;
         }
         function ClearAll(){
            document.getElementById("Num1").value="";
             document.getElementById("Num2").value="";
             document.getElementById("result").innerText="";
         }