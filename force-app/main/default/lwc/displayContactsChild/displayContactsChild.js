import { LightningElement, api ,track, wire} from 'lwc';
import retrieveContactData from '@salesforce/apex/lwcAppExampleApex.retrieveContactData';
import NAME_FIELD_name from '@salesforce/schema/Account.Name';
import NAME_FIELD_type from '@salesforce/schema/Account.Active__c';
import Case_Number from '@salesforce/schema/Case.CaseNumber';
import CASE_ACCOUNT from '@salesforce/schema/Account.Name';
import NAME_FIELD_amount from '@salesforce/schema/Account.AnnualRevenue'; 
import getCase from '@salesforce/apex/GetCase.getCase';
import { refreshApex } from '@salesforce/apex';




export default class DisplayContactsChild extends LightningElement {
@track wireRecord;
    
    @api searchAccountName;
    @api vardecision;
    @api records;
    @track dataNotFound;
    @api childName;
   @track columns = [
        { label: 'First Name', fieldName: 'FirstName', type: 'text' },
        { label: 'Last Name', fieldName: 'LastName', type: 'text' },
        { label: 'Email', fieldName: 'Email'}
    ];
   
     @wire (retrieveContactData,{keySearch:'$searchAccountName',dec:'$vardecision'})
    wireRecord({data,error}){
        if(data){           
            this.records = data;
            this.error = undefined;
            this.dataNotFound = '';
            if(this.records == ''){
                this.dataNotFound = 'There is no Contact related to this Account';
            }
           }else{
               this.error = error;
               this.data=undefined;
           }
    }

    handleactionone(event) {
                console.log('calling row action');
                console.log('Id='+event.detail.row.Id);
                const row = event.detail.row;
                //console.log('Showing Details: ' + JSON.stringify(row));
        const factor = event.detail.row;
        this.dispatchEvent(new CustomEvent('getparentaccs', {
          detail: factor
        }));



               
            }    
    

    handlesearchparentAccName(event){
        this.childName = event.target.value;     
        //this.varShow = false; 
      }

      
    calltoparent(event){
        const factor = childName;
    this.dispatchEvent(new CustomEvent('getparentaccs', {
      detail: factor
    }));
    }










}