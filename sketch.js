
let table;
let selection;
let book;
let pants;
let shirt
let star;
let font;



function preload(){
  table = loadTable('opshopfinds.csv', 'csv', 'header');
  book = loadImage ('images/book.png');
  pants = loadImage( 'images/pants.png.webp');
  shirt = loadImage('images/shirt.png');
  star = loadImage('images/star.png');
  


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  selection = createSelect();
  selection.position (windowWidth/4 , 100)
  selection.option ('Books');
  selection.option ('Pants')
  selection.option ('Shirts')
  selection.option ('Knickknacks')
  
  }
  
  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }


  function weekLabels(){
  for( x = 0; x < table.getRowCount(); x++){
  let row = table.getRow(x);
  let week = row.get("weeks");
  text(week, windowWidth/4 + x * 80 , windowHeight/4 );
  textSize(30)
  textFont('Courier New')
  }
  }
  
  
  function showBooks(){
  for( x = 0; x < table.getRowCount(); x++){
  let row = table.getRow(x);
  let countBooks = row.get("Books");
  for (y = 0; y < countBooks; y++){
  image (book, windowWidth/4 + 6 + x * 80, windowHeight/4 + 30 + y * 60, 70, 70)
  }
  }
  }
  
  
  
  function showPants(){
  for( x = 0; x < table.getRowCount(); x++){
  let row = table.getRow(x);
  let countPants = row.get("Pants");
  for (y = 0; y < countPants; y++){
  image (pants, windowWidth/4 + 6 + x * 80, windowHeight/4 + 50 + y * 90, 70, 70)
  }
  }
  }
  
  function showShirts(){
    for( x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countShirts = row.get("Tops");
    for (y = 0; y < countShirts; y++){
    image (shirt, windowWidth/4 + 6 + x * 80, windowHeight/4 + 60 + y * 90, 70, 70)
    }
    }
    }

    function showStars(){
      for( x = 0; x < table.getRowCount(); x++){
      let row = table.getRow(x);
      let countStars = row.get("knickknacks");
      for (y = 0; y < countStars; y++){
      image (star, windowWidth/4 + 6 + x * 80, windowHeight/4 + 50 + y * 90, 70, 70)
      }
      }
      }
  
  function draw() {
  background(140, 180, 150);
  fill(0);
  weekLabels();
  text('Weeks', windowWidth/4 + 130, windowHeight/8 + 40)
  

  let x = selection.selected();
  if (x === 'Books'){
    showBooks();
  } else if (x === 'Pants'){
    showPants();
  } else if (x === 'Shirts'){
    showShirts();
  } else if (x === 'Knickknacks'){
    showStars();
   }

  }
  
  








