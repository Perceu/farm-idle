let sprites;
let world;
let ground;
let plants;
let points;
let font;
let money_bar;
let ground_size
let world_ui
let shop

function preload() {
  font = loadFont('fonts/retro_gaming.ttf');
  sprites = loadImage('sprites/spritesheet.png');
  world = loadImage('sprites/world.png');
  money_bar = loadImage('sprites/money_bar.png');
  world_ui = loadImage('sprites/world_ui.png');
}

function get_ground(ground_size) {
  let rows = [];
  for(let i = 0; i < ground_size[0]; i++){
    let cels = []
    for(let j = 0; j < ground_size[1]; j++){
      cels.push([j,i]);
    }
    rows.push(cels);
  }
  return rows
}

function setup() {
  createCanvas(800, 600);
  textFont(font);
  textSize(14);
  fill('white');
  noSmooth();
  points = 0;
  ground_size = [4,4]
  ground = get_ground(ground_size);
  orta = new Orta()
  shop = new Shop()
  plants = [];
  change = 0
  for (var rows in ground) {
    for (var cell in ground[rows]){
      change += 1
      y = ground[rows][cell][0]*32
      x = ground[rows][cell][1]*32
      aleatorio = random(0,1)
      if ((change % 2)==0){
        plants.push(new RabaneteBranco(x+70,y+70, 80))
      }else if ((change % 3) == 0){
        plants.push(new RabaneteVermelho(x+70,y+70, 120))
      }else if ((change % 5) == 0){
        plants.push(new Cebola(x+70,y+70, 160))
      }else{
        plants.push(new Batata(x+70,y+70, 140))
      }
    }
  }
  cursor('/sprites/basic_2.png')
  
}

function new_ground() {
  ground_size[0] += 1
  ground_size[1] += 1
  cresceu_x = true
  cresceu_y = true
  if (ground_size[0] > 20){
    ground_size[0] = 20
    cresceu_x = false
  }

  if (ground_size[1] > 11){
    ground_size[1] = 11
    cresceu_y = false
  }
  if (cresceu_x || cresceu_y) {
    ground = get_ground(ground_size);
    return true
  }
  return false
}

function mouseReleased() {
  cursor('/sprites/basic_2.png')
}

function mousePressed() {
  cursor('/sprites/basic_1.png')
  for (let p in plants) {
    switch (plants[p].check_harvesting(mouseX, mouseY)) {
      case 'batata':
        points += 2;
        break;
      case 'rabante_branco':
        points += 1;
        break;
      case 'rabante_vermelho':
        points += 3;
        break;
      case 'cebola':
        points += 4;
        break;
      default:
        break;
    }
  }
  switch (shop.check_click(mouseX, mouseY)) {
    case 'new_ground':
      if (points > 10){
        if (new_ground()){
          points -= 10
        }
      }
      break;
  
    default:
      print('não')
      break;
  }
}

function draw() {
  background(40, 148, 76);
  image(money_bar,800-110,0, 110,18);
  orta.draw()
  shop.draw()
  len_text = points.toString().length
  text(points, 800-10-(8*len_text), 14);
  for (var rows in ground) {
    for (var cell in ground[rows]){
      y = ground[rows][cell][0]*32
      x = ground[rows][cell][1]*32
      image(world,x+64,y+64,32,32,16,0,16,16)
    }
  }
  for (p in plants) {
    plants[p].update()
    plants[p].draw_plant()
  }
}