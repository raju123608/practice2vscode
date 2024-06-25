public  class queueableapexclass implements Queueable  {
private Account record;
    
    public queueableapexclass(Account record) {
        this.record=record;  

    }    
    public void Execute (QueueableContext qContext){
        try {

            update record;
            System.debug('Account updated successfully!');
            // Publish a Platform Event to notify LWC
            AccountUpdatedEvent event = new AccountUpdatedEvent(record.Id);
            PlatformEvent.publish(event);

        } catch (Exception e) {
            System.debug('Error updating account: ' + e.getMessage());
      
            
        }

    }
}