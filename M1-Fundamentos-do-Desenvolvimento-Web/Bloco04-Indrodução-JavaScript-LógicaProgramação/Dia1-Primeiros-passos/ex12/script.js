// Chess ----------------------------------------------------
const piece = "L";

switch (piece.toLowerCase()) {
  case "foward":
    console.log("pawn");
    break;
  case "l":
    console.log("bishop");
    break;
  default:
    "Piece name is invalid.";
}