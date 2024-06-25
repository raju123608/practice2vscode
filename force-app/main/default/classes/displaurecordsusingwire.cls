public with sharing class displaurecordsusingwire {
   @AuraEnabled(cacheable= true)
   public static List<Account>  methodName(){
    List<Account> acclist = [select id,Name from Account];
    return acclist;
    
   }
}