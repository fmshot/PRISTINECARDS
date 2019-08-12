import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-idtable",
  templateUrl: "./idtable.component.html",
  styleUrls: ["./idtable.component.css"]
})
export class IdtableComponent implements OnInit {
  public idTable: any;
  public parsedId: any;
  constructor() {}

  ngOnInit() {
    this.getAllIds();
    // localStorage.getItem("newid");
  }

  getAllIds() {
    JSON.parse(localStorage.getItem('current_user'));
    this.idTable = JSON.parse(localStorage.getItem("newid"));
    console.log('tableid', this.idTable);
    this.idTable.filter(idcard=>{
      this.parsedId = JSON.parse(localStorage.getItem('newid'));

    })
    console.log('parsedId', this.parsedId);
    this.parsedId.filter(rrr=>{
      console.log('parsedIdname', rrr.fullname);

    })

  }
}



// response.filter(auction => {
//   // if(auction.productObject[0]=='{'){
//     auction.productObject = JSON.parse(auction.productObject);
//   // }
//   return (auction.startAuction);
// });
