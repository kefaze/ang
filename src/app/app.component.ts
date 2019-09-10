import { Component } from "@angular/core";

import { store } from "../store";
import { addItems } from "../store/actions/bascketballActions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-demo";
  constructor() {
    console.log(store, "ss");
    store.dispatch(
      addItems({
        id: "11",
        name: "欧文",
        position: "后卫",
        age: "30"
      })
    );
    console.log(store.getState(), "sss");
  }
}
