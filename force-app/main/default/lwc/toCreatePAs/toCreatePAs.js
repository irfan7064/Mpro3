import { LightningElement ,track,api,wire } from 'lwc';
//import NAME_FIELD from '@salesforce/schema/Account.Name';
import getRecordsofproassigns from '@salesforce/apex/BringEmployeesAble.getRecordsofprojectname';

import createpas from '@salesforce/apex/BringEmployeesAble.createPAs';
import giveproject from '@salesforce/apex/BringEmployeesAble.giveproject';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Project_Assignment__c';
import ENAME_FIELD from '@salesforce/schema/Project_Assignment__c.Employee__c';
import PROJECT_FIELD from '@salesforce/schema/Project_Assignment__c.Project__c';
//import TECHSKILL_FIELD from '@salesforce/schema/Project_Assignment__c.Project_Tech_skill__c';



let i=0;
export default class ToCreatePAs extends LightningElement {

  @api searchKey = '';
  @api recordId;
    @track error;   //this holds errors

    @track items = []; //this holds the array for records with value & label

    @track value = '';  //this displays selected value of combo box

    @track pname = PROJECT_FIELD;
    @track ename = ENAME_FIELD;

    @track pvar;
   

    rec = {
      Project__c : this.pname,
      Employee__c : this.ename
      
    }
    
    @wire(giveproject, { searchKey: '$searchKey' })
    project({ error, data }) {
      if (data) {
          for(i=0; i<data.length; i++) {
              console.log('id=' + data[i].Id);
              //this.items = [...this.items ,{value: data[i].Id , label: data[i].Name__c}];
              this.pvar=data[0];                                   
          }                
          this.error = undefined;
      } else if (error) {
          this.error = error;
        }
  };

    

    @wire(getRecordsofproassigns, { searchKey: '$searchKey' })
    Employees({ error, data }) {
      if (data) {
          for(i=0; i<data.length; i++) {
              console.log('id=' + data[i].Id);
              this.items = [...this.items ,{value: data[i].Id , label: data[i].Name__c}];                                   
          } 

          this.error = undefined;
      } else if (error) {
          this.error = error;
        }
  }
  
  get statusOptions() {
      
      
     console.log('hi irfan'+this.items);

    return this.items ;

  }

    
    connectedCallback(){
      this.searchKey = this.recordId;
      this.rec.Project__c=this.pvar;
    }
    renderedCallback() {
      this.rec.Project__c=this.pvar;
    }
       
     

    searchKey = '';
    contacts;
    error;

    handleKeyChange(event) {
        this.searchKey = event.target.value;
        this.rec.Employee__c=event.target.value;
        console.log('from irfan  selectedOption=' + this.searchKey);
        setTimeout(function() {
          window.location.reload();
        }, 3000);
        
    }

    handleSearch() {
        createpas({ searchKey: this.rec })
            .then((result) => {
                this.contacts = result;
                this.error = error;
                this.dispatchEvent(
                  new ShowToastEvent({
                      title: 'Success',
                      message: 'Project assignment created',
                      variant: 'success',
                  }),
              );
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
                this.dispatchEvent(
                  new ShowToastEvent({
                      title: 'Error creating record-check assigned number and required number ',
                      message: error.body.message,
                      variant: 'error',
                  }),
              );
              console.log("error", JSON.stringify(this.error));


            });
    }

   






}