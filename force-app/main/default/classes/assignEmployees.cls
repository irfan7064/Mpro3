public without sharing class assignEmployees
{
	//create the records for the project assignement.
		public static void createRecs(List <Project__c> vartemp){
				List<Employee__c> retrievedUnassignedEmployees = [SELECT Id, Name FROM Employee__c 
																 WHERE Employee_Status__c='Unassigned'];
					system.debug('333'+retrievedUnassignedEmployees);											 
				 List<Employee__c> caseUpdateList = new List<Employee__c>();
				 List<Project_Assignment__c> projectAssignementupdatelist = new List<Project_Assignment__c>();

			for(Project__c var :vartemp)
			{	
				Integer nas=integer.valueOf(var.Employees_Assigned__c);
                
               if(var.Project_Stage__c=='Draft'){										
				//for(Employee__c varE :retrievedUnassignedEmployees)
				
							for(Integer i=0; i<var.Employees_Required__c;i++){
								Project_Assignment__c eassign=new Project_Assignment__c();
								eassign.Employee__c=retrievedUnassignedEmployees[i].Id;
								eassign.Project__c=var.Id;
								projectAssignementupdatelist.add(eassign);
								caseUpdateList.add(retrievedUnassignedEmployees[i]);
							}
                }
			}		
            
            //update the existing employees who have been assigned 
					for(Employee__c varUp:caseUpdateList)
					{
						varUp.Employee_Status__c='Assigned';
						update varUp;
					}
            
            		system.debug('222'+projectAssignementupdatelist);
					Database.insert(projectAssignementupdatelist);
					//insert new project Assignement list
						
					
					

} 

}