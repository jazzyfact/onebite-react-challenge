//1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("3초 후 결과를 공개하겠습니다!");
    await delay(3000);
    console.log("승자는 이정환!");
}

main();


//2
/* 1. 주문하는 기능 (수정 X) */
function receiveOrder() {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log("주문 접수가 완료되었습니다.");
            resolve("주문번호: 123");
        }, 2000)
    );
}

/* 2. 주문을 처리하는 기능 (수정 X) */
function processOrder(orderId) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(`[${orderId}] 주문이 처리 되었습니다.`);
            resolve(orderId);
        }, 2000)
    );
}

/* 3. 주문을 취소하는 기능 (수정 X) */
function cancelOrder(orderId) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(`[${orderId}] 주문이 취소되었습니다`);
            resolve();
        }, 1500)
    );
}

/* 비동기 함수 실행 */
async function handleOrder() {
    try {
        const orderId = await receiveOrder();
        const processedOrderId = await processOrder(orderId);
        await cancelOrder(processedOrderId);
    } catch (error) {
        console.error("에러 발생:", error);
    }
}

handleOrder();

// 출력 결과:
// 주문 접수가 완료되었습니다.
// [주문번호: 123] 주문이 처리 되었습니다.
// [주문번호: 123] 주문이 취소되었습니다
