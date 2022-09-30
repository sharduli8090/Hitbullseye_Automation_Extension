
document.getElementById("level1").addEventListener("click", level.bind(null,'One_Div',1));
document.getElementById("level2").addEventListener("click", level.bind(null,'Two_Div',2));
document.getElementById("level3").addEventListener("click", level.bind(null,'Three_Div',3));
document.getElementById("level4").addEventListener("click", level.bind(null,'Four_Div',4));
document.getElementById("level5").addEventListener("click", level.bind(null,'Five_Div',5));

document.getElementById("back").addEventListener("click", back);

document.getElementById("Three_Apt_Test1").addEventListener("click", SolveTest.bind(null,'key1'));

function back(){
  document.getElementById('levelDiv').style.display="flex";
  document.getElementById('levelHeading').style.display="none";
  document.getElementById('One_Div').style.display="none";
  document.getElementById('Two_Div').style.display="none";
  document.getElementById('Three_Div').style.display="none";
  document.getElementById('Four_Div').style.display="none";
  document.getElementById('Five_Div').style.display="none";
  document.getElementById('back').style.display="none";
}
function level(level,num){
  document.getElementById('levelDiv').style.display="none";
  document.getElementById(level).style.display="block";
  document.getElementById('back').style.display="block";
  document.getElementById('levelHeading').style.display="block";
  document.getElementById('levelHeading').innerHTML = 'LEVEL '+num;
}

function SolveTest(keyValues){
    
    let keys = keyValues;
    let len = keys.length;
    
    let i = 0;
    
    const inter = setInterval(
  
      function(){

   
        document.querySelector(`#${keys[i]}_${i+1}`).click();
        document.querySelector("#main_div > div.tableWidthPercent > div.onlineTestLeftDiv > div.qnav > span.saveNextButton > a").click();
    
        i++;
    
        if(i == len){
      clearInterval(inter)
    }
  },
2000);

};
