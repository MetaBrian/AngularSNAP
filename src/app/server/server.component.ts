//not just a class, a component
//denoted via a special decorator, a feature from TS
    //syntax is @x({})

import { Component } from '@angular/core'

@Component(
    {//id, prefixed with app usually
        selector:'app-server',
        templateUrl: './server.component.html'  
        //template is the html file holding the component's html
    }
)

export class ServerComponent {
//can assign variables, properties like regular javascript, numbers will convert to strings
UserName: string = 'MetaBrian';
}