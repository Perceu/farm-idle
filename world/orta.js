class Orta {
  
    constructor(x, y, frames){
      this.padding_left = 16;
      this.padding_rigth = 32;
      this.cols = 20
      this.lines = 12
    }
    
    
    draw() {
        image(world_ui, 32, 32, 32, 32, 0, 0, 16, 16); 
        for (let i = 1; i <= this.cols;i++){
            let sum = i*32 
            image(world_ui, 32+sum, 32, 32, 32, 16, 0, 16, 16); 
        }
        image(world_ui, 32+(21*32), 32, 32, 32, 32, 0, 16, 16);
        
        for(let j = 2; j <= 12; j++) {
            image(world_ui, 32, 32*j, 32, 32, 0, 16, 16, 16); 
            for (let i = 1; i <= this.cols;i++){
                let sum = i*32 
                image(world_ui, 32+sum, (32*j), 32, 32, 16, 16, 16, 16); 
            }
            image(world_ui, 32+(21*32), (32*j), 32, 32, 32, 16, 16, 16); 
        }

        image(world_ui, 32, 32*13, 32, 32, 0, 32, 16, 16); 
        for (let i = 1; i <= this.cols;i++){
            let sum = i*32 
            image(world_ui, 32+sum, 32*13, 32, 32, 16, 32, 16, 16); 
        }
        image(world_ui, 32+(21*32), 32*13, 32, 32, 32, 32, 16, 16);
    }
  }