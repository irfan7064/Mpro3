trigger updateRecords on Project__c (after update)
{
        //updates the records on the Project Assignment object
        //uses unassigned employees in pool and randomly assigns
            
            
        assignEmployeesForUpdation.updateRecs(Trigger.new);
        
        //TodeleteProAssignments.deletePARecs(Trigger.new);
}