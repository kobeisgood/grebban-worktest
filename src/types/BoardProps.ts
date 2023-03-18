export type BoardProps = {
    rows: number,
    cols: number,
    tiles: (number | null)[][], // Matrix
    onTileClick: (row: number, col: number) => void,
}