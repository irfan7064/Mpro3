public without sharing class updatingEmployeesTheirStatus
{
    //create the records for the project assignement.
        public static void updateEmp(List <Project_Assignment__c > vartemp){
              
            for(Project_Assignment__c var :vartemp)
            {   
                var.Employee__r.Employee_Status__c ='Assigned';
                        update var;
             }   
}}