import { LightningElement, api,wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
//import Name from '@salesforce/schema/Account.Name';
//import Opportunity from '@salesforce/schema/AccountPartner.Opportunity';
//import getRecord from '@salesforce/apex/AccountController.getAccounts';

export default class Pchild extends LightningElement {
    //@api objectApiName='Opportunity';
    optyName = NAME_FIELD;
    optyAmount = AMOUNT_FIELD;
    optyType = TYPE_FIELD;
    @api accid;

   
     }