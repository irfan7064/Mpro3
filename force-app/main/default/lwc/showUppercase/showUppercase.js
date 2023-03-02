import { LightningElement ,api} from 'lwc';

export default class ShowUppercase extends LightningElement {


    @api nl;

    handleInputChange(event){
        //  var str2 = event.detail.value;
          this.nl=(event.detail.value).toUpperCase();
       }

       alist=[
        {Id:233,name:'john'

        },
        {Id:263,name:'jinny'

        }
       ]
   
   
}