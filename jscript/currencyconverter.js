 var u=1.181;
 var f=1.1533;
 var g=0.8898;

 var x=document.getElementById("divisa");
 var z=x.options[x.selectedIndex].value;
 var y=document.getElementById("from").value;


 if(z=="CHF") {
   z=y*f;
   document.getElementById("tasa").value=f+" CHF";
 }


 if(z=="USD"){
     z=y*u;
     document.getElementById("tasa").value=u+" USD";
 }
 if(z=="GBP"){
   z=y*g;
   document.getElementById("tasa").value=g+" GBP";
 }

 document.getElementById("to").value=z.toFixed(2);

function cuantoEs() {
  var u=1.181;
  var f=1.1533;
  var g=0.8898;

  var x=document.getElementById("divisa");
  var z=x.options[x.selectedIndex].value;
  var y=document.getElementById("from").value;

  if(z=="CHF") {
    z=y*f;
    document.getElementById("tasa").value=f+" CHF";
  }
  if(z=="USD"){
      z=y*u;
      document.getElementById("tasa").value=u+" USD";
  }
  if(z=="GBP"){
    z=y*g;
    document.getElementById("tasa").value=g+" GBP";
  }

  document.getElementById("to").value=z.toFixed(2);

}



// {"base":"EUR","date":"2017-10-13","rates":{"GBP":0.8898,"USD":1.181}}
