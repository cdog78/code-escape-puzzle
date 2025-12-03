const encryptedcontent = "U2FsdGVkX18R7KIStJaLEEYXzi5U/s2AbBZc2HTEXCfP3GoseafuuM9YSg9edZegec31FXAyuY4wvG7IcTMgMX1SPQ4uI2Tg/jbkL5tUJbQ="

function includecontent(key){
  document.getElementById('includedcontent').innerHTML = decrypt(encryptedcontent, key);
}

console.log('Imported encrypted content')
