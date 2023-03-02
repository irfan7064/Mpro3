import { api, LightningElement, wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import channel from '@salesforce/messageChannel/messageChannelOne__c';



export default class SubLWCUnrelated extends LightningElement {
    counter=0;
    subscription=null;
    @api textmessage='';
    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribetochannel();

    }
    
    subscribetochannel(){
        this.subscription=subscribe(this.messageContext,
            channel,(msg)=>this.handlemessage(msg)
            );
    }

    handlemessage(msgs){
        if(msgs.operator=='add'){
            this.counter+=msgs.constant;
            this.textmessage=msgs.messagedata;
        }
        else if(msgs.operator=='subtract'){

            this.counter-=msgs.constant;
            this.textmessage=msgs.messagedata;


        }
        else if(msgs.operator=='multiply'){

            this.counter*=msgs.constant;
            this.textmessage=msgs.messagedata;

            
        }



    }




}