public with sharing class BringEmployeesAble {
    
    public List<Project_skill__c> contactList {get;set;}
    public BringEmployeesAble(){
        this.contactList = new List<Project_skill__c>();

    }

    public static String project{get;set;}

    String Employee;
                @AuraEnabled(cacheable=true)
				public static list<Employee__c> getRecordsofprojectname(string searchKey){
				
				list<Project_skill__c> lsy=[SELECT Id,Project__c,Name 
										 		FROM Project_skill__c 
										 		WHERE Id =: searchKey];
				    string k= lsy[0].Name;
                    project=lsy[0].Project__c;
                    List<string> p= new List<String>();
                    p.add(k);
                    system.debug('///////////dummy code starts here        '+project );

                 list<Employee__c> lsxy=[SELECT Id, Name, Name__c, (SELECT Id,Name
                                                FROM Employee_Skills__r WHERE Name IN:p)
												FROM Employee__c 
										 		WHERE Employee_Status__c ='Unassigned'];
                        
               // system.debug('///////////irfan        '+[SELECT Name FROM Parent_Object__c WHERE Id IN :parentIdSet]);

                //return [SELECT Name FROM Parent_Object__c WHERE Id IN :parentIdSet];
                system.debug('///////////dummy code ends here        '+p );
                Set<Id> parentIdSet = new Set<Id>(); // Create a set to hold the Ids

for (Employee_Skill__c obj : [SELECT Employee__c FROM Employee_Skill__c WHERE Name IN:p]) {
  parentIdSet.add(obj.Employee__c); 
  // Loop through the child objects, getting those whose status is "Completed"
}

//for (Employee__c obj : [SELECT Name FROM Parent_Object__c WHERE Id IN :parentIdSet]) {
  // Do something... // Query the parent based on Ids stored in the Set<Id>
//}

list<Employee__c> j=[SELECT Id, Name,Name__c FROM Employee__c WHERE Id IN :parentIdSet];

  system.debug('///////////irfan        '+j);

 return j;
  }


                 @AuraEnabled(cacheable=true)
				public static list<string> giveproject(string searchKey){
                    list<Project_skill__c> lsy=[SELECT Id,Project__c,Name 
                    FROM Project_skill__c 
                    WHERE Id =: searchKey];
                string k= lsy[0].Project__c;


               // project=lsy[0].Project__c;
                List<string> proj= new List<String>();
                proj.add(k);

                 return proj;}




    @AuraEnabled
     public static Boolean createPAs(Project_Assignment__c searchKey)
     {
           System.debug('/////////////////      oliv     '+searchKey);

            List <Project_Assignment__c> lv= [SELECT Id,Project__c,Employee__c 
                                            FROM Project_Assignment__c
                                              WHERE Project__c=:searchkey.Project__c];

            Project_Assignment__c varnew= searchKey;

            Boolean icheck=true;
            
            for(Project_Assignment__c con:lv){
             If((con.Project__c==searchKey.Project__c )&&(con.Employee__c==searchKey.Employee__c)){
              icheck=false;
              return false;

              }
                                     
            }

              if (icheck==true) {
                insert varnew;
                System.debug('/////////////////      done'+varnew);  
                return true;
              }
              else{

                return false;
              }
                
            
                
           
  }
  




}
