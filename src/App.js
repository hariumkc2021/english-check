import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckerBoard from './CheckerBoard'

export class App extends React.Component {


  constructor(props) {
    super(props);
    this.columns = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7} ;

    this.state={
      stepNumber: 0,
      history:[{
        boardState:this.initBoard(),
        currentPlayer:true,
      }]
    };
    
  }


  
  initBoard(){
    let board={};

     for (let key in this.columns){
       for(let i=1;i<=8;++i){
         let row=key+i;
         board[row]=null;
       }
     }
     
     const player1 = ['a8', 'c8', 'e8', 'g8', 'b7', 'd7', 'f7', 'h7', 'a6', 'c6', 'e6', 'g6',];
     const player2 = ['b3', 'd3', 'f3', 'h3', 'a2', 'c2', 'e2', 'g2', 'b1', 'd1', 'f1', 'h1',];

     player1.forEach(element => {
              board[element]=this.setPiece(element,'player1');
       });
     player2.forEach(element => {
             board[element]=this.setPiece(element,'player2');
      });
      console.log("board",board)
      return board;
  }

  setPiece(position,player){
      return {player,position,isKing:false};

  }
    
  handleActions(positions){
     console.log("positions",positions);
  }

  render() {
   const columns=this.columns;
   const stateHistory = this.state.history;
   const currentState = stateHistory[this.state.stepNumber];
   const boardState = currentState.boardState;
   const currentPlayer = currentState.currentPlayer;

   

  return (
            <div className="game">
               <CheckerBoard
                  boardState = {boardState}
                  currentPlayer = {currentPlayer}
                  columns = {columns}
                  onClick={(positions)=>this.handleActions(positions)}
               />
             </div>
  
  );
  }
}

export default App;
