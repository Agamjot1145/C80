studentname=[];
function submit(){
    var displaystudentarray = [];
    for(var i=1; i<=4;i++){
        var name =document.getElementById("name_of_the_student_"+i).value;
        console.log(name);
        studentname.push(name);
    }
    console.log(studentname);
    var length = studentname.length;
    console.log(length);
    for(var k=0; k<length; k++){
       displaystudentarray.push("<h4>NAME-" +studentname[k] + "</h4>");
       console.log(displaystudentarray);

    }
    console.log(displaystudentarray);
    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
    var remove = displaystudentarray.join("");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    studentname.sort();
    console.log(studentname);
    var displaystudentarraysorting = [];
    var length = studentname.length;
    console.log(length);
    for(var k=0; k<length; k++){
       displaystudentarraysorting.push("<h4>NAME-" +studentname[k] + "</h4>");
       console.log(displaystudentarraysorting);

    }
   
    var remove = displaystudentarraysorting.join("");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
}