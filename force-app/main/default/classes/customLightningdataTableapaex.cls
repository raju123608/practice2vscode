public class customLightningdataTableapaex {
    @AuraEnabled(cacheable=true)
    public static List<Account> methodName(){
        List<Account> acclist = [select id,Name,createddate__c,OwnerId,Active__c from Account ORDER BY Name];
        return acclist;
       
    }
}