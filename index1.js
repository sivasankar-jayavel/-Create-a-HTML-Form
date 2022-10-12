
    var Fname=createlabels("label","for","FirstName","FirstName");
    var br1=createlinebreak("br");
    var Firstinput=createinput("input","type","text","id","FirstName");
    var br2=createlinebreak("br");

    var Mname=createlabels("label","for","MiddleName","MiddleName");
    var br3=createlinebreak("br");
    var Middleinput=createinput("input","type","text","id","MiddleName");
    var br4=createlinebreak("br");

    var Lname=createlabels("label","for","LastName","LastName");
    var br5=createlinebreak("br");
    var Lastinput=createinput("input","type","text","id","LastName");
    var br6=createlinebreak("br");

    var Pnumber=createlabels("label","for","PhoneNumber","PhoneNumber");
    var br7=createlinebreak("br");
    var Pninput=createinput("input","type","number","id","PhoneNumber");
    var br8=createlinebreak("br");

    var Sub=createlabels("button","onclick","extract()","Submit");

    document.body.append(Fname,br1,Firstinput,br2,Mname,br3,Middleinput,br4,Lname,br5,Lastinput,br6,Pnumber,br7,Pninput,br8,Sub);

    function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele; 
    }

    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele; 
        }
    function createlinebreak(tagname){
        var ele=document.createElement(tagname);
        return ele;
        }


      