// nguoi tao: KhoaPhung 
// ngay tao: 25/3/2018
// ver: 1.0

// alert("Xin chao");

//global scope
var billTbody = getMyEle("bill-tbody");
var spanTien = document.getElementById("xuatTien");

//Optimize document.getElementById()
function getMyEle(ele) {
    return document.getElementById(ele);
}

function getType() {
    var result;
    //get user's choice from radio button
    var uberX = getMyEle('uberX').checked;
    var uberSUV = getMyEle('uberSUV').checked;
    var uberBlack = getMyEle('uberBlack').checked;

    if (uberX) {
        result = "uberX";
    } else if (uberSUV) {
        result = "uberSUV";
    } else if (uberBlack) {
        result = "uberBlack";
    }
    return result;
}



// return sum money base on totalKm user input + waiting times
function calMoney() {
    //get kilometers, times from input boxes
    var kmField = document.getElementById("totalKm").innerHTML;
    var totalKm = parseFloat(document.getElementById("totalKm").value);
    console.log(totalKm);
    var minuteWaited = document.getElementById("minuteWaited").value;
    if (minuteWaited === "") {
        minuteWaited = 0;
    } else {
        minuteWaited = parseFloat(document.getElementById("minuteWaited").value);
    }
    console.log(minuteWaited);

    //display the div ThanhTien block when tinhTien button is clicked
    var divThanhTien = document.getElementById("divThanhTien");
    divThanhTien.style.display = "block";


    //get uber car type
    var loaiXe = getType();
    console.log(getType());

    //every type of uber has different prices
    var totalMoney;
    switch (loaiXe) {
        case 'uberX':
            if (totalKm <= 1) {
                totalMoney = (totalKm * 8000) + (minuteWaited * 2000);
            } else if (totalKm > 1 && totalKm <= 20) {
                totalMoney = 8000 + ((totalKm - 1) * 12000) + (minuteWaited * 2000);
            } else if (totalKm > 20) {
                totalMoney = 8000 + (19 * 12000) + ((totalKm - 20) * 10000) + (minuteWaited * 2000);
            }
            break;

        case 'uberSUV':
            if (totalKm <= 1) {
                totalMoney = (totalKm * 9000) + (minuteWaited * 3000);
            } else if (totalKm > 1 && totalKm <= 20) {
                totalMoney = 9000 + ((totalKm - 1) * 14000) + (minuteWaited * 3000);
            } else if (totalKm > 20) {
                totalMoney = 9000 + (19 * 14000) + ((totalKm - 20) * 12000) + (minuteWaited * 3000);
            }
            break;

        case 'uberBlack':
            if (totalKm <= 1) {
                totalMoney = (totalKm * 10000) + (minuteWaited * 4000);
            } else if (totalKm > 1 && totalKm <= 20) {
                totalMoney = 10000 + ((totalKm - 1) * 16000) + (minuteWaited * 4000);
            } else if (totalKm > 20) {
                totalMoney = 10000 + (19 * 16000) + ((totalKm - 20) * 14000) + (minuteWaited * 4000);
            }
            break;
    }

    //display total money on totalMoney span tag
    if (totalMoney > 0) {
        spanTien.innerHTML = "";
        spanTien.innerHTML = parseInt(totalMoney).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    } else if (kmField === "") {
        spanTien.innerHTML = "Bạn chưa đi được cây số nào mà :3";
    }
}


function exportBill() {
    var minuteWaited = parseFloat(document.getElementById("minuteWaited").value);
    //get kilometers, times from input boxes
    var totalKm = parseFloat(document.getElementById("totalKm").value);
    //get uber car type
    var loaiXe = getType();
    //every type of uber has different prices
    var totalMoney;
    switch (loaiXe) {
        case 'uberX':
            if (totalKm <= 1) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (totalKm + " Km"), "8.000 đ", "8.000 đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 2000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            } else if (totalKm > 1 && totalKm <= 20) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (1 + " Km"), "8.000 đ", "8.000 đ");
                createNewRow("Km 2 -> 19", (totalKm - 1 + " Km"), "12.000 đ", ((totalKm - 1) * 12000) + " đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 2000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");

            } else if (totalKm > 20) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (1 + " Km"), "8.000 đ", "8.000 đ");
                createNewRow("Km 2 -> 19", (19 + " Km"), "12.000 đ", (19 * 12000) + " đ");
                createNewRow("Km 20 trở lên", (totalKm - 20 + " Km"), "10.000 đ", ((totalKm - 20) * 10000) + " đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 2000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            }
            break;

        case 'uberSUV':
            if (totalKm <= 1) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (totalKm + " Km"), "9.000 đ", "9.000 đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 3000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            } else if (totalKm > 1 && totalKm <= 20) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (1 + " Km"), "9.000 đ", "9.000 đ");
                createNewRow("Km 2 -> 19", (19 + " Km"), "14.000 đ", (19 * 14000) + " đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 3000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            } else if (totalKm > 20) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (1 + " Km"), "9.000 đ", "9.000 đ");
                createNewRow("Km 2 -> 19", (19 + " Km"), "14.000 đ", (19 * 14000) + " đ");
                createNewRow("Km 20 trở lên", (totalKm - 20 + " Km"), "12.000 đ", ((totalKm - 20) * 12000) + " đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 3000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            }
            break;

        case 'uberBlack':
            if (totalKm <= 1) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (totalKm + " Km"), "10.000 đ", "10.000 đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 4000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            } else if (totalKm > 1 && totalKm <= 20) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (1 + " Km"), "10.000 đ", "10.000 đ");
                createNewRow("Km 2 -> 19", (19 + " Km"), "16.000 đ", (19 * 16000) + " đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 4000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            } else if (totalKm > 20) {
                billTbody.innerHTML = "";
                createNewRow("Km đầu tiên", (1 + " Km"), "10.000 đ", "10.000 đ");
                createNewRow("Km 2 -> 19", (19 + " Km"), "16.000 đ", (19 * 16000) + " đ");
                createNewRow("Km 20 trở lên", (totalKm - 20 + " Km"), "14.000 đ", ((totalKm - 20) * 14000) + " đ");
                createWaitingRow("Thời gian chờ của tài xế là : " + (minuteWaited * 4000) + " đ");
                createWaitingRow("Tổng tiền của quý khách là : " + spanTien.innerHTML);
                createWaitingRow("Chúc quý khách thượng lộ bình an !");
            }
            break;
    }
}

function createNewRow(firstColData, secondColData, thirdColData, fourthColData) {
    var billTr = document.createElement("tr");
    billTbody.appendChild(billTr);
    var firstCol = document.createElement("td");
    firstCol.innerHTML = firstColData
    billTr.appendChild(firstCol);
    var secondCol = document.createElement("td");
    secondCol.innerHTML = secondColData;
    billTr.appendChild(secondCol);
    var thirdCol = document.createElement("td");
    thirdCol.innerHTML = thirdColData;
    billTr.appendChild(thirdCol);
    var fourthCol = document.createElement("td");
    fourthCol.innerHTML = fourthColData;
    billTr.appendChild(fourthCol);
}

function createWaitingRow(data) {
    var billTr = document.createElement("tr");
    billTbody.appendChild(billTr);
    var bigRow = document.createElement("td");
    bigRow.colSpan = "4";
    bigRow.innerHTML = data;
    billTr.appendChild(bigRow);
}

getMyEle("cal-money-btn").addEventListener("click", function() {
    calMoney();
});

getMyEle("export-bill-btn").addEventListener("click", function() {
    calMoney();
    exportBill();
});

document.querySelectorAll("type").forEach(element => {
    element.addEventListener("click", function() {
        getType();
    });
});