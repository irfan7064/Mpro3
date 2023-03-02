public class BringDataOfProjectAssignment {
    
    
     public List<Project_Assignment__c> contactList {get;set;}
    public BringDataOfProjectAssignment(){
        this.contactList = new List<Project_Assignment__c>();
    }
    
    			@AuraEnabled(cacheable=true)
				public static list<Project_Assignment__c> getRecordsofproassigns(string searchKey){
				
				list<Project_Assignment__c> lsxy=[SELECT Id,Project__c,Project_Start_Date__c,
												Roll_off_Date__c,Employee__c,Project_Name_Assigned__c 
										 		FROM Project_Assignment__c 
										 		WHERE Employee__c =: searchKey 
												 AND Project_Assigned_Status__c='Active'];
				return lsxy;
				}

				@AuraEnabled(cacheable=true)
				public static list<Project_Assignment__c> getdraftrecords(string searchKey){
				
				list<Project_Assignment__c> lsxy=[SELECT Id,Project__c,Project_Start_Date__c,
												Roll_off_Date__c,Employee__c,Project_Name_Assigned__c 
										 		FROM Project_Assignment__c 
										 		WHERE Employee__c =: searchKey 
												 AND Project_Assigned_Status__c='Draft'];
				return lsxy;
				}


				@AuraEnabled(cacheable=true)
				public static list<Project_Assignment__c> getcomprecords(string searchKey){
				
				list<Project_Assignment__c> lsxy=[SELECT Id,Project__c,Project_Start_Date__c,
												Roll_off_Date__c,Employee__c,Project_Name_Assigned__c,Feedback__c 
										 		FROM Project_Assignment__c 
										 		WHERE Employee__c =: searchKey 
												 AND Project_Assigned_Status__c='Delivered'];
				return lsxy;
				}

				@AuraEnabled(cacheable=true)
				public static list<Skill__c> getskillrecords(string searchKey){
				
				list<Skill__c> lsxy=[SELECT Id,Skill_Name__c,Level__c,Relevant_Years_of_Experience__c 
										 		FROM Skill__c 
										 		WHERE Employee__c =:searchKey];
				return lsxy;
				}




}