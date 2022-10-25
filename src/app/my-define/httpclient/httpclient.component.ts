import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  client : HttpClient;
  constructor(client: HttpClient) { 
    this.client = client;
  }


  loadProduct(){
    let url =  'https://mallapi.dev.anhuanjia.com/mall4cloud_search/ua/search/pc_page?pageNum=1&pageSize=12&keyword=%E5%8F%A3%E7%BD%A9&needActivity=1';
    //发起异步请求，并订阅
    this.client.get(url).subscribe((res) => {
      console.log('订阅响应的消息');
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
