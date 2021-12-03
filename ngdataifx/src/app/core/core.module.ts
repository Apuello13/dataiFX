import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [
        HeaderComponent,
        LayoutComponent,
        FooterComponent,
        NotFoundComponent,
    ],
    imports: [
        SharedModule
    ]
})
export class CoreModule{}