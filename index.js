function serialize(numbers) {
    // Сортируем числа для оптимизации последовательностей
    numbers.sort((a, b) => a - b);

    let serialized = [];
    let prevNumber = numbers[0];
    let count = 1;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === prevNumber) {
            count++;
        } else {
            // Добавляем предыдущее число и его количество, если больше 1
            serialized.push(count === 1 ? `${prevNumber}` : `${prevNumber}:${count}`);
            prevNumber = numbers[i];
            count = 1;
        }
    }

    // Добавляем последнее число
    serialized.push(count === 1 ? `${prevNumber}` : `${prevNumber}:${count}`);

    return serialized.join(',');
}

function deserialize(serialized) {
    if (serialized === "") {
        return [];
    }

    let numbers = [];
    let elements = serialized.split(',');

    for (let element of elements) {
        if (element.includes(':')) {
            let [number, count] = element.split(':').map(x => parseInt(x));
            numbers.push(...Array(count).fill(number));
        } else {
            numbers.push(parseInt(element));
        }
    }

    return numbers;
}
