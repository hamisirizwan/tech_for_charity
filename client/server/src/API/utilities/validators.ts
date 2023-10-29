import emailValidator from "email-validator";

const validator = {
  email: function (email:string):boolean {
    if (!emailValidator.validate(email)) {
      return false;
    }
    return true;
  },
  phonekE: function (phone:string):boolean {
    if (phone.length !== 10) {
      return false;
    }
    if (phone.substring(0, 2) !== "07" && phone.substring(0, 2) !== "01") {
      return false;
    }
    return true;
  },
  strings: function (name:string) :boolean{
    const lettersRegExp = /^[a-zA-Z\s]+$/;
    return lettersRegExp.test(name);
  },
};

export default validator;