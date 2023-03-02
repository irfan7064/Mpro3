public class SideEmployeesForUpdation {
    
public static void UpdateSideEmployeeRecs(List <Backup_Project_Assignment__c> vartemp){
				Set<Id> resultIds = (new Map<Id,SObject>(vartemp)).keySet();
				List<Side_Employee__c> retrievedUnassignedEmployees = [SELECT Id, Name FROM Side_Employee__c 
																 WHERE Id IN :resultIds];
				
						
					//update the existing employees who have been Unassigned to assigned
					for(Side_Employee__c varUp:retrievedUnassignedEmployees)
					{
						varUp.Employee_Status__c='Assigned';
						update varUp;
					}
					

		}     
    
    

}