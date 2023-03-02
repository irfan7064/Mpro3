import { LightningElement, track, wire, api } from 'lwc';
import getRecordsofproassigns from '@salesforce/apex/BringDataOfProjectAssignment.getRecordsofproassigns';
import getdraftrecords from '@salesforce/apex/BringDataOfProjectAssignment.getdraftrecords';
import getcomprecords from '@salesforce/apex/BringDataOfProjectAssignment.getcomprecords';
import getskillrecords from '@salesforce/apex/BringDataOfProjectAssignment.getskillrecords';


//import NAME_FIELD from '@salesforce/schema/Project_Assignment__c.Project_Name_Assigned__c';
//import REVENUE_FIELD from '@salesforce/schema/Project_Assignment__c.Feedback__c';


const DELAY = 300;
const columns = [
    { label: 'Project Name', fieldName: 'Project_Name_Assigned__c' },
    { label: 'Feedback', fieldName:'Feedback__c'} ];

    

export default class Lwcmproject extends LightningElement {
    @track searchKey = '';
    @api recordId;
    anyproperty=true;
  //  fields = [NAME_FIELD, REVENUE_FIELD];

    @wire(getRecordsofproassigns, { searchKey: '$searchKey' })
    contacts;

    @wire(getdraftrecords,{searchKey: '$searchKey'})
    draftProjects;

   @wire(getcomprecords,{searchKey: '$searchKey'})
   compProjects;

    @api drecs;
     

   /**  @wire(getcomprecords,{searchKey: '$searchKey'})
   wiredAccounts({error,data})
   {
        if (data) {
            this.drecs = data;
        } else if (error) {

            thi.error=event.target.value;
            this.error = error;
        }
    }*/

    @wire(getskillrecords,{searchKey: '$searchKey'})
    srecs;

//connectedCallback function is similar to init method in Lightning Components.
    connectedCallback(){
        this.searchKey = this.recordId;
    }

   

   
    
}