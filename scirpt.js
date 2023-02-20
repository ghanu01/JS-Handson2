const Calculator = (A, B, C) => 
{
 
   if(A=='+'){
      return (B+C)}
    else if(A=='-'){
      return (B-C);
    }
    else if(A=='*'){
      return (B*C);
    }
    else if(A=='/'){
      return (B/C);
    }
    else{
      return "invalid";
    }

};



const Check_divisibility = (N) => {
    

    if(N%6===0 && N%9===0){
      return "Divisible by both";
    }
    else{
      return "Not Divisible by both";
    }
    
    };
    

    
    const isEligible = (a) => {
        if (a>=18)  {
          return "Eligible for Voting"
        }
        else {
          return "Not Eligible for Voting"
        }
      };

      

      const findRelation = (x,y) => {
    
        if (x<y){
        return (x+ " is smaller than " +y);
      }
      else if (x>y) {
        return (x+ " is greater than " +y);
      }
      else {
       return (x+ " is equal to " +y);
      }
    
    };

    

    const findGrades = (a) => {
        switch (true){
         case (a<=10):
           return "E"
         break;
         case (a>=11 && a<=20):
           return "D"
         break;
         case (a>=21 && a<=30):
           return "C"
         break;
         case (a>=31 && a<=40):
           return "B"
         break;
         case (a>=41 && a<=50):
           return "A"
         break;
         default:
            return undefined
       }
   
   };


   const getValue = (a) => {
    if ( a=="P" || a=="p"){
      return "PrepBytes";
    }
    else if (a=="Z" || a=="z"){
      return "Zenith";
    }
    else if (a=="E" || a=="e"){
      return "Expert Coder" ;
    }
    else if (a=="D" || a=="d"){
      return "Data Structure";
    }
};



const Max_out_of_three = (A,B,C) => {
    if (A>B && A>C){
      return A;
    }
    else if (B>A && B>C){
      return B;
    }
    else if (C>A && C>B){
      return C;
    }
    else if (A==B && B==C && C==A){
      return -1;
    }

};



const findSndSmallest = (x,y,z) => {
    if(x!==y && y!==z && z!==x){
      if (x>y && x>z){
        if(y>z){
          return y
        }
        else {
          return z
        }
      }
       if (y>x && y>z){
         if(z>x){
           return z
         }
         else {
           return x
         }
       }
       if (z>x && z>y){
         if (x>y){
           return x
         }
         else {
           return y
         }
       }
       
    }
};



const Triangle_Check = (A,B,C) => {
    if (A<90 && B<90 && C<90) {
      return "acute"
    }
   else if(A>=90 || B>=90 || C>=90){
     return "obtuse"
   }
     
 };