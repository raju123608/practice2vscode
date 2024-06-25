public with sharing class searchAccountdata {
    @AuraEnabled(cacheable=true)
    public static List<Account> getaccounts(String searchtext) {
        String searchtextValue = '%' + searchtext + '%';

        List<Account> accList = [SELECT Id, Name, Phone, Rating FROM Account WHERE Name
         LIKE :searchtextValue Limit 10];
        return accList;

    }
     


    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(string accountName){
        List<Contact> conlist =[select id,FirstName,LastName,Email from Contact
         where AccountId  =:accountName];
         
         return conlist;

         
    }
    
}