/**
* Maze Runner
* 
* You will be given a 2D array of the maze and an array of directions.
* Your task is to follow the directions given.
* If you reach the end point before all your moves have gone, you should return Finish.
* If you hit any walls or go outside the maze border, you should return Dead.
* If you find yourself still in the maze after using all the moves, you should return Lost. 
* 
* The Maze array will look like

* maze = [[1,1,1,1,1,1,1],
*         [1,0,0,0,0,0,3],
*         [1,0,1,0,1,0,1],
*         [0,0,1,0,0,0,1],
*         [1,0,1,0,1,0,1],
*         [1,0,0,0,0,0,1],
*         [1,2,1,0,1,0,1]]
* 
* ..with the following key
* 0 = Safe place to walk
* 1 = Wall
* 2 = Start Point
* 3 = Finish Point
* 
* direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
* 
* Rules:
* 
* 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
* 2. The start and finish positions will change for the final tests.
* 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
*/

/**
 * Initial
 */
function mazeRunner(maze, directions) {
    let position = [0, 0];
    
    for (let i = 0; i < maze.length; i++){
        position = maze[i].indexOf(2) !== -1 ? [i, maze[i].indexOf(2)] : position;
    }
    
    for (let i = 0; i < directions.length; i++){
        switch(directions[i]){
            case "N":
                position[0] = position[0] - 1;
                break;
            case "S":
                position[0] = position[0] + 1;
                break;
            case "E":
                position[1] = position[1] + 1;
                break;
            case "W":
                position[1] = position[1] - 1;
                break;
        }
        
        switch( maze[position[0]] && maze[position[0]][position[1]] ){
            case 3:
                return "Finish";
                break;
            case undefined:
            case 1:
                return "Dead";
                break;
        }
    }
    
    return "Lost";
}

/**
 * Optimised
 */
function mazeRunner(maze, directions) {
    let h = maze.length,
        w = maze[0].length,
        y = maze.findIndex( row => row.includes(2) ),
        x = maze[y].indexOf(2),
        cell;

    const walk = {
        N : ([a, b]) => [a, b - 1],
        S : ([a, b]) => [a, b + 1],
        E : ([a, b]) => [a + 1, b],
        W : ([a, b]) => [a - 1, b]
    };
    
    while( directions.length ){
        [x, y] = walk[ directions.shift() ]([x, y]);
        cell = y < 0 || y >= h || x < 0 || x >= w ? 1 : maze[y][x];
        
        if( cell == 3 ){
            return "Finish";
        }
        
        if( cell == 1 ){
            return "Dead";
        }
    }

    return "Lost"
}