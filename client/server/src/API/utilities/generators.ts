const generator = {
  random: function (length:number) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#!";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  password: function () {
    return this.random(7);
  },
  otp: function () {
    
    return  Math.floor(1000 + Math.random() * 9000);
  },
  
};

export default generator;