function LongestWord(sen) { 
  var words = sen.split(' ')
  var length = 0;
  var word = "";
  
  for(var i = 0; i < words.length; i++){
    if(words[i].length > length){
        length = words[i].length;
         word = words[i]; 
    }
  }

  // code goes here  
  return word; 
         
}
   