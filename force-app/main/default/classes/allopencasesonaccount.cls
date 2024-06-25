public class allopencasesonaccount {
    @AuraEnabled(cacheable=true)
    
   public static List<Case>  allcases(Id accountId){
    List<Case> caselist = [select id,CaseNumber,Origin,OwnerId,ContactId,
    CreatedById from Case where
     AccountId = : accountId AND isclosed = false];
     return caselist;

   }
}