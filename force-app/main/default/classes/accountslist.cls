public with sharing class accountslist {
    @AuraEnabled(cacheable=true)
    public  static List<Account> accountslistdata() {
        List<Account> acclist = [select id,Name ,Phone from Account  ];
        return acclist;

    }


   
//     public static List<Contact> getcontacts(string accountName){
//         List<Contact> conlist = new List<Contact>();
//         Account acc = [select id,Name from Account where Name =: accountName];
//         conlist = [select id,FirstName,LastName,Email from Contact where AccountId =: acc.Id];

// return conlist;
//     }

@AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accountName) {
        // Query contacts related to the given accountName
        return [SELECT Id, FirstName,LastName, Email FROM Contact WHERE Account.Name = :accountName LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords() {
        return [SELECT Id, Name, createddate FROM Account];
    }
}