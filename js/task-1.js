function isEnoughCapacity(products, containerSize, fragileItems) {
    const totalVolume = Object.values(products).reduce((sum, product) => sum + (product.count * product.volume), 0);
    
    const fragileWarning = Object.keys(products).some(product => fragileItems.includes(product));
    
    if (totalVolume <= containerSize) {
        if (fragileWarning) {
            console.warn('Контейнер має бути використаний з обережністю через крихкі товари!');
        }
        return "Товари помістяться в контейнер.";
    } else {
        const excess = totalVolume - containerSize;
        return `Товари не помістяться. Перевищення на ${excess.toFixed(2)} одиниць об'єму.`;
    }
}

console.log(isEnoughCapacity(
    { apples: { count: 2, volume: 1.5 }, grapes: { count: 3, volume: 0.5 }, carrots: { count: 1, volume: 0.7 } },
    8,
    ['apples', 'grapes']
)); 

console.log(isEnoughCapacity(
    { apples: { count: 4, volume: 2 }, grapes: { count: 6, volume: 1 }, lime: { count: 16, volume: 0.2 } },
    12,
    ['grapes']
)); 

console.log(isEnoughCapacity(
    { apples: { count: 1, volume: 1 }, lime: { count: 5, volume: 0.5 }, tomatoes: { count: 3, volume: 1 } },
    14,
    ['tomatoes']
)); 

