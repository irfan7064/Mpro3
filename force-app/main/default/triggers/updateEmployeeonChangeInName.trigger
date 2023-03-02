trigger updateEmployeeonChangeInName  on Project_Assignment__c (before update) {
    set<Id> lstId = new set<Id>();
    for(Project_Assignment__c Con :trigger.old){
        lstId.add(Con.Employee__c);
    }
    
    list<Employee__c> lstAcc = [select id,Employee_Status__c From Employee__c Where Id IN :lstId];
    for(Employee__c Acc :lstAcc){
        Acc.Employee_Status__c = 'Unassigned';
        system.debug('32project assignment emp recs from child records ');
    }
    update lstAcc;
    }