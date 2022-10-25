import { Injectable } from "@angular/core";

//所有服务对象都是可被注入的
@Injectable({
    'providedIn': "root"//类似于在主模块中注册
    //指定当前服务对象在“根模块”中提供
})
export class LogService{
    doLog(action: String) {
        let username = "admin2";
        let time = new Date().getTime();
        console.log(`管理员:${username},时间:${time},动作:${action}`)
    }
}