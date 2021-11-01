// save the registration whenever you click the submit
var guestGroup = new Array();
function saveReg() {
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkIn: $('#checkin').val(),
        checkout:$('#checkout').val(),
        roomType: $('#room').val(),
        display: function(){
            return this.name+" reserved "+ this.roomType+" at " + this.checkIn;
        }
    };
    guestGroup.push(guest);
    console.log(guest.display());
}



$('#submit').click(saveReg);
function displayR(){
    for(i in guestGroup){
        var guest = guestGroup[i];
        console.log(guest.display());
    }
}
$('#lists').click(displayR);