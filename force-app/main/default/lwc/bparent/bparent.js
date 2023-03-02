import { LightningElement, api ,track, wire} from 'lwc';
import getCase from '@salesforce/apex/GetCase.getCase';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

const COLUMNS_CASE = [
   { label: ' Case No.', fieldName: 'CaseNumber'},
   { label: 'Account', fieldName: 'AccountName' }
];
export default class Bparent extends  NavigationMixin(LightningElement) {

   @track columns=COLUMNS_CASE;
   @track error;
   //@track currentAccountName;
    @track searchAccountName;
    @api varShow=false;
    @api varpardecison;
    @api varShowCase=false;
   @track caserecs;
      @api sKey;
      @track data1=[];

    /* handleChangeAccName(event){
       this.currentAccountName = event.target.value;     
       this.varShow = false; 
       this.varShowCase=false;
       this.sKey=this.currentAccountName ;
     }*/
 
     handleAccountSearch(){
        this.varShow = true;
        this.varpardecison='Yes';
        this.varShowCase=false;
 
     }
     handleAccountSearch2(){
         this.varShow = true;
         this.varpardecison='No';
         this.varShowCase=false;
  
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

    
      
      handlecasecreation(){

         this[NavigationMixin.Navigate]({
         type: 'standard__objectPage',
         attributes: {
             objectApiName: 'Case',
             actionName: 'home'
         }
     });

      }
      handlecasecreation1(){

        this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
            pageName: 'chatter'
        }
    });

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