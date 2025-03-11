class Shop {
  
    constructor(){
        this.new_ground = [64, 480];
    }
    
    check_click(x,y) {
        if (x > this.new_ground[0] && x < (this.new_ground[0]+32)) {
            if (y > this.new_ground[1] && y < (this.new_ground[1]+32)) {
                this.new_ground[1] += 1;
                setTimeout(()=>{
                    this.new_ground[1] -= 1;
                }, 100);
                return 'new_ground'
            }
        }
        return false
    }
    
    draw() {
        image(world, this.new_ground[0], this.new_ground[1], 32, 32, 16, 32, 16, 16); 
    }
}