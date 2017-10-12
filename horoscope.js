/**
 * Created by h205p2 on 9/29/17.
 */
/* Nora Coates
* Horoscope Project
* Finished and submitted on October 12, 2017
*/

var BD;
var BM;
var NUM_SIGN;
var NAME;
var DATE = new Date();
var CM = DATE.getMonth()+1;
var CD = DATE.getDate();
var IS_BIRTHDAY;

function onSubmit() {
    BM = document.getElementById("bMonth").value;
    BD = document.getElementById("bDay").value;
    if (!valDates()) {
        document.getElementById("outputted").innerHTML = determineHoroscope(determineSign(BM,BD));
        document.getElementById("img").innerHTML = determineImage(NUM_SIGN);
    } else {
        document.getElementById("outputted").innerHTML = "Please check the name and date fields. Did you enter your name?";
    }
}


function valDates() {
    var fakeDate = false;
    NAME = document.getElementById("name").value;
    if (NAME === "What is your name?") {
        fakeDate = true;
    }
    var month = parseInt(BM);
    var day = parseInt(BD);
    if (month === 4 || month === 6 || month === 9 || month === 11){
        if(day === 31) {
            fakeDate = true;
        }
    }
    if (month === 2 && day >= 28) {
        fakeDate = true;
    }
    if (CM === month && CD === day) {
        IS_BIRTHDAY = true;
    }
    return fakeDate;
}


function determineSign(x, y) {
    //clean up
    var month = parseInt(x);
    var day = parseInt(y);
    if((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        NUM_SIGN = 2;
    }
    if((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        NUM_SIGN = 3;
    }
    if((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        NUM_SIGN = 4;
    }
    if((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        NUM_SIGN = 5;
    }
    if((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        NUM_SIGN = 6;
    }
    if((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        NUM_SIGN = 7;
    }
    if((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        NUM_SIGN = 8;
    }
    if((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        NUM_SIGN = 9;
    }
    if((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        NUM_SIGN = 10;
    }
    if((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        NUM_SIGN = 11;
    }
    if((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        NUM_SIGN = 12;
    }
    if((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        NUM_SIGN = 1;
    }
    return NUM_SIGN;
}


function determineHoroscope(NUM_SIGN) {
    var signList = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
        "Sagittarius", "Capricorn"];
    var horoList = ["You will have good luck", "You will be devoured", "You are secretly a goblin",
        "Loved ones must be trusted", "Loved ones cannot be trusted", "Stay calm; they can smell fear",
    "Hold onto hope", "Avoid salads", "You will get an A on your next test",
        "Be the best version of you (the one from Earth-616)", "Do not go quietly", "Bravery is a virtue (so is a quick retreat)"];
    if(IS_BIRTHDAY) {
        return "Happy Birthday, " + NAME + "! Your horoscope for " + signList[NUM_SIGN-1] + " is: " + horoList[NUM_SIGN-1] +"!";
    } else {
        return "Dear " + NAME + ", your horoscope for " + signList[NUM_SIGN-1] + " is: " + horoList[NUM_SIGN-1] +"!";
    }

}


function determineImage(NUM_SIGN) {
    var aqu = 'aquarius';
    var pis = 'pisces';
    var ari = 'aries';
    var tau = 'taurus';
    var gem = 'gemini';
    var can = 'cancer';
    var leo = 'leo';
    var vir = 'virgo';
    var lib = 'libra';
    var sco = 'scorpio';
    var sag = 'sagittarius';
    var cap = 'capricorn';
    var imageList = [aqu, pis, ari, tau, gem, can, leo, vir, lib, sco, sag, cap];
    return "<img src = \"http://www.astrology-zodiac-signs.com/images/" + imageList[NUM_SIGN-1] + ".jpg\" alt = \"horoImg\" id = \"horoImg\" height = \"100\" width = \"100\">";
}
