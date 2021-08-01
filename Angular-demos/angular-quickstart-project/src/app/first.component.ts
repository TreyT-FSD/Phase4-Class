import { Component } from "@angular/core";

@Component({
    selector: 'app-first',
    template: `<h2>First Component<h2>
              <p>This is the first component</p>`,  //can use back tick to do multi line template here. otherwise we would provide templateUrl and the file with the html
    styles: [`h2 {color:navy;}
            p { color: maroon; font-weight: bold}`]
})

export class FirstComponent{
    //logic goes here

}