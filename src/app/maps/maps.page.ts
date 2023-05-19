import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Queue, { QueueWorker } from 'queue';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})

export class MapsPage implements OnInit {
             
  private httpClient: HttpClient

  constructor(http: HttpClient, private elementRef: ElementRef) {
    this.httpClient = http;
  }

  @ViewChild('canvas', { static: true })

  animDelay = 0;
  startNodeColor = "";
  endNodeColor = "";
  shapedimension = 0;
  lineWidth = 0.0;

  shapes: any; //2d array of square nodes
  canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  ctxGrid: any;

  drawWall = true;
  eraseWall = false;
  changeStartNode = false;
  changeEndNode = false;

  disableButtons = false;

  ngOnInit(): void {

    // Initialize values
    this.animDelay = 15;
    this.startNodeColor = "#FF3600";
    this.endNodeColor = "#00AB5C";
    this.shapedimension = 13;
    this.lineWidth = 0.01;

    // Initialize array and grid
    this.shapes = new Array(95);
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i] = new Array(40);
    }

    this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    this.ctxGrid = this.canvas.getContext('2d');
    this.ctxGrid.canvas.height = 520;
    this.ctxGrid.canvas.width = 1235;
    this.ctxGrid.translate(0.5, 0.5);
    
    this.sampleMaze('assets/cyberjaya.txt');

    this.resetGrid();
  }
  
  getDirection() {
    this.drawWall = false;
    this.eraseWall = false;
    this.changeStartNode = true;
    this.changeEndNode = true;

    const fromInput = document.querySelector('#from-input') as HTMLIonInputElement;
    const toInput = document.querySelector('#to-input') as HTMLIonInputElement;
  
    const fromValue = fromInput.value;
    const toValue = toInput.value;

    const coordinates: { [key:string]: { x: number, y: number } } = {
      entrance: { x: 8, y: 427 }, entrance2: { x:641, y: 359},
      booth1: { x:76, y: 310}, booth2: { x:120, y: 310}, booth3: { x:173, y: 310}, booth4: { x:230, y: 310}, booth5: { x:358, y: 310},
      booth6: { x:409, y: 310}, booth7: { x:461, y: 310}, booth8: { x:510, y: 310}, booth9: { x:565, y: 310}, booth10: { x:711, y: 310},
      booth11: { x:777, y: 310}, booth12: { x:800, y: 310}, booth13: { x:942, y: 310}, booth14: { x:965, y: 310}, booth15: { x:999, y: 310},
      booth16: { x:1022, y: 310}, booth17: { x:1044, y: 310}, booth18: { x:1072, y: 310}, booth19: { x:1095, y: 310}, booth20: { x:68, y: 161},
      booth21: { x:68, y: 186}, booth22: { x:66, y: 218}, booth23: { x:71, y: 239}, booth24: { x:68, y: 269}, booth25: { x: 178, y: 165},
      booth26: { x:178, y: 189}, booth27: { x:178, y: 218}, booth28: { x:178, y: 239}, booth29: { x:178, y: 269}, booth30: { x: 215, y: 165},
      booth31: { x:215, y: 186}, booth32: { x:215, y: 218}, booth33: { x:215, y: 239}, booth34: { x:215, y: 269}, booth35: { x: 319, y: 165},
      booth36: { x:319, y: 186}, booth37: { x:319, y: 218}, booth38: { x:319, y: 239}, booth39: { x:319, y: 269}, booth40: { x: 359, y: 165},
      booth41: { x:359, y: 186}, booth42: { x:359, y: 218}, booth43: { x:359, y: 239}, booth44: { x:359, y: 269}, booth45: { x: 464, y: 165},
      booth46: { x:464, y: 186}, booth47: { x:464, y: 218}, booth48: { x:464, y: 239}, booth49: { x:464, y: 269}, booth50: { x: 501, y: 165},
      booth51: { x:501, y: 186}, booth52: { x:501, y: 218}, booth53: { x:501, y: 239}, booth54: { x:501, y: 269}, booth55: { x: 603, y: 165},
      booth56: { x:603, y: 186}, booth57: { x:603, y: 218}, booth58: { x:603, y: 239}, booth59: { x:603, y: 269}, booth60: { x: 640, y: 165},
      booth61: { x:640, y: 186}, booth62: { x:640, y: 218}, booth63: { x:640, y: 239}, booth64: { x:640, y: 269}, booth65: { x: 722, y: 176},
      booth66: { x:722, y: 199}, booth67: { x:722, y: 225}, booth68: { x:722, y: 255}, booth69: { x:722, y: 278}, booth70: { x: 800, y: 165},
      booth71: { x:800, y: 186}, booth72: { x:800, y: 218}, booth73: { x:800, y: 239}, booth74: { x:800, y: 269}, booth75: { x: 839, y: 165},
      booth76: { x:839, y: 186}, booth77: { x:839, y: 218}, booth78: { x:839, y: 239}, booth79: { x:839, y: 269}, booth80: { x: 943, y: 165},
      booth81: { x:943, y: 186}, booth82: { x:943, y: 218}, booth83: { x:943, y: 239}, booth84: { x:943, y: 269}, booth85: { x: 981, y: 165},
      booth86: { x:981, y: 186}, booth87: { x:981, y: 218}, booth88: { x:981, y: 239}, booth89: { x:981, y: 269}, booth90: { x: 1083, y: 165},
      booth91: { x:1083, y: 186}, booth92: { x:1083, y: 218}, booth93: { x:1083, y: 239}, booth94: { x:1083, y: 269}, booth95: { x: 1124, y: 81},
      booth96: { x:1124, y: 107}, booth97: { x:1124, y: 134}, booth98: { x:1124, y: 162}, booth99: { x:1124, y: 188}, booth100: { x: 1124, y: 218},
      booth101: { x:1124, y: 237}, booth102: { x:1124, y: 262}, booth103: { x:1172, y: 83}, booth104: { x:1172, y: 108}, booth105: { x: 1172, y: 134},
      booth106: { x:1172, y: 159}, booth107: { x:1172, y: 186}, booth108: { x:1172, y: 215}, booth109: { x:1172, y: 243}, booth110: { x: 1178, y: 266},
      booth111: { x:111, y: 60}, booth112: { x:164, y: 60}, booth113: { x:215, y: 60}, booth114: { x:265, y: 60}, booth115: { x: 318, y: 60},
      booth116: { x:374, y: 60}, booth117: { x:470, y: 60}, booth118: { x:527, y: 60}, booth119: { x:578, y: 60}, booth120: { x: 725, y: 60},
      booth121: { x:772, y: 60}, booth122: { x:828, y: 60}, booth123: { x:916, y: 60}, booth124: { x:967, y: 60}, booth125: { x: 1020, y: 60},
      booth126: { x:1070, y: 60}, booth127: { x: 1067, y: 381}
    };

    // const MelakaCoordinates = {
    //   entrance: { x: 0, y: 0}, entrance_booth: {x:0,y:0},
    //   booth1: { x:76, y: 310}, booth2: { x:120, y: 310}, booth3: { x:173, y: 310}, booth4: { x:230, y: 310}, booth5: { x:358, y: 310},
    //   booth6: { x:409, y: 310}, booth7: { x:461, y: 310}, booth8: { x:510, y: 310}, booth9: { x:565, y: 310}, booth10: { x:711, y: 310},
    //   booth11: { x:777, y: 310}, booth12: { x:800, y: 310}, booth13: { x:942, y: 310}, booth14: { x:965, y: 310}, booth15: { x:999, y: 310},
    //   booth16: { x:1022, y: 310}, booth17: { x:1044, y: 310}, booth18: { x:1072, y: 310}, booth19: { x:1095, y: 310}, booth20: { x:68, y: 161},
    //   booth21: { x:68, y: 186}, booth22: { x:66, y: 218}, booth23: { x:71, y: 239}, booth24: { x:68, y: 269}, booth25: { x: 178, y: 165},
    //   booth26: { x:178, y: 189}, booth27: { x:178, y: 218}, booth28: { x:178, y: 239}, booth29: { x:178, y: 269}, booth30: { x: 215, y: 165},
    //   booth31: { x:215, y: 186}, booth32: { x:215, y: 218}, booth33: { x:215, y: 239}, booth34: { x:215, y: 269}, booth35: { x: 319, y: 165},
    //   booth36: { x:319, y: 186}, booth37: { x:319, y: 218}, booth38: { x:319, y: 239},
    //   tech_booth: { x:319, y: 186}, lpreproom: { x:319, y: 218}, rpreproom: { x:319, y: 239}, toilet: { x:319, y: 186}, 
    //   instru_room: { x:319, y: 218}, performance: { x:319, y: 239},
    // }

    // const buttonElement = this.elementRef.nativeElement.querySelector('#cyberjaya');
    // const buttonName = buttonElement.name;
    // console.log('Button name:', buttonName);

    // // Determine the coordinates based on the selected location
    // let coordinates;

    // if (buttonName === 'cyberjaya') {
    //   coordinates = CyberCoordinates;
    // } else if (buttonName === 'melaka') {
    //   coordinates = MelakaCoordinates;
    // }
    
    if (typeof fromValue === 'string') {
      const lowerCaseFromValue = fromValue.toLowerCase();
      if (lowerCaseFromValue in coordinates) {
        // console.log('Same value for start node');
        const startCoordinates = coordinates[lowerCaseFromValue];
        this.changeStart(startCoordinates.x, startCoordinates.y);
      }
    }
    
    if (typeof toValue === 'string') {
      const lowerCaseToValue = toValue.toLowerCase();
      if (lowerCaseToValue in coordinates) {
        // console.log('Same value for end node');
        const endCoordinates = coordinates[lowerCaseToValue];
        this.changeEnd(endCoordinates.x, endCoordinates.y);
      }
    }
  }  

  async resetGrid() {
    this.ctxGrid.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctxGrid.lineWidth = this.lineWidth;
    this.ctxGrid.fillStyle = "000000";

    //grid with rectangles
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = 0; j < this.shapes[i].length; j++) {
        //variables
        let x = i * this.shapedimension;
        let y = j * this.shapedimension;
        let type = "";
        let visited = false;

        //a* algorithm info
        let F = 100000;
        let G = 100000;
        let H = 100000;
        let cameFrom = undefined;
        //maze stuff
        //neighbouring nodes
        let neighbors = new Array();

        if (i == 4 && j == 4) {

          this.ctxGrid.fillStyle = this.startNodeColor;

          type = "Start"
          //draw it
          this.ctxGrid.strokeRect(x, y, this.shapedimension, this.shapedimension);

          this.ctxGrid.fillStyle = this.startNodeColor;

          this.ctxGrid.fillRect(x, y, this.shapedimension, this.shapedimension);

        }

        else if (i == (this.canvas.width / this.shapedimension - 5) && j == (this.canvas.height / this.shapedimension - 5)) {
          this.ctxGrid.fillStyle = this.endNodeColor;

          type = "End"
          //draw it
          this.ctxGrid.strokeRect(x, y, this.shapedimension, this.shapedimension);
          this.ctxGrid.fillRect(x, y, this.shapedimension, this.shapedimension);
        }

        else {
          //push the default square info
          type = "";
          this.ctxGrid.fillStyle = "#000000"
          //draw it
          this.ctxGrid.strokeRect(x, y, this.shapedimension, this.shapedimension);
        }
        this.shapes[i][j] = { x, y, i, j, type, F, G, H, neighbors, cameFrom, visited };  //x and y are grid coordinates, and i j is the index in array the square object is in, and type is the type of the node, FGH is a* related info

      }
    }
  }

  async draw_erase_walls(e: { which: number; }, cx: number, cy: number) {
    //mouse pressed
    if (e.which == 1 && !this.disableButtons) {
      //find out which square object is this
      for (let i = 0; i < this.shapes.length; i++) {

        for (let j = 0; j < this.shapes[i].length; j++) {

          if ((cx < (this.shapes[i][j].x + 12) && (cx > this.shapes[i][j].x) && (cy < (this.shapes[i][j].y + 12)) && cy > (this.shapes[i][j].y))) {
            //make sure we are not building walls over certain nodes
            if (this.drawWall && this.shapes[i][j].type != "Wall" && this.shapes[i][j].type != "Start" && this.shapes[i][j].type != "End") {
              this.ctxGrid.lineWidth = this.lineWidth;
              this.ctxGrid.fillStyle = "#000000";
              this.shapes[i][j].type = "Wall";

              let x = this.shapedimension / 2;
              let y = this.shapedimension / 2;
              let dx = 0;
              let dy = 0;
              //a little delay animation for filling in the square
              for (let k = this.shapedimension / 2; k > 0; k--) {
                await new Promise<void>(resolve =>
                  setTimeout(() => {
                    resolve();
                  }, this.animDelay)
                );
                this.ctxGrid.fillRect(this.shapes[i][j].x + x, this.shapes[i][j].y + y, dx - 0.1, dy - 0.1);

                x--;
                y--;
                dx += 2;
                dy += 2;

              }
            }
            //erase
            if (this.eraseWall && this.shapes[i][j].type == "Wall") {
              this.ctxGrid.lineWidth = this.lineWidth;
              this.ctxGrid.fillStyle = "#FFFFFF";
              this.ctxGrid.lineWidth = this.lineWidth;
              this.ctxGrid.strokeRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);

              this.shapes[i][j].type = "";

              this.ctxGrid.clearRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
              this.ctxGrid.strokeRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
            }
          }
        }
      }
    }
  }

  async changeEnd(cx: number, cy: number) {
    for (let i = 0; i < this.shapes.length; i++) {

      for (let j = 0; j < this.shapes[i].length; j++) {

        if ((cx < (this.shapes[i][j].x + this.shapedimension) && (cx > this.shapes[i][j].x) && (cy < (this.shapes[i][j].y + this.shapedimension)) && cy > (this.shapes[i][j].y))) {
          if (this.changeEndNode && this.shapes[i][j].type != "End") {
            //identify old start position and remove it. Traversing 2d array means we need 2 new loop variables
            for (let k = 0; k < this.shapes.length; k++) {
              for (let l = 0; l < this.shapes[k].length; l++) {
                if (this.shapes[k][l].type == "End") {
                  this.ctxGrid.lineWidth = this.lineWidth;

                  this.ctxGrid.fillStyle = "#FFFFFF";
                  this.ctxGrid.clearRect(this.shapes[k][l].x - 0.5, this.shapes[k][l].y - 0.5, this.shapedimension + 0.6, this.shapedimension + 0.5);
                  this.ctxGrid.strokeRect(this.shapes[k][l].x, this.shapes[k][l].y, this.shapedimension, this.shapedimension);
                  this.shapes[k][l].type = "";
                }
              }
            }

            //add new start point
            this.ctxGrid.fillStyle = this.endNodeColor;
            this.shapes[i][j].type = "End";

            this.ctxGrid.fillRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
          }
        }
      }
    }
  }

  async changeStart(cx: number, cy: number) {
    for (let i = 0; i < this.shapes.length; i++) {

      for (let j = 0; j < this.shapes[i].length; j++) {

        if ((cx < (this.shapes[i][j].x + this.shapedimension) && (cx > this.shapes[i][j].x) && (cy < (this.shapes[i][j].y + this.shapedimension)) && cy > (this.shapes[i][j].y))) {
          if (this.changeStartNode && this.shapes[i][j].type != "Start") {
            //identify old start position and remove it. Traversing 2d array means we need 2 new loop variables
            for (let k = 0; k < this.shapes.length; k++) {
              for (let l = 0; l < this.shapes[k].length; l++) {
                if (this.shapes[k][l].type == "Start") {
                  this.ctxGrid.lineWidth = this.lineWidth;

                  this.ctxGrid.fillStyle = "#FFFFFF";
                  this.ctxGrid.clearRect(this.shapes[k][l].x - 0.5, this.shapes[k][l].y - 0.5, this.shapedimension + 0.6, this.shapedimension + 0.5);
                  this.ctxGrid.strokeRect(this.shapes[k][l].x, this.shapes[k][l].y, this.shapedimension, this.shapedimension);
                  this.shapes[k][l].type = "";
                }
              }
            }

            //add new start point
            this.ctxGrid.fillStyle = this.startNodeColor;
            this.shapes[i][j].type = "Start";

            this.ctxGrid.fillRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
          }
        }
      }
    }
  }

  async drawNode(xPos: number, yPos: number, color: string) {
    //a little delay animation for filling in the square
    let x = this.shapedimension / 2;
    let y = this.shapedimension / 2;
    let dx = 0;
    let dy = 0;

    for (let k = this.shapedimension + 1; k > 0; k--) {
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve();
        }, this.animDelay * 1.5)
      );
      this.ctxGrid.fillRect(xPos + x, yPos + y, dx, dy);

      x -= 0.5;
      y -= 0.5;
      dx += 1;
      dy += 1;

    }
  }

  findNeighbors() {
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = 0; j < this.shapes[0].length; j++) {
        if (i < this.shapes.length - 1) {
          this.shapes[i][j].neighbors.push(this.shapes[i + 1][j]);
        }
        if (i > 0) {
          this.shapes[i][j].neighbors.push(this.shapes[i - 1][j]);
        }
        if (j < this.shapes[0].length - 1) {
          this.shapes[i][j].neighbors.push(this.shapes[i][j + 1]);
        }
        if (j > 0) {
          this.shapes[i][j].neighbors.push(this.shapes[i][j - 1]);
        }

      }
    }
  }
  
  //clears all the nodes except for walls, start and end
  clearSearchNotWalls() {
    let wallPositions = [];
    let startPos;
    let endPos;
    //store info
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = 0; j < this.shapes[0].length; j++) {
        if (this.shapes[i][j].type == "Wall") {
          let x = this.shapes[i][j].x;
          let y = this.shapes[i][j].y;
          wallPositions.push({ x, y });
        }
        if (this.shapes[i][j].type == "Start") {
          startPos = this.shapes[i][j];
        }
        if (this.shapes[i][j].type == "End") {
          endPos = this.shapes[i][j];
        }
        this.shapes[i][j].visited = false;
        this.shapes[i][j].cameFrom = undefined;
      }
    }
    //clear grid
    this.ctxGrid.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //restore stuff
    //grid
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = 0; j < this.shapes[0].length; j++) {
        this.shapes[i][j].F = 0;
        this.shapes[i][j].G = 0;
        this.shapes[i][j].H = 0;
        this.ctxGrid.strokeRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
      }
    }


    for (let i = 0; i < wallPositions.length; i++) {
      this.ctxGrid.fillStyle = "#000000"
      this.ctxGrid.fillRect(wallPositions[i].x + 0.5, wallPositions[i].y + 0.5, this.shapedimension - 1, this.shapedimension - 1);
    }
    this.ctxGrid.fillStyle = "#FF3600";
    this.ctxGrid.fillRect(startPos.x, startPos.y, this.shapedimension - 1, this.shapedimension - 1);
    this.ctxGrid.fillStyle = "#00AB5C";
    this.ctxGrid.fillRect(endPos.x, endPos.y, this.shapedimension - 1, this.shapedimension - 1);
  }
  removeFromArray(arr: any[], element: any) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == element) {
        arr.splice(i, 1);
      }
    }
  }
  heuristic(a: { x: number; y: number; }, b: { x: number; y: number; }) {
    let d = (Math.abs(a.x - b.x) + Math.abs(a.y - b.y));
    //let d = (Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    return d;
  }
  returnNeighbors(node: any) { 
    // let neighbors = [this.shapes[node.i][node.j - 1], this.shapes[node.i][node.j + 1], this.shapes[node.i - 1][node.j], this.shapes[node.i + 1][node.j]]

    let neighbors = [];
    if (node.i > 0) {
      neighbors.push(this.shapes[node.i - 1][node.j]);
    }
    if (node.i < this.shapes.length - 1) [
      neighbors.push(this.shapes[node.i + 1][node.j])
    ]
    if (node.j > 0) {
      neighbors.push(this.shapes[node.i][node.j - 1]);
    }
    if (node.j < this.shapes[0].length - 1) {
      neighbors.push(this.shapes[node.i][node.j + 1]);
    }

    return neighbors;
  }

  //ALGORITHMS
  async a_star_search() {
    this.clearSearchNotWalls();
    this.disableButtons = true;
    let openSet = [];
    let closedSet = [];
    let start, end;
    let path = [];


    this.findNeighbors();


    //shapes is a 2d array of squares... a grid
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = 0; j < this.shapes[0].length; j++) {
        if (this.shapes[i][j].type == "Start") {
          start = this.shapes[i][j];
        }
        if (this.shapes[i][j].type == "End") {
          end = this.shapes[i][j];
        }
      }
    }

    openSet.push(start);


    while (openSet.length > 0) {

      let lowestIndex = 0;
      //find lowest index
      for (let i = 0; i < openSet.length; i++) {
        if (openSet[i].F < openSet[lowestIndex].F)
          lowestIndex = i;
        else if (openSet[i].F === openSet[lowestIndex].F) {
          if (openSet[i].H < openSet[lowestIndex].H) {
            lowestIndex = i;
          }
        }
      }
      //current node
      let current: any = openSet[lowestIndex];

      //if reached the end
      if (openSet[lowestIndex] === end) {

        path = [];
        let temp = current;
        path.push(temp);
        while (temp.cameFrom) {
          path.push(temp.cameFrom);
          temp = temp.cameFrom;
        }
        console.log("Done!"); // DONE
        //draw path
        for (let i = path.length - 1; i >= 0; i--) {
          this.ctxGrid.fillStyle = "#0948ad";
          this.ctxGrid.lineWidth = this.lineWidth;
          this.drawNode(path[i].x, path[i].y, "#ffff00")
          await new Promise<void>(resolve =>
            setTimeout(() => {
              resolve();
            }, this.animDelay)
          );
        }
        this.disableButtons = false;
        break;
      }

      this.removeFromArray(openSet, current);
      closedSet.push(current);

      let my_neighbors = current.neighbors;
      for (let i = 0; i < my_neighbors.length; i++) {
        var neighbor = my_neighbors[i];

        if (!closedSet.includes(neighbor) && neighbor.type != "Wall") {
          let tempG = current.G + 1;

          let newPath = false;
          if (openSet.includes(neighbor)) {
            if (tempG < neighbor.G) {
              neighbor.G = tempG;
              newPath = true;
            }
          } else {
            neighbor.G = tempG;
            newPath = true;
            openSet.push(neighbor);
          }

          if (newPath) {
            neighbor.H = this.heuristic(neighbor, end);
            neighbor.F = neighbor.G + neighbor.H;
            neighbor.cameFrom = current;
          }

        }
      }

      //draw
      this.ctxGrid.lineWidth = this.lineWidth;
      for (let i = 0; i < closedSet.length; i++) { //BLUE
        this.ctxGrid.fillStyle = "#d3d3d3";
        this.ctxGrid.fillRect(closedSet[i].x + 0.5, closedSet[i].y + 0.5, this.shapedimension - 1, this.shapedimension - 1);
        //this.drawNode(closedSet[i].x, closedSet[i].y, "#4287f5");
      }
      for (let i = 0; i < openSet.length; i++) { //GREEN
        this.ctxGrid.fillStyle = "#696969";
        this.ctxGrid.fillRect(openSet[i].x + 0.5, openSet[i].y + 0.5, this.shapedimension - 1, this.shapedimension - 1);
        //this.drawNode(closedSet[i].x, closedSet[i].y, "#00c48d");

      }
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve();
        }, 10)
      );
    }
    if (openSet.length <= 0) {
      //no solution
      this.disableButtons = false;
    }

  }
  async dijkstraSearch_A_star_variation() {

    this.clearSearchNotWalls();
    this.disableButtons = true;
    let openSet = [];
    let closedSet = [];
    let start, end;
    let path = [];

    this.findNeighbors();

    //shapes is a 2d array of squares... a grid
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = 0; j < this.shapes[0].length; j++) {
        if (this.shapes[i][j].type == "Start") {
          start = this.shapes[i][j];
        }
        if (this.shapes[i][j].type == "End") {
          end = this.shapes[i][j];
        }
      }
    }

    openSet.push(start);

    while (openSet.length > 0) {

      let lowestIndex = 0;
      //find lowest index
      for (let i = 0; i < openSet.length; i++) {
        if (openSet[i].F < openSet[lowestIndex].F)
          lowestIndex = i;
      }
      //current node
      let current: any = openSet[lowestIndex];

      //if reached the end
      if (openSet[lowestIndex] === end) {

        path = [];
        let temp = current;
        path.push(temp);
        while (temp.cameFrom) {
          path.push(temp.cameFrom);
          temp = temp.cameFrom;
        }
        console.log("Done!");
        //draw path
        for (let i = path.length - 1; i >= 0; i--) {
          this.ctxGrid.fillStyle = "#0948ad";
          this.ctxGrid.lineWidth = this.lineWidth;
          this.drawNode(path[i].x, path[i].y, "#ffff00")
          await new Promise<void>(resolve =>
            setTimeout(() => {
              resolve();
            }, this.animDelay)
          );
        }
        this.disableButtons = false;
        break;
      }

      this.removeFromArray(openSet, current);
      closedSet.push(current);

      let my_neighbors = current.neighbors;
      for (let i = 0; i < my_neighbors.length; i++) {
        var neighbor = my_neighbors[i];

        if (!closedSet.includes(neighbor) && neighbor.type != "Wall") {
          let tempG = current.G + 1;

          let newPath = false;
          if (openSet.includes(neighbor)) {
            if (tempG < neighbor.G) {
              neighbor.G = tempG;
              newPath = true;
            }
          } else {
            neighbor.G = tempG;
            newPath = true;
            openSet.push(neighbor);
          }

          if (newPath) {
            neighbor.H = this.heuristic(neighbor, end);
            neighbor.G = neighbor.F + neighbor.H;
            neighbor.cameFrom = current;
          }
        }
      }

      //draw
      this.ctxGrid.lineWidth = this.lineWidth;
      for (let i = 0; i < closedSet.length; i++) { //BLUE
        this.ctxGrid.fillStyle = "#d3d3d3";
        this.ctxGrid.fillRect(closedSet[i].x + 0.5, closedSet[i].y + 0.5, this.shapedimension - 1, this.shapedimension - 1);
      }
      for (let i = 0; i < openSet.length; i++) { //GREEN
        this.ctxGrid.fillStyle = "#696969";
        this.ctxGrid.fillRect(openSet[i].x + 0.5, openSet[i].y + 0.5, this.shapedimension - 1, this.shapedimension - 1);

      }
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve();
        }, 5)
      );
    }
    if (openSet.length <= 0) {
      //no solution
      this.disableButtons = false;
    }

  }

  async bfs_Search() {
    this.clearSearchNotWalls();
    this.disableButtons = true;

    let start;
    let end;
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = 0; j < this.shapes[0].length; j++) {
        if (this.shapes[i][j].type == "Start") {
          start = this.shapes[i][j];
        }
        if (this.shapes[i][j].type == "End") {
          end = this.shapes[i][j];
        }
      }
    }

    console.log(end.i + " " + end.j);

    let queue = new Queue();
    queue.push(start);

    while (queue.length !== 0) {
      let node = queue.shift();

      if (node == end) {
        let current = end;
        let path = new Array();
        while (current != start) {
          current = current.cameFrom;
          path.push(current);
        }
        for (let i = path.length - 1; i >= 0; i--) {
          this.ctxGrid.fillStyle = "#0948ad";
          this.ctxGrid.lineWidth = this.lineWidth;
          this.drawNode(path[i].x, path[i].y, "#ffff00")
          await new Promise<void>(resolve =>
            setTimeout(() => {
              resolve();
            }, this.animDelay)
          );
        }
        this.disableButtons = false;
        break;
      }

      let neighbors = this.returnNeighbors(node);

      for (let i = 0; i < neighbors.length; i++) {
        if (!neighbors[i].visited && neighbors[i].type != "Wall") {
          neighbors[i].visited = true;
          neighbors[i].cameFrom = node;
          queue.push(neighbors[i]);
          this.ctxGrid.fillStyle = "#d3d3d3";
          this.ctxGrid.fillRect(neighbors[i].x + 0.5, neighbors[i].y + 0.5, this.shapedimension - 1, this.shapedimension - 1);
        }
      }
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve();
        }, 0)
      );
    }
  }

  async sampleMaze(path: string) {
    this.httpClient.get(path + "", { responseType: 'text' })
      .subscribe(data => this.loadSampleMaze(data));
  }

  async loadSampleMaze(data: string) {
    data = data + "";
    data.trim();

    // console.log('success!');

    let dataNew = data.split('\n');

    this.ctxGrid.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.disableButtons = true;

    for (let i = 0; i < 95; i++) {
      for (let j = 0; j < 40; j++) {
        if (dataNew[j][i] == "1") {
          this.ctxGrid.lineWidth = this.lineWidth;
          this.ctxGrid.fillStyle = "#000000";
          this.shapes[i][j].type = "Wall";

          this.ctxGrid.fillRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension - 0.1, this.shapedimension - 0.1);
        }
        if (dataNew[j][i] == "0") {
          this.shapes[i][j].type = "";
          this.ctxGrid.fillStyle = "#FFFFFF"
          this.ctxGrid.lineWidth = 0.01;
          //draw it
          this.ctxGrid.strokeRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
        }
        if (dataNew[j][i] == "2") {
          this.shapes[i][j].type = "Start";
          //draw it
          this.ctxGrid.strokeRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);

          this.ctxGrid.fillStyle = this.startNodeColor;

          this.ctxGrid.fillRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
        }
        if (dataNew[j][i] == "3") {
          this.ctxGrid.fillStyle = this.endNodeColor;

          this.shapes[i][j].type = "End";
          //draw it
          this.ctxGrid.strokeRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
          this.ctxGrid.fillRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension, this.shapedimension);
        }
        if (dataNew[j][i] == "4") {
          this.shapes[i][j].type = "door";
          this.ctxGrid.strokeStyle = "#000000";
          this.ctxGrid.lineWidth = 0.8;
          //draw left stroke of door in the middle of the cell
          const halfDimension = this.shapedimension / 2;
          const x = this.shapes[i][j].x + halfDimension;
          const y1 = this.shapes[i][j].y;
          const y2 = this.shapes[i][j].y + this.shapedimension;
          this.ctxGrid.beginPath();
          this.ctxGrid.moveTo(x, y1);
          this.ctxGrid.lineTo(x, y2);
          this.ctxGrid.stroke();
          // this.ctxGrid.fillRect(this.shapes[i][j].x, this.shapes[i][j].y, this.shapedimension - 0.1, this.shapedimension - 0.1);
        }
        if (dataNew[j][i] == "5") {
          this.shapes[i][j].type = "Door";
          this.ctxGrid.strokeStyle = "#000000";
          this.ctxGrid.lineWidth = 0.8;
          //draw top stroke of door horizontally in the middle of the cell
          const halfDimension = this.shapedimension / 2;
          const x1 = this.shapes[i][j].x + this.lineWidth / 2;
          const x2 = this.shapes[i][j].x + this.shapedimension - this.lineWidth / 2;
          const y = this.shapes[i][j].y + halfDimension;
          this.ctxGrid.beginPath();
          this.ctxGrid.moveTo(x1, y + this.lineWidth / 2);
          this.ctxGrid.lineTo(x2, y + this.lineWidth / 2);
          this.ctxGrid.stroke();
        }
      }
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve();
        }, 0)
      );
    }
    this.disableButtons = false;
  }
}