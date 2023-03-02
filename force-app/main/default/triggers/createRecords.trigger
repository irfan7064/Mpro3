trigger createRecords on Project__c (after insert)
{
            //creates the records on the Project Assignment object
            //uses unassigned employees in pool and randomly assigns
            
        //Boolean checkDate = (trigger.isInsert ||( 
         //   trigger.oldMap.get(var.Id).Project_Stage__c == var.Project_Stage__c));
      
        //sending data to perform logic
        assignEmployees.createRecs(Trigger.new);
}