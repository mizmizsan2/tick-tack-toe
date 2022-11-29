import React from 'react';

const Cell = (props) => {
    const getMark = (value) => {
        if (value == 1)
            return "〇";

        if (value == 2)
            return "✕";

        return "";
    }

    return (
        <div className='cell' onClick={() => props.click()}>
            { getMark(props.value) }
        </div>
    );
}
export default Cell;