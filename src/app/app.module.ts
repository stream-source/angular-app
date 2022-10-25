import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOne } from './my-define/one.component';
import { TwoComponent } from './my-define/two/two.component';
import { ThreeComponentComponent } from './my-define/three-component/three-component.component';
import { FourComponentComponent } from './my-define/four-component/four-component.component';
import { BuyCountComponent } from './my-define/buy-count/buy-count.component';
import { NgforComponent } from './my-define/ngfor/ngfor.component';
import { NgifComponent } from './my-define/ngif/ngif.component';
import { NgstyleComponent } from './my-define/ngstyle/ngstyle.component';
import { NgswitchComponent } from './my-define/ngswitch/ngswitch.component';
import { NgmodelComponent } from './my-define/ngmodel/ngmodel.component';
//导入ngmodel
import { FormsModule } from '@angular/forms';
import { TodlistComponent } from './my-define/todlist/todlist.component';
import { TablelistComponent } from './my-define/tablelist/tablelist.component';
import { SexPipe } from './my-define/tablelist/sex.pipe';
import { ZzmmPipe } from './my-define/tablelist/zzmm.pipe';
import { CreateobjectComponent } from './my-define/createobject/createobject.component';
import { HttpclientComponent } from './my-define/httpclient/httpclient.component';

/**
 * @NgModule标识其为模块，模块中注册组件
 *
 */
@NgModule({
  //宣言，声明组件
  declarations: [
    AppComponent,
    ComponentOne,
    TwoComponent,
    ThreeComponentComponent,
    FourComponentComponent,
    BuyCountComponent,
    NgforComponent,
    NgifComponent,
    NgstyleComponent,
    NgswitchComponent,
    NgmodelComponent,
    TodlistComponent,
    TablelistComponent,
    SexPipe,
    ZzmmPipe,
    CreateobjectComponent,
    HttpclientComponent
  ],
  imports: [
    //导入模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
