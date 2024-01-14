

  export const normalizeKenyanPhoneNumber = (phoneNumber:string) =>{
   
      const cleanedNumber = phoneNumber.replace(/\D/g, '');
      return `254${cleanedNumber.slice(-9)}`;
  }