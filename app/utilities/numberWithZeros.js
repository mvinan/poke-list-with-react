export function n(n){
  if(n <= 9){
    return "00" + n;
  }
  if(n > 9 && n <= 99){
    return "0" + n;
  }
  if(n > 99){
    return "" + n;
  }
}