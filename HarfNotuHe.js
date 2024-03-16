
function calculateGrade() {
  var quiz1 = parseFloat(document.getElementById('quiz1').value);
  var quiz2 = parseFloat(document.getElementById('quiz2').value);
  var odev = parseFloat(document.getElementById('odev').value);
  var vize = parseFloat(document.getElementById('vize').value);
  var finalScore = parseFloat(document.getElementById('final').value);
  
  var classMeanQuiz1 = parseFloat(document.getElementById('classMeanQuiz1').value);
  var classMeanQuiz2 = parseFloat(document.getElementById('classMeanQuiz2').value);
  var classMeanOdev = parseFloat(document.getElementById('classMeanOdev').value);
  var classMeanVize = parseFloat(document.getElementById('classMeanVize').value);
  var classMeanFinal = parseFloat(document.getElementById('classMeanFinal').value);
  
  var classStdDev = parseFloat(document.getElementById('classStdDev').value);
  var harfNotu = document.getElementById('harfNotu');
  var HBN = document.getElementById('HBN');
  var StandartliHesaplama = document.getElementById('StandartliHesaplama');
  // Ağırlık oranları
  var quiz1_ = parseFloat((quiz1 * 10) / 100);
  var quiz2_ = parseFloat((quiz2 * 10) / 100);
  var odev_ = parseFloat((odev * 10) / 100);
  var vize_ = parseFloat((vize * 20) / 100);
  var final_ = parseFloat((finalScore * 50) / 100);

  var classMeanQuiz1_ = parseFloat((classMeanQuiz1 * 10) / 100);
  var classMeanQuiz2_ = parseFloat((classMeanQuiz2 * 10) / 100);
  var classMeanOdev_ = parseFloat((classMeanOdev * 10) / 100);
  var classMeanVize_ = parseFloat((classMeanVize * 20) / 100);
  var classMeanFinal_ =parseFloat((classMeanFinal * 50) / 100);

  // Sınavların ortalaması
  var examAverage = quiz1_ + quiz2_ + odev_ + vize_ + final_;
  var sort = classMeanQuiz1_ + classMeanQuiz2_ + classMeanOdev_ + classMeanVize_ + classMeanFinal_;

   var HB = examAverage - sort;
  
  // Z puanı hesaplama
  var Z = HB / classStdDev;
  
  // T değeri hesaplama
  var T = 10 * Z + 50;
  
  // Sonucu ekrana yazdırma
  document.getElementById('result').innerHTML = "<strong>T Değeri: </strong>" + T.toFixed(2);
  document.getElementById('SeninOrt').innerHTML="<strong>Senin Ortalaman: </strong>" + examAverage;
  document.getElementById('SinifOrt').innerHTML="<strong>Sınıf Ortalaması: </strong>" + sort ;
  HBN.innerHTML="<strong>HBN: </strong>"+ HB.toFixed(2); 
  StandartliHesaplama.innerHTML="<strong>HBN/Standart Sapma: </strong>" + HB/classStdDev;
  // 1
  if(sort>80 && sort<=100 ){
       
        if (T>57) {
           harfNotu.innerHTML='AA';
        }
        else if (T>52 && T<=56.99) {
          harfNotu.innerHTML='BA';
        }
        else if (T>47 && T<=51.99) {
            harfNotu.innerHTML='BB';
        }
        else if (T>42 && T<=46.99) {
            harfNotu.innerHTML='CB';
        }
        else if (T>37 && T<=41.99) {
            harfNotu.innerHTML='CC';
        }
        else if (T>32 && T<=36.99) {
            harfNotu.innerHTML='DC';
        }
        else if (T>27 && T<=31.99) {
            harfNotu.innerHTML='DD';
        }
        else if(T<27) {
            harfNotu.innerHTML='FD';
        }
        
}
//2
else if(sort>70 && sort<=80 ){

    if (T>59) {
        harfNotu.innerHTML='AA';
     }
     else if (T>54 && T<=58.99) {
       harfNotu.innerHTML='BA';
     }
     else if (T>49 && T<=53.99) {
         harfNotu.innerHTML='BB';
     }
     else if (T>44 && T<=48.99) {
         harfNotu.innerHTML='CB';
     }
     else if (T>39 && T<=43.99) {
         harfNotu.innerHTML='CC';
     }
     else if (T>34 && T<=38.99) {
         harfNotu.innerHTML='DC';
     }
     else if (T>29 && T<=33.99) {
         harfNotu.innerHTML='DD';
     }
     else if(T<29){
         harfNotu.innerHTML='FD';
     }
}

//3
else if(sort>62.5 && sort<=70 ){

    if (T>61) {
        harfNotu.innerHTML='AA';
     }
     else if (T>56 && T<=60.99) {
       harfNotu.innerHTML='BA';
     }
     else if (T>51 && T<=55.99) {
         harfNotu.innerHTML='BB';
     }
     else if (T>46 && T<=50.99) {
         harfNotu.innerHTML='CB';
     }
     else if (T>41 && T<=45.99) {
         harfNotu.innerHTML='CC';
     }
     else if (T>36 && T<40.99) {
         harfNotu.innerHTML='DC';
     }
     else if (T>31 && T<=35.99) {
         harfNotu.innerHTML='DD';
     }
    else if(T<31){
         harfNotu.innerHTML='FD';
     }
}

//4
else if(sort>57.5 && sort<=62.5 ){

    if (T>63) {
        harfNotu.innerHTML='AA';
     }
     else if (T>58 && T<=62.99) {
       harfNotu.innerHTML='BA';
     }
     else if (T>53 && T<=57.99) {
         harfNotu.innerHTML='BB';
     }
     else if (T>48 && T<=52.99) {
         harfNotu.innerHTML='CB';
     }
     else if (T>43 && T<=47.99) {
         harfNotu.innerHTML='CC';
     }
     else if (T>38 && T<=42.99) {
         harfNotu.innerHTML='DC';
     }
     else if (T>33 && T<=37.99) {
         harfNotu.innerHTML='DD';
     }
     else if(T<33){
         harfNotu.innerHTML='FD';
     }
}

//5
else if(sort>52.5 && sort<=57.5 ){
 
    if (T>65) {
        harfNotu.innerHTML='AA';
     }
     else if (T>60 && T<=64.99) {
       harfNotu.innerHTML='BA';
     }
     else if (T>55 && T<=59.99) {
         harfNotu.innerHTML='BB';
     }
     else if (T>50 && T<=54.99) {
         harfNotu.innerHTML='CB';
     }
     else if (T>45 && T<=49.99) {
         harfNotu.innerHTML='CC';
     }
     else if (T>40 && T<=44.99) {
         harfNotu.innerHTML='DC';
     }
     else if (T>35 && T<=39.99) {
         harfNotu.innerHTML='DD';
     }
     else if(T<35){
         harfNotu.innerHTML='FD';
     }
}

//6
else if(sort>47.5 && sort<=52.5){

    if (T>67) {
        harfNotu.innerHTML='AA';
     }
     else if (T>62 && T<=66.99) {
       harfNotu.innerHTML='BA';
     }
     else if (T>57 && T<=61.99) {
         harfNotu.innerHTML='BB';
     }
     else if (T>52 && T<=56.99) {
         harfNotu.innerHTML='CB';
     }
     else if (T>47 && T<=51.99) {
         harfNotu.innerHTML='CC';
     }
     else if (T>42 && T<=46.99) {
         harfNotu.innerHTML='DC';
     }
     else if (T>37 && T<=41.99) {
         harfNotu.innerHTML='DD';
     }
     else if(T<37){
         harfNotu.innerHTML='FD';
     }
}

//7
else if(sort>42.5 && sort<=47.5 ){

    if (T>69) {
        harfNotu.innerHTML='AA';
     }
     else if (T>64 && T<=68.99) {
       harfNotu.innerHTML='BA';
     }
     else if (T>59 && T<=63.99) {
         harfNotu.innerHTML='BB';
     }
     else if (T>54 && T<=58.99) {
         harfNotu.innerHTML='CB';
     }
     else if (T>49 && T<=53.99) {
         harfNotu.innerHTML='CC';
     }
     else if (T>44 && T<=58.99) {
         harfNotu.innerHTML='DC';
     }
     else if (T>39 && T<=43.99) {
         harfNotu.innerHTML='DD';
     }
     else if(T<39){
         harfNotu.innerHTML='FD';
     }
}

//8
else
{
    if (T>71) {
        harfNotu.innerHTML='AA';
     }
     else if (T>66 && T<=70.99) {
       harfNotu.innerHTML='BA';
     }
     else if (T>61 && T<=65.99) {
         harfNotu.innerHTML='BB';
     }
     else if (T>56 && T<=60.99) {
         harfNotu.innerHTML='CB';
     }
     else if (T>51 && T<=55.99) {
         harfNotu.innerHTML='CC';
     }
     else if (T>46 && T<=50.99) {
         harfNotu.innerHTML='DC';
     }
     else if (T>41 && T<=45.99) {
         harfNotu.innerHTML='DD';
     }
     else if(T<41){
         harfNotu.innerHTML='FD';
     }
}

}


