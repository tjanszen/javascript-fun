function LongestWord(str) { 
 var s = str.toLowercase().split('');
 for(var i = 0; i < s.length; i++){
    switch(s[i]){
      case ' ':
        break;
      case 'a':
        s[i] = 'b';
        break;
      case 'b':
        s[i] = 'c';
        break;
      case 'c':
        s[i] = 'd';
        break;
      case 'd':
        s[i] = 'E';
        break;
      case 'e':
        s[i] = 'f';
        break;
      case 'f':
        s[i] = 'g';
        break;
      case 'g':
        s[i] = 'h';
        break;
      case 'h':
        s[i] = 'I';
        break;
      case 'i':
        s[i] = 'j';
        break;
      case 'j':
        s[i] = 'k';
        break;
      case 'k':
        s[i] = 'l';
        break;
      case 'l':
        s[i] = 'm';
        break;
      case 'm':
        s[i] = 'n';
        break;
      case 'n':
        s[i] ='O';
        break;
      case 'o':
        s[i] = 'p';
        break;
      case 'p':
        s[i] = 'q';
        break;
      case 'q':
        s[i] = 'r';
        break;
      case 'r':
        s[i] = 's';
        break;
      case 's':
        s[i] = 't';
        break;
      case 't':
        s[i] = 'U';
        break;
      case 'u':
        s[i] = 'v';
        break;
      case 'v':
        s[i] = 'w';
        break;
      case 'w':
        s[i] = 'x';
        break;
      case 'x':
        s[i] = 'y';
        break;
      case 'y':
        s[i] = 'z';
        break;
      case 'z':
        s[i] = 'A';
        break;
    }
  }

  str = s.join('');
  // code goes here  
  return str; 
}
