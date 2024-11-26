import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-num',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './num.component.html',
  styleUrl: './num.component.css'
})
export class NumComponent {
  num !: number;
  doubleNum !: number;
  displayDuplaNum: boolean = false;
  resultList: number[] = [];

  getNum() {
    console.log('Duplázás...')
    const result = this.num * 2;
    this.doubleNum = result;
    this.resultList.push(result);
    this.displayDuplaNum = true;
    console.log(this.resultList)
  }

}
