public  class tabledata {
   @AuraEnabled(cacheable=true)
   public static List<Account>  methodName(){
    List<Account> acclist = [select id,Name,Phone,Rating from Account];
    return acclist;
  
   }
}