var goal = [0,1,2,3,4,5,6,7]

function eq_pat(a, b) {
    for (var i=0; i<8; i++) {
        if(a[i] != b[i]) return false
    }
    return true
}

function is_goal(a) {
    return eq_pat(a, goal)
}

function swap(a, pair) {
    var [i, j] = pair
    var b = a.slice(0)
    var tmp = b[i]
    b[i] = b[j]
    b[j] = tmp
    return b
}


function kadai1(lst) {
    var queue = [[lst, 0, null]]
    var stab =[[0, 1], [1,2], [2, 3], [4,5], [1, 5], [5, 6], [6, 7]]
    while (true) {
        var ele = queue.shift()
        var [st, level, parent] = ele
        if (is_goal(st)) break
        for (var i=0; i<stab.length; i++) {
            var stx = swap(st, stab[i])
            if (parent != null && eq_pat(stx, parent[0])) continue
            queue.push([stx, level + 1, ele])
        }
    }
    return level
}