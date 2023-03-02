import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import channel from '@salesforce/messageChannel/messageChannelOne__c';

export default class PubLWCUnrelated extends LightningElement {

    @wire(MessageContext)
    messageContext;


    handleIncrement(){
        const payload={
            operator:'add',
            constant:1,
            messagedata:'Hi, this is Add'
        };
        publish(this.messageContext,channel,payload );
    }


    handleDecrement(){
        const payload={
            operator:'subtract',
            constant:1,
            messagedata:'Hi, this is Subtract'
        };
        publish(this.messageContext,channel,payload);
    }


    handleMultiply(){
        const payload={
            operator:'multiply',
            constant:2,
            messagedata:'Hi, this is Multiply'
        };
        publish(this.messageContext,channel,payload);
    }





}