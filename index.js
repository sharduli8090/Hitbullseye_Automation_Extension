
document.getElementById("level1").addEventListener("click", level.bind(null,'One_Div',1));
document.getElementById("level2").addEventListener("click", level.bind(null,'Two_Div',2));
document.getElementById("level3").addEventListener("click", level.bind(null,'Three_Div',3));
document.getElementById("level4").addEventListener("click", level.bind(null,'Four_Div',4));

document.getElementById("back").addEventListener("click", back);

// LEVEL 1
document.getElementById("One_Apt_Test1").addEventListener("click", SolveTest.bind(null,'DBDDBBCCBADABCBBDBCDBCCDCDBACCBDCCDAACAADBEEDDDBDCECDDEACAECDDEBDBBDBDCBCDDCBDDCACBABDACDDDBCCDCCDBC'));
document.getElementById("One_Apt_Test2").addEventListener("click", SolveTest.bind(null,'AACDCBCBBABDBCBBABCCCBCCAABCBADBDDBCDBACBBAAABCDCDDBBBBDABBDBDDBDBAACADBDCBAADBDCDAAADCCCDDCBDBCCBCC'));
document.getElementById("One_Apt_Test3").addEventListener("click", SolveTest.bind(null,'BDCDCDACCBDCCADDCCDDBCBACAAACCCDACAADCDCCAADBDADADCCACDDDDCABBDCBBDBACBABADDAACADABDDCCBDBDCDBADAABC'));
document.getElementById("One_Apt_Test4").addEventListener("click", SolveTest.bind(null,'ACABCAABCBBCCDDBCCDAACACBCDDCBAACABCCAACACBDCDDDCDADCAADBABDCCADCBBADBBCBDDDBACBDBACDAACCDAADBACDCCC'));
document.getElementById("One_Apt_Test5").addEventListener("click", SolveTest.bind(null,'DCCDBCCCBBDCCACBBDDDBDAAABBBABAACDBDDCDADBDDACABCABDDACCDDBACBDBDDDAABBCDBADDCADBADBDBCBDBBCABDABADA'));


document.getElementById("One_Tech_Test1").addEventListener("click", SolveTest.bind(null,'BBAABDCAACDDDACBACBBBAAAABDBDC'));
document.getElementById("One_Tech_Test2").addEventListener("click", SolveTest.bind(null,'DDCABCCDDDCBACDBCBBDBDDBAADDBB'));
document.getElementById("One_Tech_Test3").addEventListener("click", SolveTest.bind(null,'ACDBCDCADBDABDCDAACCBCAACDADCD'));
document.getElementById("One_Tech_Test4").addEventListener("click", SolveTest.bind(null,'DABADACAAAACDBBCDDCCEBCBCABABB'));
document.getElementById("One_Tech_Test5").addEventListener("click", SolveTest.bind(null,'ACDABBDDABABABBDBACBDBDDBABABA'));


// LEVEL 2

document.getElementById("Two_Apt_Test1").addEventListener("click", SolveTest.bind(null,'DBCADAAADCBDAAADBDCDBBAACCAABAABADCABADCBDCDAADCDDBBCDDDBDCBADDCDBCAABCCDCBCBCCAAACADCDCABADBAABBCAC'));
document.getElementById("Two_Apt_Test2").addEventListener("click", SolveTest.bind(null,'ACBAAABCBAAADCAACDCBDABBACCBBABACBDABDCDCCBCBDBCCCADDCCBADBAACDBDCCDCCCBDCBABABCCDACCCBCCBABDCBBDBBD'));
document.getElementById("Two_Apt_Test3").addEventListener("click", SolveTest.bind(null,'CBCBDDAAAABBABBDBDDDCABBDABCCACBBDBBCCCADDBADBBDADBBBBDDACCDAACCBBDADAACCDBACDADCCBACDCADCADCADABCDB'));
document.getElementById("Two_Apt_Test4").addEventListener("click", SolveTest.bind(null,'ACCDDCBDDABCACBAACDBCDBABBACCBDDBBABACCDCBDCDDBDAACCADDDBADBADCBCCCABDCDDDDBCDDDBAABACBCCABBDBACCDCC'));
document.getElementById("Two_Apt_Test5").addEventListener("click", SolveTest.bind(null,'BBBBDCBCBABDBAABBAAADDABABCDCBABDCABDADCCABCBCDBBDBACDDABABBDDABCADCDACCACBDADCCCDCDDDAADCBDDCBDBBDA'));

document.getElementById("Two_Tech_Test1").addEventListener("click", SolveTest.bind(null,'DADBBCAACCAABAABCCAAAADABAACAB'));
document.getElementById("Two_Tech_Test2").addEventListener("click", SolveTest.bind(null,'CDBBCBBDBAADDACBADDCCADDBDAACA'));
document.getElementById("Two_Tech_Test3").addEventListener("click", SolveTest.bind(null,'BDBCCCADAABBAABDCCBDDBCDAABDBB'));
document.getElementById("Two_Tech_Test4").addEventListener("click", SolveTest.bind(null,'BCCCCBBCDBDACCBDCADBCBAABACCBB'));
document.getElementById("Two_Tech_Test5").addEventListener("click", SolveTest.bind(null,'ADDCCCBBDCACBDCCAADBABCDBDBDDC'));


// LEVEL 3

document.getElementById("Three_Apt_Test1").addEventListener("click", SolveTest.bind(null,'BAACADCACCADACBADACBDADDCBBDACACACDBCBDABDCCDBDBDDDCDCDCADBAABABBBDCABBADCCABDDAADCACDDADACBDCDBCDDA'));
document.getElementById("Three_Apt_Test2").addEventListener("click", SolveTest.bind(null,'CCDCACDBBABBCBDDDBDADBACBBBCCCBCAAADABDDDBDCACBBDADDBDBDACCACADBDCDAADADDCBBACBBBBBACCDCCBADADBBBCDB'));
document.getElementById("Three_Apt_Test3").addEventListener("click", SolveTest.bind(null,'CACCBBDBCBCBBCDADABCBBABDCBDBDBCDBBCACBDDAAACDBCADCBCBDCDDABADDBBDACCDCCBACCBCDBACBDBAADACABABCCDDDC'));
document.getElementById("Three_Apt_Test4").addEventListener("click", SolveTest.bind(null,'CBBAADBADCCBABBCDCDABCBBDDAABADCCBCBACDABBCAABABBCBBCAAABCBCCCBDDABCCACCACDADDDBADADBCCBAADCACDADABC'));
document.getElementById("Three_Apt_Test5").addEventListener("click", SolveTest.bind(null,'DCACDADDABCCCABAACDCBBCBBAABCDDDBDCADAAADDBCDADBADDDCBCCDACCCCABCADBBAAADDCCDBBDDADBCACCCDABBDBCDABA'));

document.getElementById("Three_Tech_Test1").addEventListener("click", SolveTest.bind(null,'BACDDBDCBCADAAAAABABBBCCDABABA'));
document.getElementById("Three_Tech_Test2").addEventListener("click", SolveTest.bind(null,'CADAADCCDBACBBBCABBCAAABBCBDDD'));
document.getElementById("Three_Tech_Test3").addEventListener("click", SolveTest.bind(null,'ADAADDBBBCDBCBCAADDBCBBDADAADC'));
document.getElementById("Three_Tech_Test4").addEventListener("click", SolveTest.bind(null,'DBBBBBDCCBDCCCDCABBCAAABBCBDDD'));
document.getElementById("Three_Tech_Test5").addEventListener("click", SolveTest.bind(null,'DACCCDCDBCBDAABDCDDDACACAABCCA'));


// LEVEL 4

document.getElementById("Four_Apt_Test1").addEventListener("click", SolveTest.bind(null,'BCDBBAACCDCACACCCBAACBABAADDBACAADDACCDDAABCDBCBCABAABBBBBCBAACCCDACBDCBBBDCDAACAABBDDBDAACBCBCCBDBB'));
document.getElementById("Four_Apt_Test2").addEventListener("click", SolveTest.bind(null,'ABBBCADDDBCBBCDBADBDDBCBDACBCCDAACCCBCACBCCABBBADBABCADACCDDDDDDBBABCADCDDBABDDBCCCDDDCACBCACCACBCCB'));
document.getElementById("Four_Apt_Test3").addEventListener("click", SolveTest.bind(null,'ABABBACCCACCCDDBBCABCAABCABCABBBDCDAACBABCDBDACBCBADCCCDBCCCBDADDCCBCBCCDCCBAACBBABBAABACAACAADCDAAC'));
document.getElementById("Four_Apt_Test4").addEventListener("click", SolveTest.bind(null,'BABBBDACACADBDDCBBACAACDCBBABADBABCACCACDCCADBDDCBCDADADAACDBBBDBCABADBCDCCADCDBCBADBCCACDDDBCBBCAAC'));
document.getElementById("Four_Apt_Test5").addEventListener("click", SolveTest.bind(null,'CCBBDDBCACBBACDDABDCDAADDCCAAAACDADCDBDAABACDCBCBDDBCADDACADADBDBBAACDACADBCADDABAABDCBABADDBDABBDBA'));

document.getElementById("Four_Tech_Test1").addEventListener("click", SolveTest.bind(null,'AADACADCBDCBAACDABDCACBACACBAA'));
document.getElementById("Four_Tech_Test2").addEventListener("click", SolveTest.bind(null,'DCADBCBBABCCDBBBDBDAAAADDBDBDA'));
document.getElementById("Four_Tech_Test3").addEventListener("click", SolveTest.bind(null,'BACDCDCBCCBDDCDBDBDCCBDCCDCCBB'));
document.getElementById("Four_Tech_Test4").addEventListener("click", SolveTest.bind(null,'DACCCDCDBCBDAABDCDDDACACAABCCA'));
document.getElementById("Four_Tech_Test5").addEventListener("click", SolveTest.bind(null,'BCAADDBABDBBCDDBCAAABABAABCCAD'));


// BACK

function back(){
  document.getElementById('levelDiv').style.display="flex";
  document.getElementById('levelHeading').style.display="none";
  document.getElementById('One_Div').style.display="none";
  document.getElementById('Two_Div').style.display="none";
  document.getElementById('Three_Div').style.display="none";
  document.getElementById('Four_Div').style.display="none";
  document.getElementById('back').style.display="none";
}


// LEVEL DISPLAY

function level(level,num){
  document.getElementById('levelDiv').style.display="none";
  document.getElementById(level).style.display="block";
  document.getElementById('back').style.display="block";
  document.getElementById('levelHeading').style.display="block";
  document.getElementById('levelHeading').innerHTML = 'LEVEL '+num;
}


// TEST SOLVING FUNCTION

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
