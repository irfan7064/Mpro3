import { LightningElement, track, wire,api } from 'lwc';

import NAME_FIELD_name from '@salesforce/schema/Account.Name';
import NAME_FIELD_type from '@salesforce/schema/Account.Active__c';
import Case_Number from '@salesforce/schema/Case.CaseNumber';
import CASE_ACCOUNT from '@salesforce/schema/Account.Name';
import NAME_FIELD_amount from '@salesforce/schema/Account.AnnualRevenue'; 
import getCase from '@salesforce/apex/GetCase.getCase';
import { refreshApex } from '@salesforce/apex';


const COLUMNS_CASE = [
       { label: ' Case No.', fieldName: Case_Number.fieldApiName, 
   
       typeAttributes:{
           label:{fieldName:Case_Number.fieldApiName},
           variant:'base'
           },
       type: 'button' },
    
       { label: 'Account', fieldName: 'AccountName', type: 'text' }
   ];

export default class DisplayContactsOnAccountName extends LightningElement {

   @track currentAccountName;
   @track searchAccountName;
   @api varShow=false;
   @api varpardecison;
    handleChangeAccName(event){
      this.currentAccountName = event.target.value;     
      this.varShow = false; 
    }

    handleAccountSearch(){
       this.varShow = true;
       this.varpardecison=true;

    }
    handleAccountSearch2(){
        this.varShow = true;
        this.varpardecison=false;
 
     }

     @track columns_case=COLUMNS_CASE;
    @track getacc;
    @track error;
    rowOffset=1;
    _wiredResult;
    @track data1;

     @api varshowrelatedparents=false;
     @api searchchildname;
     

   
    
}