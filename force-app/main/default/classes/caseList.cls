public class caseList {
    
    @AuraEnabled(cacheable=true)
    public static List<Case> getTodaysCases() {
        List<Case> caselist= [SELECT Id, Subject, Status, CreatedDate FROM Case
            WHERE CreatedDate = TODAY];
            return caselist;
    }
}