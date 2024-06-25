public  class dynamicRenderingapex {
   @AuraEnabled(cacheable=true)
   public static List<Account> methodName(){

    List<Account> acclist = [select id,Name,Industry from Account ];
    return acclist;
          
   }
}