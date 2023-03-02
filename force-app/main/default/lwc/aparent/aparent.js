import { LightningElement, api ,track, wire} from 'lwc';
import retrieveContactData from '@salesforce/apex/lwcAppExampleApex.retrieveContactData';
import getCase from '@salesforce/apex/GetCase.getCase';
const COLUMNS_CASE = [
   { label: ' Case No.', fieldName: 'CaseNumber'},
   { label: 'Account', fieldName: 'AccountName' }
];
export default class Aparent extends LightningElement {
//, type: 'text'

   @track columns=COLUMNS_CASE;

   @track error;

    @track currentAccountName;
    @track searchAccountName;
    @api varShow=false;
    @api varpardecison;
    @api varShowCase=false;
   @track caserecs;
      @api sKey;
      @track data1=[];

     handleChangeAccName(event){
       this.currentAccountName = event.target.value;     
       this.varShow = false; 
       this.varShowCase=false;
       this.sKey=this.currentAccountName ;
     }
 
     handleAccountSearch(){
        this.varShow = true;
        this.varpardecison=true;
 
     }
     handleAccountSearch2(){
         this.varShow = true;
         this.varpardecison=false;
  
      }
      handlecasegen(event){
         //var ids = event.detail.value.map(item => item.AccountName);
         this.sKey=event.detail.value;
         this.varShowCase=true;
         //alert(event.detail.value);
        // this.currentAccountName =event.detail.value;
         alert(this.sKey);
      }
         
      
       @wire(getCase, {keySearch: '$sKey'})
    getcase({data,error}){
      if(data){           
          //this.records = data;
          let tempRecords = JSON.parse( JSON.stringify( data ) );
          tempRecords = tempRecords.map( row => {
              return {...row, AccountName: row.Account.Name };
          })
          this.data1 = tempRecords;
          this.error = undefined;
          
         }else{
             this.error = error;
             this.data=undefined;
         }
         console.log('this is data '+data);
         //console.log('this is data '+data1);

      }

    
              /*


              @wire(getCase, {keySearch:'$currentAccountName'})
      getcase(result,error) {
          if (result) {
          //   let tempRecords = JSON.parse( JSON.stringify( result) );
           //  tempRecords = tempRecords.map( row => {
           //    return {...row, AccountName: row.Account.Name };})
           this.caserecs = result.map(row=>{
            return{...row, AccountName: row.Account.Name}
        });
            //this.caserecs = tempRecords;
               this.error = undefined;
  
          } else if (error) {
              this.error = error;
              this.data = undefined;
              
          }
       }
              
              getcase({ keySearch: '$searchKey' })
            .then(result=>{
                //this.caserecs = result;
                let tempRecords = JSON.parse( JSON.stringify( result ) );
                  tempRecords = tempRecords.map( row => {
                return {...row, AccountName: row.Account.Name };})
               this.caserecs = tempRecords;  
              })
                .catch(error => {
                  this.error = error;
              });



               
         
              */

             

     



}