let board = [, , , , , , , ,]
function play(box) {
    let playerSpan = document.getElementById('player')
    let clicked = document.getElementById(box)
    if (board[box] !== 'X' && board[box] !== 'O') {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O'
            clicked.innerText = 'X'
            board[box] = 'X'
        } else {
            playerSpan.innerText = 'X'
            clicked.innerText = 'O'
            board[box] = 'O'
        }
    }
    const topRight = board[0]
    const topMiddle = board[1]
    const topLeft = board[2]
    const centerRight = board[3]
    const centerMiddle = board[4]
    const centerLeft = board[5]
    const bottomRight = board[6]
    const bottomMiddle = board[7]
    const bottomLeft = board[8]
    // console.log(topRight, topMiddle, topLeft)
    if (topRight !== undefined && topRight === topMiddle && topMiddle === topLeft) {
        alert(`Player ${topRight} Wins!`)
        window.location.reload(false)
    } else if (topRight !== undefined && centerRight === topRight && topRight === bottomRight) {
        alert(`Player ${centerRight} Wins!`)
        window.location.reload(false)
    } else if (topRight !== undefined && topRight === centerMiddle && centerMiddle === bottomLeft) {
        alert(`Player ${topRight} Wins!`)
        window.location.reload(false)
    } else if (topMiddle !== undefined && topMiddle === centerMiddle && centerMiddle === bottomMiddle) {
        alert(`Player ${topMiddle} Wins!`)
        window.location.reload(false)
    } else if (topLeft !== undefined && topLeft === centerMiddle && centerMiddle === bottomRight) {
        alert(`Player ${topLeft} Wins!`)
        window.location.reload(false)
    } else if (centerLeft !== undefined && centerLeft === centerMiddle && centerMiddle === centerRight) {
        alert(`Player ${centerLeft} Wins!`)
        window.location.reload(false)
    } else if (topLeft !== undefined && topLeft === centerLeft && centerLeft === bottomLeft) {
        alert(`Player ${topLeft} Wins!`)
        window.location.reload(false)
    } else if (bottomRight !== undefined && bottomRight === bottomMiddle && bottomMiddle === bottomLeft) {
        alert(`Player ${bottomRight} Wins!`)
        window.location.reload(false)
    } else if (topRight !== undefined && topMiddle !== undefined && topLeft !== undefined && centerRight !== undefined && centerMiddle !== undefined && centerLeft !== undefined && bottomRight !== undefined && bottomMiddle !== undefined && bottomLeft !== undefined) {
        alert(`No Winner! Refresh the page and try again!`)
        window.location.reload(false)
    }
    console.log([board])

}