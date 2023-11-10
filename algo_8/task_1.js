function kadai1(n, m, k) {
    function findCombinations(start, m, k, path, result) {
        if (path.length === m && path.reduce((a, b) => a + b, 0) === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            if (path.reduce((a, b) => a + b, 0) + i > k) {
                break;
            }

            path.push(i);
            findCombinations(i + 1, m, k, path, result);
            path.pop();
        }
    }

    const result = [];
    findCombinations(1, m, k, [], result);
    return result;
}