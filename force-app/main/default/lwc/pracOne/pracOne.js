import { LightningElement, api,wire, track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import getRecord from '@salesforce/apex/AccountController.getAccounts';




export default class PracOne extends LightningElement {
  @api record=[];
  @api error;
  
    @api recordId;
    @api objectApiName='Opportunity';
   
   
    optyName = NAME_FIELD;
    optyAmount = AMOUNT_FIELD;
    optyType = TYPE_FIELD;
     idone;
    idtwo;
    id1;
    id2;

    @wire(getRecord, {recordId: '$recordId'})
     recordone({ error, data }) {
      if (data) {
          this.record =data;
          var ids = data.map(item => item.Id);
          this.id1=ids[0];
          this.id2=ids[1];
          this.error = undefined;
         
      } else if (error) {
          this.error = error;
          this.record = undefined;
          
      }
  }
 
    @api arrObj1;
       
    //var ids = record.map(item => item.Id);
    connectedCallback(){
      //window.setTimeout( 10000);    
      //this.idone=this.record[0];
      //this.idtwo=this.record[1];
     // this.id1=[...record][0].Id;
      //this.id2=[...record][1].Id;
     
    }
    
   
    handleload(){
      //window.setTimeout( 10000);
      //this.id1=[...record][0].Id;
      //this.id2=[...record][1].Id;
      //this.idone=record[0];
      //this.idtwo=record[1];
      //id1=idone.Id;
      //id2=idtwo.Id; 
     // var ids = record.map(item => item.Id);
     // this.id1=ids[0];
      //this.id2=ids[1];

    }
    
    
    

}