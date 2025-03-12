class Cebola {
  
  constructor(x, y, frames){
    this.frames = frames;
    this.y = y;
    this.x = x;
    this.actual_frame = 0;
    this.harvesting = false
  }
  
  update(){ 
    this.actual_frame += 1;
    if ((this.actual_frame % this.frames)==0) {
      this.actual_frame = this.frames
    }
  }
  
  check_harvesting(x, y) {
    if (x > this.x && x < (this.x+24)) {
      if (y > this.y && y < (this.y+24)){
          if (this.harvesting){
            this.actual_frame = 0;
            this.harvesting = false;
            return 'batata';
          }
        }
      }
      return '';
  }
  
  draw_plant() {
    if (this.actual_frame < (this.frames * 0.2)){
      image(sprites, this.x, this.y, 16, 16, 144, 12, 16, 16); 
    }else if (this.actual_frame < (this.frames * 0.4)){
        image(sprites, this.x, this.y, 16, 16, 160, 12, 16, 16); 
    }else if (this.actual_frame < (this.frames * 0.6)){
        image(sprites, this.x, this.y, 16, 16, 176, 12, 16, 16);
    }else if (this.actual_frame < (this.frames * 0.8)){
        image(sprites, this.x, this.y, 16, 16, 128, 16, 16, 16); 
    }else{
        this.harvesting = true
        let quick_y = random(-1, 1);
        let quick_x = random(-1, 1);
        image(sprites, this.x+quick_x, this.y+quick_y, 16, 16, 128, 16, 16, 16);
    }
  }
}