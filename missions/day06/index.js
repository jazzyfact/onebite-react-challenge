//1
function splitAndCombine(arr) {
    const middle = arr.length / 2;
    const arr1 = arr.slice(0, middle);
    const arr2 = arr.slice(middle);
    return [...arr2, ...arr1];
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

//2
function printClickEventLogs(logs) {
    logs
        .filter(log => log.type === "click")
        .forEach(log => {
            const formattedDate = new Date(log.date).toLocaleString();
            console.log(`click :: ${formattedDate}`);
        });
}

printClickEventLogs([
    { type: "click", date: "2023-01-01T12:00:00Z" },
    { type: "hover", date: "2023-01-01T12:10:00Z" },
    { type: "scroll", date: "2023-01-01T12:15:00Z" },
    { type: "click", date: "2023-01-01T12:20:00Z" },
]);

//3
function getDiscountedMenus(menus) {
    return menus.map(menu => ({
        ...menu,
        discountedPrice: menu.price - 500,
    }));
}

const discountedMenus = getDiscountedMenus([
    { itemId: 1, name: "아메리카노", price: 3000 },
    { itemId: 2, name: "라떼", price: 3500 },
    { itemId: 3, name: "초콜릿 케이크", price: 5000 },
    { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);

//4
function getSortedBooks(books) {
    return books.toSorted((a, b) => b.published.getTime() - a.published.getTime());
}

const sortedBooks = getSortedBooks([
    { title: "한입 리액트", published: new Date("2023-04-06") },
    { title: "웹 프론트엔드 첫 걸음", published: new Date("2024-04-30") },
    { title: "이펙티브 타입스크립트", published: new Date("2021-06-27") },
    { title: "클린코드", published: new Date("2013-12-24") },
]);

console.log(sortedBooks);

