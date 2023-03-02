public without sharing class assignEmployeesForUpdation
{
	//create the records for the project assignement.
		public static void updateRecs(List <Project__c> vartemp){
				List<Employee__c> retrievedUnassignedEmployees = [SELECT Id, Name FROM Employee__c 
																 WHERE Employee_Status__c='Unassigned'];
				 system.debug('333'+retrievedUnassignedEmployees);											 
				 List<Employee__c> caseUpdateList = new List<Employee__c>();
				 List<Project_Assignment__c> projectAssignementupdatelist = new List<Project_Assignment__c>();
            
     //  if(retrievedUnassignedEmployees.size()!=0)
			for(Project__c var :vartemp)
			{	
				Integer nas=integer.valueOf(var.Employees_Assigned__c);
				Integer nar=integer.valueOf(var.Employees_Required__c);
                
               if(var.Project_Stage__c=='Draft'&& retrievedUnassignedEmployees.size()!=0){										
				//for(Employee__c varE :retrievedUnassignedEmployees)
				
							for(Integer i=0; i<(var.Employees_Required__c-var.Employees_Assigned__c);i++){
                                try{
                               if(retrievedUnassignedEmployees[i]!=null){
                                Project_Assignment__c eassign=new Project_Assignment__c();
								eassign.Employee__c=retrievedUnassignedEmployees[i].Id;
								eassign.Project__c=var.Id;
								projectAssignementupdatelist.add(eassign);
								caseUpdateList.add(retrievedUnassignedEmployees[i]);
                               }
                                
                                }catch (Exception e){
                                    
                                }
                                
                            }
                       
               	//update the existing employees who have been assigned 
					for(Employee__c varUp:caseUpdateList)
					{
						varUp.Employee_Status__c='Assigned';
						update varUp;
					}
                           
               
               }
                If(retrievedUnassignedEmployees==null){
               	var.Employees_Required__c.addError('No Employees available to add cannot change ');
                    
                }
                
                 if(var.Project_Stage__c=='Canceled'||var.Project_Stage__c=='Delivered'){
        				List<Id> lsIds = new List<Id>(new Map<Id, Project__c>(vartemp).keySet());
                     	list<Project_Assignment__c> lsa=[SELECT id,Employee__c,Employee__r.Name,Project__r.Name
                                             FROM Project_Assignment__c	WHERE Project__c IN : lsIds];
                   
                     system.debug('554 Not deleting the child records '+lsa);
                    // delete lsa;
          			system.debug('555 Not deleting the child records '+lsa);
                     
                  //   List<Id> upIds = new List<Id>(new Map<Id, Project_Assignment__c>(lsa).keySet());
        			list<Employee__c> lsxxx=[SELECT id,(SELECT Employee__c FROM Project_Assignments__r) FROM Employee__c];
                   //  system.debug('32project assignment emp recs from child records '+lsxxx);
                 for(Employee__c yy:lsxxx)
					{
						yy.Employee_Status__c='Unassigned';
						update lsxxx;
					  }
                     
                     
                 }
                
			}		
            
           
           		
            		system.debug('222'+projectAssignementupdatelist);
					Database.insert(projectAssignementupdatelist);
					//inserting new project Assignement list
						
					//update the existing employees who have been assigned 
					
       
} 

}