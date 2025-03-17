class Inventory {
  
    constructor(){
        this.invent = [200, 545];
        this.rabanete_branco = [211, 559];
        this.rabanete_vermelho = [259, 557];
        this.batata = [307, 557];
        this.cebola = [355, 557];
        this.espinafre = [403, 557];
        this.cenoura = [451, 557];
        this.rosa = [499, 557];
        this.margarida = [547, 557];

        this.o_invent = [200, 545];
        this.o_rabanete_branco = [211, 557];
        this.o_rabanete_vermelho = [259, 557];
        this.o_batata = [307, 557];
        this.o_cebola = [355, 557];
        this.o_espinafre = [403, 557];
        this.o_cenoura = [451, 557];
        this.o_rosa = [499, 557];
        this.o_margarida = [547, 557];
    }
    
    check_click(x,y) {
        if (x > this.rabanete_branco[0] && x < (this.rabanete_branco[0]+26)) {
            if (y > this.rabanete_branco[1] && y < (this.rabanete_branco[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.rabanete_branco[1] += 2;
                return 'rabanete_branco'
            }
        }
        if (x > this.rabanete_vermelho[0] && x < (this.rabanete_vermelho[0]+26)) {
            if (y > this.rabanete_vermelho[1] && y < (this.rabanete_vermelho[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.rabanete_vermelho[1] += 2;
                return 'rabanete_vermelho'
            }
        }
        if (x > this.batata[0] && x < (this.batata[0]+26)) {
            if (y > this.batata[1] && y < (this.batata[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.batata[1] += 2;
                return 'batata'
            }
        }
        if (x > this.cebola[0] && x < (this.cebola[0]+26)) {
            if (y > this.cebola[1] && y < (this.cebola[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.cebola[1] += 2;
                return 'cebola'
            }
        }
        if (x > this.espinafre[0] && x < (this.espinafre[0]+26)) {
            if (y > this.espinafre[1] && y < (this.espinafre[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.espinafre[1] += 2;
                return 'espinafre'
            }
        }
        if (x > this.cenoura[0] && x < (this.cenoura[0]+26)) {
            if (y > this.cenoura[1] && y < (this.cenoura[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.cenoura[1] += 2;
                return 'cenoura'
            }
        }
        if (x > this.rosa[0] && x < (this.rosa[0]+26)) {
            if (y > this.rosa[1] && y < (this.rosa[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.rosa[1] += 2;
                return 'rosa'
            }
        }
        if (x > this.margarida[0] && x < (this.margarida[0]+26)) {
            if (y > this.margarida[1] && y < (this.margarida[1]+26)) {

                this.invent[1] = this.o_invent[1];
                this.rabanete_branco[1] = this.o_rabanete_branco[1];
                this.rabanete_vermelho[1] = this.o_rabanete_vermelho[1];
                this.batata[1] = this.o_batata[1];
                this.cebola[1] = this.o_cebola[1];
                this.espinafre[1] = this.o_espinafre[1];
                this.cenoura[1] = this.o_cenoura[1];
                this.rosa[1] = this.o_rosa[1];
                this.margarida[1] = this.o_margarida[1];

                this.margarida[1] += 2;
                return 'margarida'
            }
        }
        return false
    }
    
    draw() {
        image(inventory, this.invent[0], this.invent[1]);

        image(icons, this.rabanete_branco[0], this.rabanete_branco[1], 32, 32, 0, 0, 26, 26);
        image(icons, this.batata[0], this.batata[1], 32, 32, 0, 26, 26, 26);
        image(icons, this.rabanete_vermelho[0], this.rabanete_vermelho[1], 32, 32, 0, 52, 26, 26);
        image(icons, this.cebola[0], this.cebola[1], 32, 32, 52, 0, 26, 26);
        image(icons, this.espinafre[0], this.espinafre[1], 32, 32, 52, 52, 26, 26);
        image(icons, this.cenoura[0], this.cenoura[1], 32, 32, 52, 26, 26, 26);
        image(icons, this.rosa[0], this.rosa[1], 32, 32, 104, 26, 26, 26);
        image(icons, this.margarida[0], this.margarida[1], 32, 32, 104, 0, 26, 26);
    }
}