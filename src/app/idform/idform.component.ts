import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-idform",
  templateUrl: "./idform.component.html",
  styleUrls: ["./idform.component.css"]
})
export class IdformComponent implements OnInit {
  message: string = "y";
  public makeIdFormGroup: FormGroup;
  public formValue: any;
  public formattedMessage: string = "y";
  public me: any;
  imessage: any;
  imessages: any;
  imessagess: any;
  imessagesss: any;
  public x = 0;
  public allIdNos: any[] = [];
  public allCards: any[] = [];
  public totalIds: any[] = [];
  public stringifiedallCards: string = "";
  public showSingleCard: boolean = false;


  static makeIdForm = () => {
    return {
      fullname: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      bloodgroup: new FormControl("", [Validators.required, Validators.maxLength(2)]),
      location: new FormControl("", [Validators.required])
    };
  };

  constructor( private fb: FormBuilder) {
    this.makeIdFormGroup = this.fb.group(IdformComponent.makeIdForm());
  }

  ngOnInit() {
   
  }
  

 

  async makeNewId() {
    await this.allCards.push(this.makeIdFormGroup.value);
    await localStorage.setItem("newid", JSON.stringify(this.allCards));
    await this.x++;
    await this.allIdNos.push(this.x);

    console.log("x", this.allIdNos);
    console.log("allcardss", this.allCards);
    console.log("newid4console", this.makeIdFormGroup.value);
    this.formValue = JSON.parse(localStorage.getItem("newid"));

    this.totalIds = this.allIdNos.slice(-1)[0];

  }
  onChanges(): void {
    console.log("unformatedtttttt");

    this.makeIdFormGroup.get("fullname").valueChanges.subscribe(
      res => {
        this.me = JSON.stringify(this.makeIdFormGroup.value);

        localStorage.setItem(
          "newName",
          JSON.stringify(this.makeIdFormGroup.value)
        );

        console.log("unformated", res);
        this.formattedMessage = res;
        console.log("forformated", this.formattedMessage);
      },
      error => {},
      () => {}
    );
  }
}
