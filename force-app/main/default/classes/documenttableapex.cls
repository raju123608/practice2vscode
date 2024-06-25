public class documenttableapex {
    @AuraEnabled(cacheable=true)
    public static List<Required_Documents__mdt> getmetaa() {
      List<Required_Documents__mdt> mee  = [select id,DeveloperName,Document_Title__c,
      Document_Number__c,Document_Description__c from Required_Documents__mdt];
      return mee;
    }
}