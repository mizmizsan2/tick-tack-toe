import React from 'react';
import {
    Page,
    Navbar,
    NavTitle,
    NavTitleLarge,
    Row,
    Col,
} from 'framework7-react';
import Cell from '../components/Cell';


const HomePage = () => {
    const [board, setBoard] = React.useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]);

    const [turn, setTurn] = React.useState(1);

    const [result, setResult] = React.useState(0); //0 => 続行  1 => 〇の勝ち   2 => ✕の勝ち   3 => 引き分け

    const win = [[[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[2, 0], [1, 1], [0, 2]]
    ];


    const judgeGames = (b) => {
        for (let i = 0; i < 8; i++) {
            let one = win[i][0];    //１つ目のセル
            let two = win[i][1];    //２つ目のセル
            let thr = win[i][2];    //３つ目のセル
            if (b[one[0]][one[1]] == 1 && b[two[0]][two[1]] == 1 && b[thr[0]][thr[1]] == 1) {
                setResult(1);
                return;
            }
            if (b[one[0]][one[1]] == 2 && b[two[0]][two[1]] == 2 && b[thr[0]][thr[1]] == 2) {
                setResult(2);
                return;
            }
        }

        if (turn == 9)
            setResult(3);
    }

    const setMark = (y, x) => {
        if (board[y][x] != 0 || result != 0)    //そのセルが埋まっているか、結果がついていたら
            return;

        let bCopy = [[...board[0]], [...board[1]], [...board[2]]]; // boardのコピーを作成
        if (turn % 2 == 1)
            bCopy[y][x] = 1;
        else
            bCopy[y][x] = 2;

        setBoard(bCopy)
        setTurn(turn + 1);

        judgeGames(bCopy);
    }

    let content = "";
    if (result == 1)
        content = "〇の勝利！！";
    else if (result == 2)
        content = "✕の勝利！！";
    else if (result == 3)
        content = "引き分け...";

    return (
        <Page>
            {/* Top Navbar */}
            <Navbar large>
                <NavTitleLarge>marubatsu</NavTitleLarge>
            </Navbar>
            <br />

            {/* Page content */}
            <Row>
                <Col><Cell value={board[0][0]} click={() => setMark(0, 0)} /></Col>
                <Col><Cell value={board[0][1]} click={() => setMark(0, 1)} /></Col>
                <Col><Cell value={board[0][2]} click={() => setMark(0, 2)} /></Col>
            </Row>
            <Row>
                <Col><Cell value={board[1][0]} click={() => setMark(1, 0)} /></Col>
                <Col><Cell value={board[1][1]} click={() => setMark(1, 1)} /></Col>
                <Col><Cell value={board[1][2]} click={() => setMark(1, 2)} /></Col>
            </Row>
            <Row>
                <Col><Cell value={board[2][0]} click={() => setMark(2, 0)} /></Col>
                <Col><Cell value={board[2][1]} click={() => setMark(2, 1)} /></Col>
                <Col><Cell value={board[2][2]} click={() => setMark(2, 2)} /></Col>
            </Row>
            <div className='result'>{content}</div>
        </Page>
    );
}
export default HomePage;