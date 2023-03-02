trigger updateRecordsOfEmployees on Backup_Project_Assignment__c (after insert,after update) {

          

    SideEmployeesForUpdation.UpdateSideEmployeeRecs(Trigger.New);


}