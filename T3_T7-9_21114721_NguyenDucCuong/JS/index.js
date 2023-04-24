function check(){
    // khai báo biến
    let modalinput = document.getElementsByClassName("modal-input");
    let checkresult = document.getElementsByClassName("check");
    let checkbox = document.getElementsByClassName("checkbox");
    let info = document.getElementsByClassName("info-container");
    let info_row = document.getElementsByClassName("info-row");
    let select = document.getElementsByClassName("form-select");
    sum =0;
    // regex test
    victimid = /^BN-\d{5}$/g;
    pass = /(^.{6}$)/g;
    testma =  victimid.test(modalinput[0].value);
    testpass = pass.test(modalinput[1].value);
    // kiểm tra mã bệnh nhân
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
    // kiểm tra mật khẩu
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
    // kiểm tra ngày
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
    // tính tổng tiền
    for(i=0;i<checkbox.length;i++){
        if(checkbox[i].checked){
            sum+= 500000;
        }
    }
    if(testma == true && testpass == true && isDateAfterToday(modalinput[2].value) == true){
        info[0].innerHTML += "<div class='info-row'><div class='info-item' style='width:10%'>"+info_row.length+"</div><div class='info-item' style='width:15%'>"+modalinput[0].value+"</div><div class='info-item' style='width:15%'>"+modalinput[1].value+"</div><div class='info-item' style='width:15%'>"+modalinput[2].value+"</div><div class='info-item' style='width:22%'>"+sum+"</div><div class='info-item' style='width:22%'>"+select[0].value+"</div></div>";
        //ẩn modal sau khi thành công
        var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal'));
        myModal.hide();
    }
}
// check ngày
function isDateAfterToday(date) {
    return new Date(date) > new Date(new Date().toDateString());
}