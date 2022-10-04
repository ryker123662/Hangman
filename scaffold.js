var password = "No pain no gain";
password = password.toLocaleUpperCase();

var lenght = password.length;
var howmany_mistakes = 0;

var yes = new Audio("yes.wav");
var no = new Audio ("no.wav");
var password1 = "";

for (i = 0; i < lenght; i++) {
  if (password.charAt(i) == " ") password1 = password1 + " ";
  else password1 = password1 + "-";
}

function write_password() {
  document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() 
{
  var div_content = "";

  for (i = 0; i <= 34; i++) {
    var element = "lit" + i;
    div_content = div_content + '<div class="litera" onclick="check('+i+')" id="'+element+'">'+litery[i]+'</div>';
    if ((i + 1) % 7 == 0) div_content = div_content + '<div style="clear:both;"></div>';
  }

  document.getElementById("alphabet").innerHTML = div_content;

  write_password();
}

String.prototype.setCharacter = function(position, character)
{
  if (position > this.length - 1) return this.toString();
  else return this.substr(0, position) + character + this.substr(position + 1);
}

function check(nr)
{
  
  var correct = false;
  
  for(i=0; i<lenght; i++)
  {
    if (password.charAt(i) == litery[nr])
    {
      password1 = password1.setCharacter(i,litery[nr]);
      correct = true;
    }
  }

    if(correct == true)
    {
      yes.play();
      var element = "lit" + nr;
      document.getElementById(element).style.background = "#003300";
      document.getElementById(element).style.color = "#00C000";
      document.getElementById(element).style.border = "3px solid #00C000";
      document.getElementById(element).style.cursor = "default";
      
      write_password();
    }
    else
    {
      no.play();
      var element = "lit" + nr;
      document.getElementById(element).style.background = "#330000";
      document.getElementById(element).style.color = "#C00000";
      document.getElementById(element).style.border = "3px solid #C000000";
      document.getElementById(element).style.cursor = "default";
      document.getElementById(element).setAttribute("onclick",";");

      howmany_mistakes++;
      var obraz = "img/s" + howmany_mistakes + ".jpg";
      document.getElementById("scaffold").innerHTML = '<img src="'+obraz+'" alt="" />';
    }
    //win
    if (password == password1)
    document.getElementById("alphabet").innerHTML = "That's right! The password is correct: "+password+'<br /><br /><span class="reset" onclick="location.reload()">One again?</span>';

    if (howmany_mistakes>=9)
    document.getElementById("alphabet").innerHTML = "You lost ! Correct password: "+password+'<br /><br/><span class="reset" onclick="location.reload()">ONE AGAIN?</span>';

  }
  
