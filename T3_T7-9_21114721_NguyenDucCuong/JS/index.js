function check(){
    let modalinput = document.getElementsByClassName("modal-input");
    let checkresult = document.getElementsByClassName("check");
    let checkbox = document.getElementsByClassName("checkbox");
    victimid = /^BN-\d{5}$/g;
    pass = /(^.{6}$)/g;
    testma =  victimid.test(modalinput[0].value);
    testpass = pass.test(modalinput[1].value);
    sum =0;
    if(modalinput[0].value != ""){
        if(testma == true)
        {
            checkresult[0].innerHTML = "";
        }
        else{
            checkresult[0].innerHTML = "Nhập sai định dạng Mã Bệnh Nhân ( Mã bệnh nhân có định dạng BN-YYYYY, trong có BN cố định, YYYYY là 5 chữ số ).";
        }
    }
    else{
        checkresult[0].innerHTML = "Vui lòng không để trống";
    }
    if(modalinput[1].value != ""){
        if(testpass == true){
            checkresult[1].innerHTML = "";
        }
        else{
            checkresult[1].innerHTML = "Nhập sai định dạng Mật Khẩu( Mật khẩu chứa từ 6 ký tự bất kỳ trở lên ).";
        }
    }
    else{
        checkresult[1].innerHTML = "Vui lòng không để trống";
    }
    if(modalinput[2].value != ""){
        if(isDateAfterToday(modalinput[2].value) == true){
            checkresult[2].innerHTML = "";
        }
        else{
            checkresult[2].innerHTML = "Ngày khám phải sau ngày hiện tại";
        }
    }
    else{
        checkresult[2].innerHTML = "Vui lòng không để trống";
    }
    for(i=0;i<checkbox.length;i++){
        if(checkbox[i].checked){
            sum+= 500000;
        }
    }
    console.log(sum);
}
function isDateAfterToday(date) {
    return new Date(date) > new Date(new Date().toDateString());
}