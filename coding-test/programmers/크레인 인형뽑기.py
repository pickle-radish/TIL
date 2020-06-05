def solution(board, moves):
    answer = 0
    
    busket=[] 
    
    while moves:
        
        for number in range(len(board[0])):
            target = board[number][moves[0]-1]
            
            if target != 0 :
                if not busket:
                    busket.append(target);
                else:
                    if target == busket[-1]:
                        busket.pop();
                        answer += 2;
                    else:
                        busket.append(target)
                board[number][moves[0]-1]=0
                break
        moves.pop(0)
    return answer