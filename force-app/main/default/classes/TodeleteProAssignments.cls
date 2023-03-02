public class TodeleteProAssignments {
    public static void deletePARecs(List <Project__c> vartemp){
        
            
        List<Id> lsIds = new List<Id>(new Map<Id, Project__c>(vartemp).keySet());
        for(Project__c var :vartemp)
		{	list<Project_Assignment__c> lsa=[SELECT id,Employee__c,Employee__r.Name,Project__r.Name
                                             FROM Project_Assignment__c	WHERE Project__c IN : lsIds];
         
        if(var.Project_Stage__c=='Canceled'||var.Project_Stage__c=='Delivered'){
        		delete lsa;
          
        }
        }
        
    }

}