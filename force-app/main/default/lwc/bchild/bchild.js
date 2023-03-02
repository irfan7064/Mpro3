import { LightningElement, api ,track, wire} from 'lwc';
import retrieveContactData from '@salesforce/apex/lwcAppExampleApex.retrieveaccData';
import NAME_FIELD_name from '@salesforce/schema/Account.Name';
import namev from '@salesforce/schema/Account.Name';
import NAME_FIELD_type from '@salesforce/schema/Account.Active__c';

const COLU = [
    { label: ' Name', fieldName: NAME_FIELD_name.fieldApiName, 
       typeAttributes:{
        label:{fieldName:NAME_FIELD_name.fieldApiName},
        variant:'base'
        },
    type: 'button' },
 
    { label: 'Active', fieldName: NAME_FIELD_type.fieldApiName, type: 'text' }
];




export default class Bchild extends LightningElement {

    @track columns=COLU;
    /* [
        { label: 'Account Name', fieldName: 'Name'},
        { label: 'Account Name', fieldName: namev.fieldApiName, type:' button',
        typeAttributes:{
            label:{fieldName:namev.fieldApiName},
            variant:'base'
            }}
        ];
    */    
    @api vardecision;
    @track records=[];
    @api error;
    
    @wire (retrieveContactData,{dec:'$vardecision'})
    wireRecord({data,error}){
        if(data){           
            this.records = data;
            this.error = undefined;
            }else{
               this.error = error;
               this.data=undefined;
           }
    }

    handleactionone = event => {
        
        console.log('calling row action one');
       //var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows()[0].Name;
       var selectedRecords =event.detail.row;
        const factor = event.detail.row.Name;
        this.dispatchEvent(new CustomEvent('getparentaccs', {
            detail: { key:"Id",
            value:factor }
          }));
        console.log('calling row action two');

    }


    /*
    
    
    label:'Name',variant:'base' , name: {fieldName:'Name'},
        title: {fieldName:'Name'},
        disabled: false,
        value: {fieldName:'Name'},
        iconPosition: 'left',
    */
}