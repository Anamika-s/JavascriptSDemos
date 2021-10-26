function add()
    { 
    document.getElementById("div1").innerHTML = "Its a demo";
    document.getElementById("div1").style.fontSize = "30px";
      var no1=  parseInt(document.getElementById("txtNo1").value);
      var no2= parseInt(document.getElementById("txtNo2").value);
      console.log(no1+ no2)
      document.getElementById("txtResult").value = no1 + no2;
    }
    function subtract()
    {
      var no1=  parseInt(document.getElementById("txtNo1").value);
      var no2= parseInt(document.getElementById("txtNo2").value);
      console.log(no1 - no2)
      document.getElementById("txtResult").value = no1 - no2;
    }
    function product()
    {
      var no1=  parseInt(document.getElementById("txtNo1").value);
      var no2= parseInt(document.getElementById("txtNo2").value);
      console.log(no1 * no2)
      document.getElementById("txtResult").value = no1 * no2;
    }
    function divide()
    {
      var no1=  parseInt(document.getElementById("txtNo1").value);
      var no2= parseInt(document.getElementById("txtNo2").value);
      console.log(no1 / no2)
      document.getElementById("txtResult").value = no1 / no2;
    }
    function DisplayLength()
    {
     console.log(document.getElementById("txtSentence").value.length);
    }