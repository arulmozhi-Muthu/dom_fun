function label_create(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function break_create()
{
var ele=document.createElement("br");
return ele;
}

function input_create( tagname,attr1name,attr1value,attr2name,attr2value)
{
var element=document.createElement(tagname);
element.setAttribute(attr1name,attr1value);
element.setAttribute(attr2name,attr2value);
return element;
}
function button_create(tagname,attr3name,attr3value,content)
{
    var btn=document.createElement(tagname);
    btn.setAttribute(attr3name,attr3value);
    btn.innerHTML=content;
    return btn;
}
function foo(){
   var first=document.getElementById("firstname").value
   var break1=document.createElement("br");
   document.body.append(first,break1)
    var middle=document.getElementById("middlename").value
    var break2=document.createElement("br");
    document.body.append(middle,break2)
    var last_name=document.getElementById("lastname").value
    var break3=document.createElement("br");
    document.body.append(last_name,break3)
    var elm=document.getElementById("email").value
    var break4=document.createElement("br");
     document.body.append(elm,break4)
     var password=document.getElementById("password").value
     var break5=document.createElement("br");
     document.body.append(password,break5);
}

var firstname=label_create("label","for","firstname","Firstname")
var first_break=break_create();
var first_input=input_create("input","type","text","id","firstname")

var second_break=break_create();

var middlename=label_create("label","for","middlename","middlename")
var middle_break=break_create();
var middle_input=input_create("input","type","text","id","middlename")

var third_break=break_create();

var lastname=label_create("label","for","lastname","lastname")
var last_break=break_create();
var last_input=input_create("input","type","text","id","lastname")

var fourth_break=break_create();

var email=label_create("label","for","email","email")
var email_break=break_create();
var email_input=input_create("input","type","text","id","email")

var fifth_break=break_create();

var password=label_create("label","for","password","password")
var password_break=break_create();
var password_input=input_create("input","type","text","id","password");

var sixth_break=break_create();

var button=button_create("button","type","button","click")
button.addEventListener("click",foo);


document.body.append(firstname,first_break,first_input,second_break,middlename,middle_break,middle_input,third_break,lastname,last_break,last_input,fourth_break,email,email_break,email_input,fifth_break,password,password_break,password_input,sixth_break,button)










