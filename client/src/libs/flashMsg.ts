// used with Components/Flash.vue to show messages
import { Flash } from '@/libs/interface';

class FlashMsg {
  id: string;
  flashs: Flash[] = [];
  flash: Flash = {type: -1, info: ''};
  timeoutRef: null | number = null;
 
  constructor(id: string) {
    this.id = id;
  }

  get msg(): Flash {
    return this.flash;
  }
  
  set msg(m: Flash) {
    if(m != null) this.flashs.push(m);
    this.flashCheck();
    
  }
  flashCheck() {
    if(this.timeoutRef === null && this.flashs.length != 0) {
      this.flash = JSON.parse(JSON.stringify(this.flashs[0]));
      this.flashs.splice(0,1);
      this.timeoutRef = setTimeout(this.flashTick.bind(this), 3200);
    }
  }
  flashTick() {
    this.timeoutRef = null;
    this.flash = {type: -1, info: ''};
    setTimeout(this.flashCheck.bind(this), 100);
  }

}


export default FlashMsg;