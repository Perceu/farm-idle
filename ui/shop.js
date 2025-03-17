class Shop {
  
    constructor(){
        this.new_ground = [48, 450];
    }
    
    check_click(x,y) {
        if (x > this.new_ground[0] && x < (this.new_ground[0]+56)) {
            if (y > this.new_ground[1] && y < (this.new_ground[1]+85)) {
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
        image(buy, this.new_ground[0], this.new_ground[1]);
        image(icons, this.new_ground[0]+12, this.new_ground[1]+12, 32, 32, 104, 52, 26, 26);
        text('10', this.new_ground[0]+23, this.new_ground[1]+68);
    }
}