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

    const [turn, setTurn] = React.useState(0);

    const setMark = (y, x) => {
        if (board[y][x] == 0) {
            let bCopy = [[...board[0]], [...board[1]], [...board[2]]]; // boardのコピーを作成
            if (turn % 2 == 0)
                bCopy[y][x] = 1;
            else
                bCopy[y][x] = 2;

            setBoard(bCopy)
            setTurn(turn + 1);
        }
    }

    return (
        <Page>
            {/* Top Navbar */}
            <Navbar large>
                <NavTitle>〇✕ゲーーーム</NavTitle>
                <NavTitleLarge>marubatsu</NavTitleLarge>
            </Navbar>
            <br/>

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
        </Page>
    );
}
export default HomePage;