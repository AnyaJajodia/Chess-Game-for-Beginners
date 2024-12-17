let main = {
    variables: {
      turn: 'w',
      selectedPiece: '',
      highlighted: [],
      pieces: {}
    },
    initializeBoard() {
      // Unicode characters for each piece type by color
      const pieceSymbols = {
        white: {
          king: '&#9812;',
          queen: '&#9813;',
          rook: '&#9814;',
          bishop: '&#9815;',
          knight: '&#9816;',
          pawn: '&#9817;'
        },
        black: {
          king: '&#9818;',
          queen: '&#9819;',
          rook: '&#9820;',
          bishop: '&#9821;',
          knight: '&#9822;',
          pawn: '&#9823;'
        }
      };
  
      const positions = {
        white: {
          king: '5_1',
          queen: '4_1',
          rooks: ['1_1', '8_1'],
          bishops: ['3_1', '6_1'],
          knights: ['2_1', '7_1'],
          pawns: Array.from({ length: 8 }, (_, i) => `${i + 1}_2`)
        },
        black: {
          king: '5_8',
          queen: '4_8',
          rooks: ['1_8', '8_8'],
          bishops: ['3_8', '6_8'],
          knights: ['2_8', '7_8'],
          pawns: Array.from({ length: 8 }, (_, i) => `${i + 1}_7`)
        }
      };
  
      // Helper to create a piece
      const createPiece = (color, type, position) => ({
        position,
        img: pieceSymbols[color][type],
        captured: false,
        moved: false,
        type: `${color[0]}_${type}` // 'w_king' or 'b_pawn'
      });
  
      // Add all pieces to the `pieces` object
      ['white', 'black'].forEach((color) => {
        const side = positions[color];
  
        // Color prefix for piece keys ('w' or 'b')
        const prefix = color[0];
  
        // Assign positions for all types
        this.variables.pieces[`${prefix}_king`] = createPiece(color, 'king', side.king);
        this.variables.pieces[`${prefix}_queen`] = createPiece(color, 'queen', side.queen);
  
        side.rooks.forEach((pos, i) => {
          this.variables.pieces[`${prefix}_rook${i + 1}`] = createPiece(color, 'rook', pos);
        });
  
        side.bishops.forEach((pos, i) => {
          this.variables.pieces[`${prefix}_bishop${i + 1}`] = createPiece(color, 'bishop', pos);
        });
  
        side.knights.forEach((pos, i) => {
          this.variables.pieces[`${prefix}_knight${i + 1}`] = createPiece(color, 'knight', pos);
        });
  
        side.pawns.forEach((pos, i) => {
          this.variables.pieces[`${prefix}_pawn${i + 1}`] = createPiece(color, 'pawn', pos);
        });
      });
    }
  };
  
  // Initialize the chessboard
  main.initializeBoard();
  console.log(main.variables.pieces);
  