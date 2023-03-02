import { LightningElement, api ,track, wire} from 'lwc';
import retrieveContactData from '@salesforce/apex/lwcAppExampleApex.retrieveContactData';
import NAME_FIELD from '@salesforce/schema/Case.Account.Name';
export default class Achild extends LightningElement {

    @track columns = [
        { label: 'First Name', fieldName: 'FirstName', type: 'text' },
        { label: 'Last Name', fieldName: 'LastName', type: 'text' },
        { label: 'Email', fieldName: 'Email'},
        { label: 'Account Name', fieldName: 'AccountName'},
        { label: 'click for cases', fieldName: 'AccountIndustry',type: 'button', 
        typeAttributes: {
            label: 'click for cases'
        } }
     ];
    @api searchAccountName;
    @api vardecision;
    @track records=[];
    @api error;
    @track dataNotFound;    

    @wire (retrieveContactData,{keySearch:'$searchAccountName',dec:'$vardecision'})
    wireRecord({data,error}){
        if(data){           
            //this.records = data;
            let tempRecords = JSON.parse( JSON.stringify( data ) );
            tempRecords = tempRecords.map( row => {
                return {...row, AccountName: row.Account.Name, AccountIndustry: row.Account.Industry };
            })
            this.records = tempRecords;
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

   /* handleactionone(event) {
                console.log('calling row action');
                //console.log('Id='+event.detail.row.Id);
                //const row = event.detail.row;
                //console.log('Showing Details: ' + JSON.stringify(row));
        const factor = event.detail.row;
        this.dispatchEvent(new CustomEvent('getparentaccs', {
          detail: event.detail.row
        }));
    }
    */


    handleactionone = event => {
        
        console.log('calling row action one');
        //var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows()[0].AccountName;
        const factor = this.searchAccountName;
        this.dispatchEvent(new CustomEvent('getparentaccs', {
            detail: { key:"Id",
            value:factor }
          }));
        console.log('calling row action two');

}

}