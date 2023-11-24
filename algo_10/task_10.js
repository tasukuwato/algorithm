function kadai1(lst) {
    // 出現回数をカウントするオブジェクト
    const counts = {};

    // 配列を走査して各要素の出現回数をカウント
    lst.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });

    // 最少出現回数を見つける
    let minCount = Infinity;
    Object.values(counts).forEach(count => {
        if (count < minCount) {
            minCount = count;
        }
    });

    // 最少出現回数の中で辞書式順序で最も若い要素を見つける
    let minItem = null;
    Object.keys(counts).forEach(item => {
        if (counts[item] === minCount && (minItem === null || item < minItem)) {
            minItem = item;
        }
    });

    // 結果を配列にして返す
    return [minItem, minCount];
}
