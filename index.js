
function validitateForm() {
  var x = document.forms["MyForm"]["email"].value;
  var zavinac = x.indexOf("@");
  var bodka = x.lastIndexOf(".");
  if (zavinac<1 || bodka<zavinac+2 || bodka+2>=x.length) {
document.getElementById("demo").innerHTML="Please provide a valid email";
    return false;
}
}
