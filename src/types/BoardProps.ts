export type BoardProps = {
    rows: number,
    cols: number,
    tiles: (number | null)[][], // Matrix
    onTileClicked: (row: number, col: number) => void,
}