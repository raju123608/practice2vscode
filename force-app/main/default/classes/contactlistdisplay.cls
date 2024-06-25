public with sharing class contactlistdisplay {
   @AuraEnabled(Cacheable=true)
   public static List<Contact> contactsrecorddisplay(){
    List<Contact> col = [select id,FirstName from Contact];
    return col;

   }
   
}