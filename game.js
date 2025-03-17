let sprites;
let world;
let ground;
let plants;
let points;
let font;
let money_bar;
let ground_size;
let shop;
let buy;
let buy_sell;
let inventory;
let selected_sement;

function preload() {
  font = loadFont('fonts/retro_gaming.ttf');
  sprites = loadImage('sprites/spritesheet.png');
  world = loadImage('sprites/world.png');
  money_bar = loadImage('sprites/money_bar.png');
  inventory = loadImage('sprites/inventory.png');
  buy = loadImage('sprites/buy.png');
  buy_sell = loadImage('sprites/buy_sell.png');
  icons = loadImage('sprites/icons.png');
  selected_sement = RabaneteBranco;
}

function get_ground(ground_size) {

  let rows = [];

  for (let i = 0; i < ground_size[1]; i++) {
    let cels = []
    for (let j = 0; j < ground_size[0]; j++) {
      cels.push([i,j]);
    }
    rows.push(cels);
  }

  if (ground.length > 0){
    for (var n_rows in ground) {
      for (var n_cell in ground[n_rows]) {
        if (ground[n_rows][n_cell][2]) {
          rows[n_rows][n_cell][2] = ground[n_rows][n_cell][2];
        }
      }
    }
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
  ground = [];
  ground_size = [2, 2];
  ground = get_ground(ground_size);
  orta = new Orta();
  shop = new Shop();
  inventor= new Inventory();
  cursor('/sprites/basic_2.png')
}

function new_ground() {
  ground_size[0] += 1
  ground_size[1] += 1
  cresceu_x = true
  cresceu_y = true

  if (ground_size[0] > 20) {
    ground_size[0] = 20
    cresceu_x = false
  }

  if (ground_size[1] > 11) {
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

  for (var rows in ground) {
    for (var cell in ground[rows]) {
      y = ground[rows][cell][0] * 32;
      x = ground[rows][cell][1] * 32;
      
      if (mouseY - 70 > y && mouseY - 70 < (y + 32)) {
        if (mouseX - 70 > x && mouseX - 70 < (x + 32)) {
          if (ground[rows][cell].length < 3) {
            ground[rows][cell].push(new selected_sement(x + 70, y + 70, 80));
          }
        }
      }
      if (ground[rows][cell].length > 2){
        switch (ground[rows][cell][2].check_harvesting(mouseX, mouseY)) {
          case 'batata':
            points += 2;
            break;
          case 'rabanete_branco':
            points += 1;
            break
          case 'rabanete_vermelho':
            points += 3;
            break
          case 'cebola':
            points += 4;
            break
          case 'cenoura':
            points += 6;
            break
          case 'espinafre':
            points += 5;
            break
          case 'rosa':
            points += 10;
            break
          case 'margarida':
            points += 8;
            break
          default:
            break;
        }
      }
    }
  }
  
  switch (inventor.check_click(mouseX, mouseY)) {
    case 'rabanete_branco':
      selected_sement = RabaneteBranco
      break;
    case 'rabanete_vermelho':
      selected_sement = RabaneteVermelho
      break;
    case 'cebola':
      selected_sement = Cebola
      break;
    case 'cenoura':
      selected_sement = Cenoura
      break;
    case 'espinafre':
      selected_sement = Espinafre
      break;
    case 'batata':
      selected_sement = Batata
      break;
    case 'rosa':
      selected_sement = Rosa
      break;
    case 'margarida':
      selected_sement = Margarida
      break;
  }

  switch (shop.check_click(mouseX, mouseY)) {
    case 'new_ground':
      if (points > 10) {
        if (new_ground()) {
          points -= 10
        }
      }
      break;
    default:
      break;
  }
}

function draw() {
  background(40, 148, 76);
  orta.draw();
  shop.draw();
  inventor.draw();
  
  len_text = points.toString().length;
  for (var rows in ground) {
    for (var cell in ground[rows]) {
      y = ground[rows][cell][0] * 32;
      x = ground[rows][cell][1] * 32;
      image(world, x + 64, y + 64, 32, 32, 32, 64, 16, 16);
      if (ground[rows][cell].length > 2) {
        ground[rows][cell][2].update();
        ground[rows][cell][2].draw_plant();
      }
    }
  }
  image(money_bar, 610, 10, 120, 32);
  text(points, 715 - (8 * len_text), 30);
}